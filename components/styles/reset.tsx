import { css } from "@emotion/react";

const reset = css`
  /*** The new CSS reset - version 1.7.2 (last updated 23.6.2022) ***/
  *:where(:not(html, iframe, canvas, img, svg, video):not(svg*, symbol*)) {
    all: unset;
    display: revert;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a,
  button {
    cursor: revert;
  }
  ol,
  ul,
  menu {
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
  }
  input,
  textarea {
    -webkit-user-select: auto;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  button {
    user-select: none;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  *:focus {
    outline: none;
  }
  textarea {
    white-space: revert;
  }
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }
  ::placeholder {
    color: unset;
  }
  :where([hidden]) {
    display: none;
  }
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }
`;

export default reset;
