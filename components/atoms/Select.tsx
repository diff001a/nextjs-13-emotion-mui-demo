//@ts-nocheck
"use client";

import React from "react";
import ReactSelect from "react-select";
import { alpha, darken, lighten } from "@mui/material/styles";
import { colors } from "@/components/styles/variables";

const colourStyles = {
  control: (base, state, style) => ({
    ...base,
    width: state.selectProps.width,
    height: state.selectProps.height,
    background: "var(--gray)",
    padding: "0 5px",
    borderColor:
      state.isFocused && !state.selectProps.error
        ? `${alpha(state.selectProps.palette.primary, 0.5)}`
        : state.selectProps.error
        ? "var(--error)"
        : `${alpha(state.selectProps.palette.primary, 0.1)}`,
    outline: "none",
    boxShadow:
      state.isFocused && !state.selectProps.error
        ? `0px 0px 0px 2px ${alpha(state.selectProps.palette.primary, 0.2)}`
        : state.isFocused && state.selectProps.palette.error
        ? `0 0 0 2px ${alpha(state.selectProps.palette.error, 0.2)}`
        : "none",
    cursor: "pointer",
    "&:hover": {
      border: state.selectProps.error
        ? "1px solid var(--error)"
        : state.isFocused
        ? `1px solid ${alpha(state.selectProps.palette.primary, 0.5)}`
        : `1px solid ${alpha(state.selectProps.palette.primary, 0.1)}`,
    },
    ...state.selectProps.style,
  }),
  menu: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: "var(--background)",
      border: "0 !important",
      outline: "none !important",
      zIndex: "999",
      padding: "5px",
      boxShadow: "var(--boxShadowSmall)",
      transition: "0.4s ease",
    };
  },
  option: (styles, { isDisabled, isFocused, isSelected, selectProps }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? `${alpha(selectProps.palette.primary, 0.2)}`
        : "var(--background)",
      color: isSelected ? "var(--primary)" : "var(--text)",
      fontWeight: isSelected ? "600" : "400",
      boxShadow: "none !important",
      cursor: isDisabled ? "not-allowed" : "pointer",
      borderRadius: "5px",
      fontSize: "13px",
      boxShadow: "0",
      ":hover": {
        border: "0",
        color: isSelected ? "var(--primary)" : "var(--text)",
        backgroundColor: isSelected
          ? ""
          : `${alpha(selectProps.palette.primary, 0.2)}`,
      },
      ":active": {
        color: isSelected ? "var(--primary)" : "var(--text)",
        backgroundColor: isSelected
          ? ""
          : `${alpha(selectProps.palette.text, 0.05)}`,
      },
    };
  },
  input: (styles, style, fontSize) => ({
    ...styles,
    color: "var(--text)",
  }),
  placeholder: (styles, { selectProps }) => ({
    ...styles,
    color: `${alpha(selectProps.palette.text, 0.4)}`,
    opacity: "0.7",
    paddingLeft: "3px",
  }),
  singleValue: (styles, { data }) => ({ ...styles, color: "var(--text)" }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "var(--border)",
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "none",
    borderRadius: "30px",
    padding: "0 5px",
    marginRight: "3px",
    overflow: "hidden",
    background: "var(--gradient)",
    boxShadow: "var(--boxShadowSmall)",
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "5px 3px",
    zIndex: "999",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    background: "var(--gradient)",
    color: "#fff",
    fontWeight: 600,
  }),
  multiValueRemove: (styles, state) => ({
    ...styles,
    background: "var(--primaryLight)",
    color: "#fff",
    borderRadius: 0,
    ":hover": {
      background: "var(--primaryLight)",
      opacity: "0.9",
    },
  }),
};

type SelectType = {
  width?: string;
  height?: string;
  isMulti?: boolean;
  options: any;
  defaultValue?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  error?: boolean;
  fontSize?: string;
  style?: any;
  className?: string;
};

const Select = ({
  width = "100%",
  height = "auto",
  isMulti = false,
  fontSize = "1rem",
  style = {},
  options,
  placeholder = "Select",
  defaultValue,
  value,
  onChange,
  error,
  ...other
}: SelectType) => {
  return (
    <ReactSelect
      id="selectbox"
      instanceId="selectbox"
      width={width}
      height={height}
      options={options}
      isMulti={isMulti}
      styles={colourStyles}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      error={error}
      classNamePrefix="mySelect"
      palette={colors}
      fontSize={fontSize}
      style={style}
      {...other}
    />
  );
};

export default Select;
