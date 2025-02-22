import React from "react";
import "./Header.css";
import DropDown from "../Display/Display";

function Header({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <header>
      <DropDown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
}

export default Header;
