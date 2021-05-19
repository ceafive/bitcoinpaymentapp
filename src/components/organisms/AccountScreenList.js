import React from "react";

import ListWithIcon from "../molecules/lists/ListWithIcon";

const AccountScreenList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { itemName } = item;
        return <ListWithIcon key={itemName} {...item} />;
      })}
    </>
  );
};

export default AccountScreenList;
