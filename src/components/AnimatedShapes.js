import React from "react";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: lightblue;
  opacity: 0.7;
  position: absolute;
  top: -60px;
`;

export const AnimatedShapes = () => {
  return <Square />;
};

export default AnimatedShapes;
