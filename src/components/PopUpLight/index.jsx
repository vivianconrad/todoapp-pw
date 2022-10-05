import React from "react";
import ColoredSmile from "../ColoredSmile";
import Task from "../Task";
import ShareIcon from "../ShareIcon";
import SettingIcon from "../SettingIcon";
import styled from "styled-components";
import "./PopUpLight.css";

function PopUpLight(props) {
  const {
    overlapGroup,
    typeSomethingHere,
    polygon1,
    overlapGroup4,
    task,
    completedButtonBlue,
    thisIsATaskDescr,
    itsCompleted,
    coloredSmile1Props,
    task1Props,
    task2Props,
    task3Props,
    task4Props,
    task5Props,
    task6Props,
    task7Props,
    shareIconProps,
    coloredSmile2Props,
    settingIconProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="popup-light screen">
        <GroupContainer>
          <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
            <TypeSomethingHere>{typeSomethingHere}</TypeSomethingHere>
            <OverlapGroup1>
              <Polygon1 src={polygon1} alt="Polygon 1" />
            </OverlapGroup1>
          </OverlapGroup>
          <ColoredSmile path18={coloredSmile1Props.path18} className={coloredSmile1Props.className} />
        </GroupContainer>
        <Task path8={task1Props.path8} line1={task1Props.line1} className={task1Props.className} />
        <Task path8={task2Props.path8} line1={task2Props.line1} />
        <Task1>
          <OverlapGroup4 style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <Task2>{task}</Task2>
            <OverlapGroup2>
              <CompletedButtonBlue src={completedButtonBlue} alt="Completed Button - Blue" />
              <ThisIsATaskDescr>{thisIsATaskDescr}</ThisIsATaskDescr>
              <ItsCompleted>{itsCompleted}</ItsCompleted>
            </OverlapGroup2>
          </OverlapGroup4>
        </Task1>
        <Task path8={task3Props.path8} line1={task3Props.line1} />
        <Task path8={task4Props.path8} line1={task4Props.line1} />
        <Task path8={task5Props.path8} line1={task5Props.line1} />
        <OverlapGroup10>
          <Task path8={task6Props.path8} line1={task6Props.line1} className={task6Props.className} />
          <Task path8={task7Props.path8} line1={task7Props.line1} className={task7Props.className} />
          <Group4>
            <ShareIcon src={shareIconProps.src} />
            <ColoredSmile path18={coloredSmile2Props.path18} className={coloredSmile2Props.className} />
            <SettingIcon src={settingIconProps.src} />
          </Group4>
        </OverlapGroup10>
      </div>
    </div>
  );
}

const GroupContainer = styled.div`
  height: 68px;
  position: relative;
  margin-top: 11px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  min-width: 354px;
  gap: 10px;
`;

const OverlapGroup = styled.div`
  height: 72px;
  align-self: flex-end;
  margin-bottom: -4.5px;
  display: flex;
  padding: 5px 8px;
  align-items: flex-start;
  min-width: 290px;
  gap: 97px;
  background-size: cover;
  background-position: 50% 50%;
`;

const TypeSomethingHere = styled.div`
  min-height: 16px;
  min-width: 125px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--stack);
  font-size: var(--font-size-xxxs);
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  height: 38px;
  align-self: center;
  margin-bottom: 4.5px;
  display: flex;
  padding: 4.7px 13.7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 50px;
  background-color: var(--sea-pink);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
`;

const Polygon1 = styled.img`
  width: 20px;
  height: 25px;
  object-fit: cover;
`;

const Task1 = styled.div`
  height: 180px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 345px;
`;

const OverlapGroup4 = styled.div`
  width: 350px;
  margin-bottom: -4.5px;
  display: flex;
  flex-direction: column;
  padding: 12.7px 9.2px;
  align-items: flex-start;
  min-height: 185px;
  gap: 14px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Task2 = styled.div`
  min-height: 37px;
  align-self: center;
  margin-right: 0.29px;
  min-width: 65px;
  font-family: var(--font-family-raleway);
  font-weight: 600;
  color: var(--dove-gray);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  width: 329px;
  height: 106px;
  position: relative;
`;

const CompletedButtonBlue = styled.img`
  position: absolute;
  width: 97px;
  height: 30px;
  top: 76px;
  left: 115px;
  border-radius: 5px;
  object-fit: cover;
`;

const ThisIsATaskDescr = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--dove-gray);
  font-size: var(--font-size-xxs);
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const ItsCompleted = styled.div`
  position: absolute;
  top: 87px;
  left: 129px;
  font-family: var(--font-family-raleway);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxxs);
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const OverlapGroup10 = styled.div`
  width: 381px;
  height: 145px;
  position: relative;
  margin-top: 15px;
`;

const Group4 = styled.div`
  position: absolute;
  height: 87px;
  top: 22px;
  left: 0;
  display: flex;
  padding: 6px 7px;
  align-items: center;
  min-width: 381px;
  background-color: var(--sea-pink);
  border: 3px solid;
  border-color: var(--new-york-pink);
  box-shadow: 0px -30px 20px #00000029;
`;

export default PopUpLight;
