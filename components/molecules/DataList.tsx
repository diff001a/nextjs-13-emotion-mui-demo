"use client";

import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.ul`
  li {
    border-bottom: 1px dashed var(--border);
    padding: 5px 0;
    &:last-of-type {
      border-bottom: 0;
    }
  }
`;

const List = styled.li``;

type Data = {
  id: number;
  userId: number;
  title: string;
};

export const DataList = ({ data }: { data: Data[] }) => {
  return (
    <Wrapper>
      {data.map((e) => {
        return (
          <List key={e.id}>
            {e.userId}: {e.title}
          </List>
        );
      })}
    </Wrapper>
  );
};
