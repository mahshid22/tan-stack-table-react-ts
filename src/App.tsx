import { useState } from "react";
import "./App.css";
import Table from "./table/Table";
import { MOCK_DATA } from "./data";
import { column } from "./table/column";

function App() {
  return (
    <>
      <div>
        <p className="font-bold text-white">hello</p>
        <Table data={MOCK_DATA} columns={column} />
      </div>
    </>
  );
}

export default App;
