import React from "react";
import styled from "styled-components";


function ShareIcon(props) {
  const { src } = props;

  return (
    <ShareIcon1>
      <Color src={src} alt="Color" />
    </ShareIcon1>
  );
}

const ShareIcon1 = styled.div`
  width: 61px;
  height: 61px;
  margin-bottom: 6px;
  display: flex;
`;

const Color = styled.img`
  margin-top: 3.8px;
  margin-left: 5.7px;
  margin-right: 6.3px;
  flex: 1;
  margin-bottom: 4.4px;
  width: 49.03240966796875px;
  object-fit: cover;
`;

export default ShareIcon;
