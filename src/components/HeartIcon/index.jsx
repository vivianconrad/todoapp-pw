import React from "react";
import styled from "styled-components";


function HeartIcon(props) {
  const { src } = props;

  return (
    <HeartIcon1>
      <IconHeart src={src} alt="icon-heart" />
    </HeartIcon1>
  );
}

const HeartIcon1 = styled.div`
  position: absolute;
  width: 68px;
  height: 68px;
  top: 30px;
  left: 27px;
  display: flex;
`;

const IconHeart = styled.img`
  margin-top: 5.7px;
  margin-left: 3.8px;
  margin-right: 4.4px;
  flex: 1;
  margin-bottom: 8.5px;
  width: 59.8138427734375px;
  object-fit: cover;
`;

export default HeartIcon;
