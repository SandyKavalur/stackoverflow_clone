import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

import styles from "../../styles/AddQuestion.module.scss";

function AskQuestion() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState(null);

  const [selected, setSelected] = useState(["gfg"]);

  const handleEditorChange = (state) => {
    setEditorState(state);
    // convertContentToHTML();
    // createMarkup(convertedContent);
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(DOMPurify.sanitize(currentContentAsHTML));
  };
  useEffect(() => {
    convertContentToHTML();
  }, [editorState]);

  // Tags Input functionality
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <>
      <div className="container-lg">
        <div className="row">
          <h4 className="my-5 font-weight-normal">Ask a public question</h4>
          <div className="col-md-9 col-sm-12">
            <form className={`${styles.customTextEditor} ${"border"}`}>
              <div className="form-group">
                <>
                  <label
                    for="title"
                    className={`${
                      styles.title
                    } ${"form-label font-weight-bold"}`}
                  >
                    <h5>Title</h5>
                  </label>
                  <div id="titleHelp" className="form-text">
                    Be specific and imagine you’re asking a question to another
                    person
                  </div>
                  <input
                    id="title"
                    className="form-control mb-4"
                    type="text"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </>
                <>
                  <label
                    for="textEditorInput"
                    className={`${
                      styles.textEditorInput
                    } ${"form-label font-weight-bold"}`}
                  >
                    <h5>Body</h5>
                  </label>
                  <div id="textEditorInput" className="form-text">
                    Include all the information someone would need to answer
                    your question
                  </div>

                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName={styles["wrapper-class"]}
                    editorClassName={styles["editor-class"]}
                    toolbarClassName={styles["toolbar-class"]}
                  />
                </>

                <div className={`${styles.tagsWrapper}`}>
                  <label
                    for="tagsInput"
                    className={`${
                      styles.tagsInput
                    } ${"form-label font-weight-bold mt-4"}`}
                  >
                    <h5>Tags</h5>
                  </label>
                  <div id="tagsInputText" className="form-text">
                    Add up to 5 tags to describe what your question is about
                  </div>
                  <div id="tagsInput" className={`${styles.tagsContainer}`}>
                    {tags.map((tag, index) => (
                      <div className={styles.tag}>
                        {tag}
                        <button onClick={() => deleteTag(index)}>x</button>
                      </div>
                    ))}
                    <input
                      value={input}
                      placeholder="Enter a tag"
                      onKeyDown={onKeyDown}
                      onKeyUp={onKeyUp}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div
              className={styles.preview}
              dangerouslySetInnerHTML={{ __html: convertedContent }}
              // {createMarkup(convertedContent)}
            ></div>
          </div>
          <div className="col-md-3">world</div>
        </div>
      </div>
    </>
  );
}

export default AskQuestion;
