import React from "react";
import styled from "styled-components";
import { RalewayNormalDoveGray30px } from "../../styledMixins";


function CategoryName3(props) {
  const { path29 } = props;

  return (
    <CategoryName>
      <Path29 src={path29} alt="Path 29" />
      <CategoryName1>Category Name</CategoryName1>
    </CategoryName>
  );
}

const CategoryName = styled.div`
  width: 286px;
  height: 63px;
  margin-top: 12px;
  margin-right: 1px;
  display: flex;
  gap: 1px;
  background-color: var(--white);
  border-radius: 15px;
  border: 1px solid;
  border-color: var(--pink-swan);
  box-shadow: 3px 3px 1px #00000029;
`;

const Path29 = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const CategoryName1 = styled.div`
  ${RalewayNormalDoveGray30px}
  align-self: flex-end;
  margin-bottom: -13.5px;
  width: 221px;
  height: 37px;
  margin-right: 32px;
  flex: 1;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default CategoryName3;
