import React from "react";
import GreenTask from "../GreenTask";
import styled from "styled-components";
import { RalewayNormalDoveGray30px } from "../../styledMixins";


function Task2(props) {
  const { greenTaskProps } = props;

  return (
    <Task>
      <TaskContainer>
        <GreenTask path8={greenTaskProps.path8} line1={greenTaskProps.line1} />
        <Task1>Task</Task1>
      </TaskContainer>
    </Task>
  );
}

const Task = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 345px;
`;

const TaskContainer = styled.div`
  width: 345px;
  height: 65px;
  position: relative;
  border-radius: 5px;
`;

const Task1 = styled.div`
  ${RalewayNormalDoveGray30px}
  position: absolute;
  top: 18px;
  left: 142px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default Task2;
