import React from "react";
import styled from "styled-components";


function SettingIcon(props) {
  const { src } = props;

  return (
    <SettingIcon1>
      <Color src={src} alt="Color" />
    </SettingIcon1>
  );
}

const SettingIcon1 = styled.div`
  height: 69px;
  align-self: flex-start;
  margin-left: 87px;
  display: flex;
  padding: 7.1px 8.5px;
  align-items: flex-start;
  min-width: 69px;
`;

const Color = styled.img`
  width: 51px;
  height: 54px;
  object-fit: cover;
`;

export default SettingIcon;
