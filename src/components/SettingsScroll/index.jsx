import React from "react";
import CategoryName from "../CategoryName";
import CategoryName3 from "../CategoryName3";
import Heading from "../Heading";
import styled from "styled-components";
import { RalewayNormalDoveGray30px, RalewaySemiBoldWhite30px } from "../../styledMixins";
import "./SettingsScroll.css";

function SettingsScroll(props) {
  const {
    displaySettings,
    notificationSettings,
    scheduleNotifications,
    on1,
    place,
    stimuliSettings,
    confetti,
    on2,
    viewTutorial,
    categoryNameProps,
    categoryName31Props,
    categoryName32Props,
    categoryName33Props,
    headingProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings-scroll screen">
        <OverlapGroup3>
          <DisplaySettings>
            <DisplaySettings1>{displaySettings}</DisplaySettings1>
            <CategoryName className={categoryNameProps.className} />
            <CategoryName3 path29={categoryName31Props.path29} />
            <CategoryName3 path29={categoryName32Props.path29} />
            <CategoryName3 path29={categoryName33Props.path29} />
          </DisplaySettings>
          <Heading className={headingProps.className} />
        </OverlapGroup3>
        <NotificationSettings>
          <NotificationSettings1>{notificationSettings}</NotificationSettings1>
          <CategoryName1>
            <OverlapGroupContainer>
              <NotificationsContainer>
                <ScheduleNotificationsButton></ScheduleNotificationsButton>
                <ScheduleNotifications>{scheduleNotifications}</ScheduleNotifications>
              </NotificationsContainer>
              <OverlapGroup1>
                <ON>{on1}</ON>
              </OverlapGroup1>
            </OverlapGroupContainer>
            <OverlapGroup>
              <Place>{place}</Place>
            </OverlapGroup>
          </CategoryName1>
        </NotificationSettings>
        <StimuliSettings>
          <NotificationSettings1>{stimuliSettings}</NotificationSettings1>
          <CategoryName2>
            <OverlapGroup11>
              <Confetti>{confetti}</Confetti>
            </OverlapGroup11>
            <OverlapGroup2>
              <ON>{on2}</ON>
            </OverlapGroup2>
          </CategoryName2>
        </StimuliSettings>
        <ViewTutorial>
          <ViewTutorial1>{viewTutorial}</ViewTutorial1>
        </ViewTutorial>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 379px;
  height: 344px;
  position: relative;
  margin-top: -41px;
`;

const DisplaySettings = styled.div`
  position: absolute;
  width: 323px;
  top: 0;
  left: 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 344px;
`;

const DisplaySettings1 = styled.div`
  ${RalewayNormalDoveGray30px}
  width: 323px;
  min-height: 37px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
`;

const NotificationSettings = styled.div`
  width: 323px;
  height: 201px;
  margin-top: 30px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NotificationSettings1 = styled.div`
  ${RalewayNormalDoveGray30px}
  margin-right: -2px;
  flex: 1;
  max-height: 37px;
  height: 37px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
`;

const CategoryName1 = styled.div`
  margin-left: 17px;
  margin-right: 17px;
  flex: 1;
  max-height: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 145px;
  gap: 7px;
`;

const OverlapGroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 287px;
  gap: 9px;
`;

const NotificationsContainer = styled.div`
  width: 198px;
  height: 84px;
  position: relative;
`;

const ScheduleNotificationsButton = styled.div`
  position: absolute;
  width: 198px;
  height: 83px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const ScheduleNotifications = styled.div`
  ${RalewayNormalDoveGray30px}
  position: absolute;
  top: 12px;
  left: 13px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  height: 83px;
  display: flex;
  padding: 20.5px 16px;
  align-items: flex-end;
  min-width: 80px;
  background-color: var(--sea-pink);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px 3px 1px #00000029;
`;

const ON = styled.div`
  ${RalewaySemiBoldWhite30px}
  min-height: 37px;
  min-width: 48px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 54px;
  margin-left: 1px;
  display: flex;
  padding: 8.5px 18px;
  align-items: flex-end;
  min-width: 128px;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const Place = styled.div`
  min-height: 32px;
  min-width: 92px;
  font-family: var(--font-family-raleway);
  font-weight: 400;
  color: var(--dove-gray);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 25px;
  white-space: nowrap;
`;

const StimuliSettings = styled.div`
  width: 323px;
  height: 119px;
  margin-top: 30px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryName2 = styled.div`
  margin-left: 17px;
  margin-right: 17px;
  flex: 1;
  max-height: 63px;
  display: flex;
  align-items: flex-start;
  min-width: calc(100% - 34px);
  gap: 9px;
`;

const OverlapGroup11 = styled.div`
  height: 63px;
  display: flex;
  padding: 10.5px 43px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 198px;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const Confetti = styled.div`
  ${RalewayNormalDoveGray30px}
  min-height: 37px;
  min-width: 111px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  height: 63px;
  display: flex;
  padding: 10.5px 16px;
  align-items: flex-end;
  min-width: 80px;
  background-color: var(--sea-pink);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px 3px 1px #00000029;
`;

const ViewTutorial = styled.div`
  height: 63px;
  margin-top: 46px;
  margin-left: 1px;
  display: flex;
  padding: 10.5px 51px;
  align-items: flex-end;
  min-width: 286px;
  background-color: var(--sea-pink);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px 3px 1px #00000029;
`;

const ViewTutorial1 = styled.div`
  ${RalewaySemiBoldWhite30px}
  min-height: 37px;
  min-width: 184px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default SettingsScroll;
