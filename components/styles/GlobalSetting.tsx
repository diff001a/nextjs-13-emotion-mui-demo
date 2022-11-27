"use client";

import { sizes } from "./variables";
import reset from "./reset";
import { css } from "@emotion/react";

/* ===============================================
#  set css variables
=============================================== */
function setSize() {
  return css`
    :root {
      --width: ${sizes.width};
      --headerHeight: ${sizes.headerHeight};
      --headerHeightSp: ${sizes.headerHeightSp};
    }
  `;
}

/* ===============================================
#  font setting
=============================================== */
const font = css`
  font-family: -apple-system, system-ui, "Segoe UI", "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", "ヒラギノ角ゴ ProN W3", Arial, メイリオ, Meiryo, sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -moz-font-feature-settings: "palt";
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  letter-spacing: 0.08em;
  font-variant-ligatures: no-common-ligatures;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  color: var(--text);
  font-size: ${sizes.font}px;
  @media screen and (max-width: 780px) {
    font-size: 85%;
  }
`;

/* ===============================================
#  global style
=============================================== */
export const globalStyle = css`
  ${reset}
  ${setSize()}
  html {
    body {
      background: var(--background);
    }
    ${font}
    input,
    button,
    textarea,
    button,
    select {
      ${font}
    }
    a {
      color: var(--link);
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:before,
  *:after {
    box-sizing: border-box;
  }
  img.emoji {
    height: 1.1em !important;
    width: 1.1em !important;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
  }
  .flex {
    display: flex;
    &.row {
      flex-direction: row;
    }
    &.column {
      flex-direction: column;
    }
    &.center {
      justify-content: center;
      align-items: center;
    }
    &.justify-start {
      justify-content: flex-start;
    }
    &.justify-end {
      justify-content: flex-end;
    }
    &.justify-center {
      justify-content: center;
    }
    &.justify-stretch {
      justify-content: stretch;
    }
    &.justify-between {
      justify-content: space-between;
    }
    &.align-start {
      align-items: flex-start;
    }
    &.align-end {
      align-items: flex-end;
    }
    &.align-center {
      align-items: center;
    }
    &.align-stretch {
      align-items: stretch;
    }
  }
  .tac {
    text-align: center;
  }
  .mt-auto {
    margin-top: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  @media screen and (min-width: 781px) {
    .sp {
      display: none !important;
    }
  }
  @media screen and (max-width: 780px) {
    .pc {
      display: none !important;
    }
  }
`;
