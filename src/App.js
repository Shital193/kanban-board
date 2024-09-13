import React, { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import "./index.css";
import Center from "./Components/Center/Center";
const App = () => {
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  return (
    <div className="app">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <Center grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
