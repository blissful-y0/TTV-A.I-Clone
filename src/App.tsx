import Landing from "./component/landing/landing.container";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "NotoSans";
            src: url("/NotoSansKR-Thin.otf");
          }
        `}
      />
      <Landing />;
    </>
  );
}

export default App;
