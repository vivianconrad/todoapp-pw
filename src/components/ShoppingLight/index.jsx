import React from "react";
import Task3 from "../Task3";
import styled from "styled-components";
import { RalewayNormalDoveGray30px, RalewaySemiBoldWhite30px } from "../../styledMixins";
import "./ShoppingLight.css";

function ShoppingLight(props) {
  const { extras, backButtonRight, surname } = props;

  return (
    <div className="container-center-horizontal">
      <div className="shopping-light screen">
        <Heading>
          <Extras>{extras}</Extras>
          <BackButtonRight src={backButtonRight} alt="Back Button Right" />
        </Heading>
        <Surname>{surname}</Surname>
        <FlexRow>
          <TaskContainer>
            <Task3 />
            <Task3 />
          </TaskContainer>
          <TaskContainer>
            <Task3 />
            <Task3 />
          </TaskContainer>
        </FlexRow>
      </div>
    </div>
  );
}

const Heading = styled.div`
  width: 379px;
  height: 71px;
  margin-top: -2px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--sea-pink);
  border: 3px solid;
  border-color: var(--new-york-pink);
`;

const Extras = styled.div`
  ${RalewaySemiBoldWhite30px}
  margin-bottom: -14.7px;
  width: 97px;
  height: 37px;
  margin-left: 27px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const BackButtonRight = styled.img`
  margin-top: 15.5px;
  margin-bottom: 15.5px;
  width: 35px;
  margin-right: 10.5px;
  object-fit: cover;
`;

const Surname = styled.div`
  ${RalewayNormalDoveGray30px}
  min-height: 37px;
  margin-top: 20px;
  margin-right: 3px;
  min-width: 150px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 222px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  min-width: 355px;
  gap: 13px;
`;

const TaskContainer = styled.div`
  width: 171px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 222px;
  gap: 10px;
`;

export default ShoppingLight;
