import React from "react";
import Heading from "../Heading";
import ProfileCoin from "../ProfileCoin";
import CategoryName from "../CategoryName";
import CategoryName2 from "../CategoryName2";
import styled from "styled-components";
import "./SettingsLight.css";

function SettingsLight(props) {
  const {
    profile,
    name,
    displaySettings,
    profileCoinProps,
    categoryName21Props,
    categoryName22Props,
    categoryName23Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings-light raleway-normal-dove-gray-30px screen">
        <Heading />
        <Profile>{profile}</Profile>
        <Group5>
          <ProfileCoin heartIconProps={profileCoinProps.heartIconProps} />
        </Group5>
        <Name>
          <NameContainer>
            <NameBox></NameBox>
            <Name1>{name}</Name1>
          </NameContainer>
        </Name>
        <DisplaySettings>{displaySettings}</DisplaySettings>
        <CategoryName />
        <CategoryName2 overlapGroup3={categoryName21Props.overlapGroup3} />
        <CategoryName2 overlapGroup3={categoryName22Props.overlapGroup3} className={categoryName22Props.className} />
        <CategoryName2 overlapGroup3={categoryName23Props.overlapGroup3} className={categoryName23Props.className} />
      </div>
    </div>
  );
}

const Profile = styled.div`
  width: 98px;
  min-height: 37px;
  margin-top: 20px;
  margin-left: 3px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
`;

const Group5 = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  margin-top: 18px;
  display: flex;
`;

const Name = styled.div`
  height: 83px;
  margin-top: 20px;
  margin-left: 1px;
  display: flex;
  align-items: flex-end;
  min-width: 286px;
`;

const NameContainer = styled.div`
  width: 286px;
  height: 90px;
  position: relative;
  margin-bottom: -7px;
`;

const NameBox = styled.div`
  position: absolute;
  width: 286px;
  height: 63px;
  top: 0;
  left: 0;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const Name1 = styled.div`
  position: absolute;
  top: 18px;
  left: 14px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const DisplaySettings = styled.div`
  width: 323px;
  min-height: 37px;
  margin-top: 4px;
  margin-left: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
`;

export default SettingsLight;
