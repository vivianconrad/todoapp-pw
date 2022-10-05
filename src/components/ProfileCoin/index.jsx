import React from "react";
import HeartIcon from "../HeartIcon";
import styled from "styled-components";


function ProfileCoin(props) {
  const { heartIconProps } = props;

  return (
    <ProfileCoin1>
      <OverlapGroup>
        <Ellipse15></Ellipse15>
        <Ellipse16></Ellipse16>
        <HeartIcon src={heartIconProps.src} />
      </OverlapGroup>
    </ProfileCoin1>
  );
}

const ProfileCoin1 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-width: 125px;
  background-color: var(--sea-pink);
  border-radius: 62.5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px 3px 1px #00000029;
`;

const OverlapGroup = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  background-color: var(--sea-pink);
  border-radius: 62.5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
  box-shadow: -3px -3px 1px #00000029;
`;

const Ellipse15 = styled.div`
  position: absolute;
  width: 125px;
  height: 125px;
  top: -2px;
  left: -2px;
  background-color: var(--sea-pink);
  border-radius: 62.5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px -3px 1px #00000029;
`;

const Ellipse16 = styled.div`
  position: absolute;
  width: 125px;
  height: 125px;
  top: -2px;
  left: -2px;
  background-color: var(--sea-pink);
  border-radius: 62.5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
  box-shadow: -3px 3px 1px #00000029;
`;

export default ProfileCoin;
