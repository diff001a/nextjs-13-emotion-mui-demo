"use client";

import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import { alpha, darken, lighten } from "@mui/material/styles";

interface StyledButtonProps extends ButtonProps {
  round?: boolean;
  width?: string;
  height?: string;
}

const Button = styled(MuiButton)<StyledButtonProps>(
  ({ round, width = "auto", height = "42px", theme }) => ({
    borderRadius: round ? "100vw" : "",
    width: `${width}`,
    height: `${height}`,
    fontWeight: "600",
    "&.MuiButton-contained": {
      background: "var(--gradient)",
      boxShadow: `${alpha(
        darken(theme.palette.primary.main, 0.1),
        0.8
      )} 0px 2px 8px -2px`,
      "&:hover": {
        boxShadow: `${alpha(
          darken(theme.palette.primary.main, 0.1),
          0.8
        )} 0px 2px 13px -2px`,
      },
    },
    "&.MuiButton-containedSecondary": {
      boxShadow: `${alpha(
        darken(theme.palette.secondary.main, 0.1),
        0.5
      )} 0px 2px 7px -2px`,
      "&:hover": {
        boxShadow: `${alpha(
          darken(theme.palette.secondary.main, 0.1),
          0.8
        )} 0px 2px 12px -2px`,
      },
    },

    "&.MuiButton-outlined": {
      border: "none",
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.25),
      },
    },
    "&.MuiButton-outlinedSecondary": {
      border: "none",
      backgroundColor: alpha(theme.palette.secondary.main, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, 0.25),
      },
    },

    "&.MuiButton-text": {
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
      },
    },
    "&.MuiButton-textSecondary": {
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
      },
    },

    "&.Mui-disabled": {
      border: "none",
      color: "#999",
      background: "var(--gray)",
      boxShadow: `none`,
      cursor: "not-allowed",
    },
  })
);

export default Button;
