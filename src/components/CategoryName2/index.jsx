import React from "react";
import styled from "styled-components";


function CategoryName2(props) {
  const { overlapGroup3, className } = props;

  return (
    <CategoryName className={`category-name-2 ${className || ""}`}>
      <OverlapGroup3 className="overlap-group3-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <CategoryName1 className="category-name-3">Category Name</CategoryName1>
      </OverlapGroup3>
    </CategoryName>
  );
}

const CategoryName = styled.div`
  height: 63px;
  margin-top: 12px;
  margin-left: 1px;
  display: flex;
  align-items: flex-end;
  min-width: 286px;
`;

const OverlapGroup3 = styled.div`
  height: 68px;
  margin-bottom: -4.5px;
  display: flex;
  padding: 14px 33px;
  align-items: flex-end;
  min-width: 290px;
  background-size: cover;
  background-position: 50% 50%;
`;

const CategoryName1 = styled.div`
  min-height: 37px;
  min-width: 221px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default CategoryName2;
