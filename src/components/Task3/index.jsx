import React from "react";
import styled from "styled-components";
import { RalewayNormalDoveGray30px } from "../../styledMixins";


function Task3() {
  return (
    <Task>
      <HatPic>Hat Pic</HatPic>
    </Task>
  );
}

const Task = styled.div`
  height: 106px;
  display: flex;
  padding: 32.5px 35px;
  align-items: flex-end;
  min-width: 171px;
  background-color: var(--white);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const HatPic = styled.div`
  ${RalewayNormalDoveGray30px}
  min-height: 37px;
  min-width: 100px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default Task3;
