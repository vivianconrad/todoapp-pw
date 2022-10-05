import React from "react";
import styled from "styled-components";
import { RalewaySemiBoldWhite30px } from "../../styledMixins";


function Heading(props) {
  const { className } = props;

  return (
    <Heading1 className={`heading-1 ${className || ""}`}>
      <BackButtonLeft className="back-button-left" src="/img/back-button-left-1@1x.png" alt="Back Button Left" />
      <Settings className="settings">Settings</Settings>
    </Heading1>
  );
}

const Heading1 = styled.div`
  width: 379px;
  height: 71px;
  margin-top: -2px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--sea-pink);
  border: 3px solid;
  border-color: var(--new-york-pink);

  &.heading-1.heading-2 {
    position: absolute;
    top: 39px;
    left: 0;
    box-shadow: 0px 30px 20px #00000029;
    margin-top: unset;
  }
`;

const BackButtonLeft = styled.img`
  margin-top: 15.5px;
  margin-bottom: 15.5px;
  width: 35px;
  margin-left: 10.5px;
  object-fit: cover;
`;

const Settings = styled.div`
  ${RalewaySemiBoldWhite30px}
  margin-bottom: -14.7px;
  width: 119px;
  height: 37px;
  margin-right: 18px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default Heading;
