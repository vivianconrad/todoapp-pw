import React from "react";
import Smile from "../Smile";
import SendButton from "../SendButton";
import BadPieChart from "../BadPieChart";
import RedTask from "../RedTask";
import Task from "../Task";
import Task2 from "../Task2";
import styled from "styled-components";
import { RalewayNormalDoveGray30px, RalewayNormalStack17px, RalewaySemiBoldWhite30px } from "../../styledMixins";
import "./LandingPageColorLight.css";

function LandingPageColorLight(props) {
  const {
    title,
    letsAddATaskTypeHere,
    task,
    smileProps,
    sendButtonProps,
    badPieChartProps,
    redTaskProps,
    taskProps,
    task21Props,
    task22Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page-color-light screen">
        <OverlapGroup5>
          <Title>{title}</Title>
          <Smile
            overlapGroup={smileProps.overlapGroup}
            path7={smileProps.path7}
            path28={smileProps.path28}
            path6={smileProps.path6}
          />
        </OverlapGroup5>
        <TextBox>
          <LetsAddATaskTypeHere>{letsAddATaskTypeHere}</LetsAddATaskTypeHere>
          <SendButton src={sendButtonProps.src} />
        </TextBox>
        <PieChart>
          <BadPieChart
            path3={badPieChartProps.path3}
            path4={badPieChartProps.path4}
            path5={badPieChartProps.path5}
            line2={badPieChartProps.line2}
            line3={badPieChartProps.line3}
            line4={badPieChartProps.line4}
          />
        </PieChart>
        <Task1>
          <TaskContainer>
            <RedTask path8={redTaskProps.path8} line1={redTaskProps.line1} path17={redTaskProps.path17} />
            <Task3>{task}</Task3>
          </TaskContainer>
        </Task1>
        <Task path8={taskProps.path8} line1={taskProps.line1} />
        <Task2 greenTaskProps={task21Props.greenTaskProps} />
        <Task2 greenTaskProps={task22Props.greenTaskProps} />
      </div>
    </div>
  );
}

const OverlapGroup5 = styled.div`
  height: 71px;
  position: relative;
  margin-top: -2px;
  display: flex;
  padding: 11px 25px;
  align-items: flex-start;
  min-width: 379px;
  gap: 51px;
  background-color: var(--sea-pink);
  border: 2px solid;
  border-color: var(--new-york-pink);
`;

const Title = styled.h1`
  ${RalewaySemiBoldWhite30px}
  min-height: 37px;
  align-self: center;
  margin-top: 3px;
  min-width: 228px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const TextBox = styled.div`
  width: 345px;
  height: 82px;
  position: relative;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const LetsAddATaskTypeHere = styled.div`
  ${RalewayNormalStack17px}
  margin-top: 8.5px;
  width: 218px;
  height: 22px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: 17px;
  white-space: nowrap;
`;

const PieChart = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
  margin-top: 40px;
  margin-right: 0.04px;
  display: flex;
`;

const Task1 = styled.div`
  margin-top: 24px;
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

const Task3 = styled.div`
  ${RalewayNormalDoveGray30px}
  position: absolute;
  top: 18px;
  left: 142px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default LandingPageColorLight;
