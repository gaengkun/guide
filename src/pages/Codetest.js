import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
const Codetest = () => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      const.test
    </SyntaxHighlighter>
  );
};

export default Codetest;
