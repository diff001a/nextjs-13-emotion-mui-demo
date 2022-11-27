"use client";

import { alpha, styled } from "@mui/material/styles";
import { TextField as muiTextField } from "@mui/material";

interface styledTextFieldProps {
  width?: string;
  height?: string;
  error?: boolean | undefined;
  sx?: any;
  round?: boolean;
}

const Input = styled(muiTextField)<styledTextFieldProps>(
  ({ width = "auto", height, error, theme, sx, round }) => ({
    input: {
      width: `${width ? width : "100%"}`,
      height: `${height ? height : "42px"}`,
      borderRadius: `${round ? "100vw" : "5px"}`,
      padding: `${round ? "0 20px" : "0 10px"}`,
      background: "var(--background)",
      color: "var(--text)",
      WebkitBoxShadow: "0 0 0 1000px white inset",
      "&:-webkit-autofill": {
        background: "var(--background) !important",
        boxShadow: `0 0 0 1000px var(--background) inset`,
        WebkitTextFillColor: "var(--text) !important",
      },
      "&::placeholder": {
        fontSize: "0.9rem",
        //@ts-ignore
        color: `${alpha(theme.palette.text.default, 0.7)}`,
      },
    },
    "input:-webkit-autofill": {
      background: "var(--background)",
      boxShadow: `0 0 0 1000px var(--background) inset`,
    },
    label: {
      paddingLeft: "1px",
      paddingBottom: "1px",
      //@ts-ignore
      color: `${alpha(theme.palette.text.default, 0.5)}`,
    },

    "& .MuiOutlinedInput-root": {
      background: "var(--gray) !important",
      input: {
        background: "var(--gray) !important",
        borderRadius: `${round ? "100vw" : "5px"}`,
        boxShadow: `0 0 0 1000px var(--gray) inset`,
        "&:-webkit-autofill": {
          background: "var(--gray) !important",
          boxShadow: `0 0 0 1000px var(--gray) inset !important`,
          WebkitTextFillColor: "var(--text) !important",
        },
      },
      "& fieldset": {
        borderRadius: `${round ? "100vw" : "5px"}`,
        borderColor: `${alpha(theme.palette.primary.main, 0.1)}`,
      },
      "&:hover fieldset": {
        borderColor: `${alpha(theme.palette.primary.main, 0.1)}`,
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderColor: `${alpha(theme.palette.primary.main, 0.5)}`,
        boxShadow: `0px 0px 0px 2px ${alpha(theme.palette.primary.main, 0.2)}`,
      },
    },

    "& .MuiInput-root": {
      background: "var(--background)",
      border: "none",
      boxShadow: "var(--boxShadowSmall)",
      margin: "0",
      borderRadius: `${round ? "100vw" : "5px"}`,
      input: {
        background: "var(--background) !important",
        borderRadius: `${round ? "100vw" : "5px"}`,
        boxShadow: `0 0 0 1000px var(--background) inset`,
        WebkitTextFillColor: "var(--text) !important",
        "&:-webkit-autofill": {
          background: "var(--background) !important",
          boxShadow: `0 0 0 1000px var(--background) inset`,
          WebkitTextFillColor: "var(--text) !important",
        },
      },
      "&.Mui-focused": {
        input: {
          boxShadow: "var(--boxShadow),0 0 0 1000px var(--background) inset",
        },
      },
      "&:before, &:after": {
        display: "none",
      },

      "&.Mui-error": {
        border: `1px solid ${alpha(theme.palette.error.main, 0.5)}`,
      },
    },

    "& .MuiFilledInput-root": {
      borderColor: "var(--border)",
      background: "var(--gray) !important",
      input: {
        background: "var(--gray) !important",
        borderColor: "var(--border)",
        boxShadow: `0 0 0 1000px var(--gray) inset !important`,
        "&:-webkit-autofill": {
          background: "var(--gray) !important",
          boxShadow: `0 0 0 1000px var(--gray) inset !important`,
          WebkitTextFillColor: "var(--text) !important",
        },
      },
      "&:before, &:after": {
        borderColor: `${alpha(theme.palette.primary.main, 0.15)} !important`,
      },
      "&.Mui-focused": {
        "&:after": {
          borderColor: "var(--primary) !important",
        },
      },
    },

    "& .Mui-error": {
      "&:hover fieldset": {
        borderColor: `${theme.palette.error.main}`,
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderColor: `${theme.palette.error.main}`,
        boxShadow: `0px 0px 0px 2px ${alpha(theme.palette.error.main, 0.2)}`,
      },
    },
    ...sx,
  })
);

export default Input;
