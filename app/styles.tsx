"use client";

import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  height: var(--headerHeight);
  .inner {
    width: var(--width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      ul {
        display: flex;
        gap: 20px;
      }
    }
  }
`;

export const GlobalStyle = () => {
  const style = css`
    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .inner {
      width: var(--width);
    }
  `;
  return <Global styles={style} />;
};
