import React from "react";
import styled from "styled-components";


function BadPieChart(props) {
  const { path3, path4, path5, line2, line3, line4 } = props;

  return (
    <BadPieChart1>
      <Ellipse8></Ellipse8>
      <Path3 src={path3} alt="Path 3" />
      <Path4 src={path4} alt="Path 4" />
      <Path5 src={path5} alt="Path 5" />
      <Ellipse1></Ellipse1>
      <Ellipse3></Ellipse3>
      <Line2 src={line2} alt="Line 2" />
      <Line3 src={line3} alt="Line 3" />
      <Line4 src={line4} alt="Line 4" />
    </BadPieChart1>
  );
}

const BadPieChart1 = styled.div`
  flex: 1;
  width: 225px;
  position: relative;
  border-radius: 112.5px;
  border: 5px solid;
  border-color: var(--dove-gray);
  box-shadow: 3px -3px 2px #00000029;
`;

const Ellipse8 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 1px;
  border-radius: 112.5px;
  border: 5px solid;
  border-color: var(--dove-gray);
  box-shadow: -3px -3px 2px #00000029;
`;

const Path3 = styled.img`
  position: absolute;
  width: 101px;
  height: calc(100% - 14px);
  top: 10px;
  left: 0;
  object-fit: cover;
`;

const Path4 = styled.img`
  position: absolute;
  width: 151px;
  height: 93px;
  top: 1px;
  right: 7px;
  object-fit: cover;
`;

const Path5 = styled.img`
  position: absolute;
  width: 137px;
  height: 149px;
  right: 1px;
  bottom: 1px;
  object-fit: cover;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 1px;
  border-radius: 112.5px;
  border: 5px solid;
  border-color: var(--dove-gray);
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: calc(100% - 102px);
  height: 123px;
  top: calc(46.08% - 57px);
  left: 51px;
  background-color: var(--white);
  border-radius: 61.5px;
  border: 5px solid;
  border-color: var(--dove-gray);
`;

const Line2 = styled.img`
  position: absolute;
  width: 26px;
  height: 44px;
  top: 9px;
  left: calc(32.89% - 9px);
  object-fit: cover;
`;

const Line3 = styled.img`
  position: absolute;
  width: 49px;
  height: 23px;
  top: calc(36.16% - 8px);
  right: 6px;
  object-fit: cover;
`;

const Line4 = styled.img`
  position: absolute;
  width: 19px;
  height: 54px;
  left: calc(40.31% - 8px);
  bottom: 3px;
  object-fit: cover;
`;

export default BadPieChart;
