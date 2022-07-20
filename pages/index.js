import styles from "../styles/Home.module.scss";
import { LandingPage } from "../components";

export default function Home() {
  return (
    <>
      <main>
        <LandingPage />
      </main>

      <section>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="anonymous"
        ></script>
      </section>
    </>
  );
}
