import React from "react";
import SendButton2 from "../SendButton2";
import ColoredSmile from "../ColoredSmile";
import Task from "../Task";
import styled from "styled-components";
import { RalewayNormalStack17px } from "../../styledMixins";
import "./ScrollLight.css";

function ScrollLight(props) {
  const {
    overlapGroup,
    letsAddATaskTypeHere,
    overlapGroup9,
    shareIcon,
    group6,
    settingIcon,
    sendButton2Props,
    coloredSmileProps,
    task1Props,
    task2Props,
    task3Props,
    task4Props,
    task5Props,
    task6Props,
    task7Props,
    task8Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="scroll-light screen">
        <GroupContainer>
          <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
            <LetsAddATaskTypeHere>{letsAddATaskTypeHere}</LetsAddATaskTypeHere>
            <SendButton2 src={sendButton2Props.src} />
          </OverlapGroup>
          <Group2>
            <ColoredSmile path18={coloredSmileProps.path18} />
          </Group2>
        </GroupContainer>
        <Task path8={task1Props.path8} line1={task1Props.line1} className={task1Props.className} />
        <Task path8={task2Props.path8} line1={task2Props.line1} />
        <Task path8={task3Props.path8} line1={task3Props.line1} />
        <Task path8={task4Props.path8} line1={task4Props.line1} />
        <Task path8={task5Props.path8} line1={task5Props.line1} />
        <Task path8={task6Props.path8} line1={task6Props.line1} />
        <Task path8={task7Props.path8} line1={task7Props.line1} />
        <OverlapGroup10>
          <Task path8={task8Props.path8} line1={task8Props.line1} className={task8Props.className} />
          <OverlapGroup9 style={{ backgroundImage: `url(${overlapGroup9})` }}>
            <IconShare src={shareIcon} alt="icon-share" />
            <Group6 style={{ backgroundImage: `url(${group6})` }}></Group6>
            <IconSettings src={settingIcon} alt="icon-settings" />
          </OverlapGroup9>
        </OverlapGroup10>
      </div>
    </div>
  );
}

const GroupContainer = styled.div`
  height: 68px;
  margin-top: 11px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  min-width: 354px;
  gap: 10px;
`;

const OverlapGroup = styled.div`
  height: 72px;
  position: relative;
  align-self: flex-end;
  margin-bottom: -4.5px;
  display: flex;
  padding: 15px 4px;
  align-items: flex-start;
  min-width: 290px;
  gap: 4px;
  background-size: cover;
  background-position: 50% 50%;
`;

const LetsAddATaskTypeHere = styled.div`
  ${RalewayNormalStack17px}
  min-height: 22px;
  align-self: center;
  margin-top: 0.5px;
  min-width: 222px;
  letter-spacing: 0;
  line-height: 17px;
  white-space: nowrap;
`;

const Group2 = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
  margin-top: 1px;
  display: flex;
`;

const OverlapGroup10 = styled.div`
  width: 381px;
  height: 144px;
  position: relative;
  margin-top: 15px;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  height: 147px;
  top: -3px;
  left: -30px;
  display: flex;
  padding: 9px 37px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 441px;
  background-size: cover;
  background-position: 50% 50%;
`;

const IconShare = styled.img`
  width: 61px;
  height: 61px;
  margin-bottom: 4px;
  object-fit: cover;
`;

const Group6 = styled.div`
  width: 55px;
  height: 55px;
  margin-left: 101px;
  margin-bottom: 7px;
  background-size: cover;
  background-position: 50% 50%;
`;

const IconSettings = styled.img`
  width: 69px;
  height: 69px;
  margin-left: 78px;
  object-fit: cover;
`;

export default ScrollLight;
