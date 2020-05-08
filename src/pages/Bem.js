import React from "react";
import "../css/bem.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
const Bem = () => {
  return (
    <>
      <section>
        <h2>BEM </h2>
        <h3>
          <b>B</b> - Block
        </h3>
        <h3>
          <b>E</b> - Elembent
        </h3>
        <h3>
          <b>M</b> - Modifier
        </h3>
      </section>

      <section>
        <SyntaxHighlighter language="javascript" style={tomorrow}>
          const.test
        </SyntaxHighlighter>
      </section>
    </>
  );
};

export default Bem;
