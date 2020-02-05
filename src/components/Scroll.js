import React from "react";
import styled from "styled-components";

const Scroll = props => {
  return <Scrol>{props.children}</Scrol>;
};

export default Scroll;

const Scrol = styled.div`
  overflow-y: scroll;
  border: 1em transparent;
  height: 60vh;
`;
