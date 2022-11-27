"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { alpha, lighten, darken } from "@mui/material/styles";
import { colors } from "./variables";
import { globalStyle } from "./GlobalSetting";
import { Global, css } from "@emotion/react";

const getDesignTokens = () => ({
  palette: {
    background: {
      default: colors.background,
    },
    dividerColor: {
      backgroundColor: colors.border,
    },
    border: {
      default: colors.border,
    },
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: "#fff",
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: "#fff",
    },
    error: {
      main: colors.error,
      light: lighten(colors.error, 0.1),
      dark: darken(colors.error, 0.1),
    },
    warning: {
      main: colors.warning,
      light: lighten(colors.warning, 0.1),
      dark: darken(colors.warning, 0.1),
    },
    success: {
      main: colors.success,
      light: lighten(colors.success, 0.1),
      dark: darken(colors.success, 0.1),
    },
    info: {
      main: colors.info,
      light: lighten(colors.info, 0.1),
      dark: darken(colors.info, 0.1),
    },
    text: {
      default: colors.text,
      secondary: colors.secondaryText,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      "ヒラギノ角ゴ ProN W3",
      "Arial",
      "メイリオ",
      "Meiryo",
      "sans-serif",
    ].join(","),
  },
  shadows: Array(25).fill("none"),
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          position: "static",
          transform: "none",
          transition: "none",

          pointerEvents: "auto",
          cursor: "pointer",
          display: "inline",
          alignSelf: "start",

          fontWeight: "bold",
          fontSize: "0.75rem",
          color: "var(--gray)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
        input: {
          padding: "0",
          height: "auto",
        },
        notchedOutline: {
          top: 0,
          legend: {
            display: "none",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
        input: {
          padding: "0",
          height: "auto",
        },
        notchedOutline: {
          top: 0,
          legend: {
            display: "none",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
        input: {
          padding: "0",
          height: "auto",
        },
        notchedOutline: {
          top: 0,
          legend: {
            display: "none",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {},
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        size: "small",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: "primary",
      },
      default: {
        backgroundColor: "red",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
    },
  },
});

function setColor() {
  let styles = "";
  for (const key in colors) {
    //@ts-ignore
    styles += `--${key}: ${colors[key]};`;
  }

  return css`
    :root {
      ${styles}
    }
    ${globalStyle};
  `;
}

const Theme = ({ children }: { children: any }) => {
  //@ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens()));
  const color = setColor();

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Global styles={color} />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Theme;
