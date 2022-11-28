import styled from "@emotion/styled";
import LinkComponent from "next/link";

type ComponentType = {};

const Wrapper = styled.div``;

const Link = ({ ...props }: any) => {
  return <LinkComponent {...props} />;
};

export default Link;
