"use client";

import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

type LoadingProps = {
  width?: string;
  height?: string;
  loading: boolean;
  className?: string;
};

const Wrapper: any = styled.div`
  width: ${(props: any) => props.width || "30px"};
  height: ${(props: any) => props.height || "30px"};
  position: relative;
  .MuiCircularProgress-root {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Loading = ({
  width,
  height,
  loading = false,
  className,
  ...props
}: LoadingProps) => {
  if (loading) {
    return (
      <Wrapper width={width} height={height} className={`${className}`}>
        <CircularProgress />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Loading;
