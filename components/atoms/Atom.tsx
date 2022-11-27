import styled from "@emotion/styled";

type ComponentType = {};

const Wrapper = styled.div``;

const Component = ({ ...props }: ComponentType) => {
  return (
    <Wrapper {...props}>
      <span>Hi.</span>
    </Wrapper>
  );
};

export default Component;
