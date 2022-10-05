import React from "react";
import styled from "styled-components";


function CategoryName(props) {
  const { className } = props;

  return (
    <CategoryName1 className={`category-name ${className || ""}`}>
      <OverlapGroup5 className="overlap-group5-1">
        <AccentColor className="accent-color">Accent Color</AccentColor>
      </OverlapGroup5>
      <AccentColorBox className="accent-color-box"></AccentColorBox>
    </CategoryName1>
  );
}

const CategoryName1 = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 287px;
  gap: 9px;

  &.category-name.category-name-1 {
    margin-right: 2px;
  }
`;

const OverlapGroup5 = styled.div`
  height: 63px;
  display: flex;
  padding: 10.5px 8px;
  align-items: flex-end;
  min-width: 198px;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const AccentColor = styled.div`
  min-height: 37px;
  min-width: 182px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const AccentColorBox = styled.div`
  width: 80px;
  height: 63px;
  background-color: var(--sea-pink);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--new-york-pink);
  box-shadow: 3px 3px 1px #00000029;
`;

export default CategoryName;
