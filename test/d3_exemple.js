import React, { useState, useEffect } from "react";
import "./styles.css";
import * as d3 from "d3";
import { Linechart } from "./Linechart";

const parseDate = d3.timeParse("%m/%d/%Y");
const parseDate2 = d3.timeParse("%Y-%m-%d");

export default function App() {
  const [dataset, setData] = useState([]);

  async function fetchData() {
    const data = await Promise.all(
      d3.range(2013, 2020).map(year =>
        d3.csv(`kbp${year}.csv`, row => ({
          date: row.Date.includes("/")
            ? parseDate(row.Date)
            : parseDate2(row.Date),
          race: row.Race,
          gender: row.Gender
        }))
      )
    );

    setData(data.flat());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Monthly Police Shootings since 2015</h1>
      <p>
        A React, D3, and Hooks example using data from{" "}
        <a href="https://killedbypolice.net/">Killed by Police</a>
      </p>
      <p>{dataset.length} datapoints loaded</p>

      <svg width="100%" height="500">
        <Linechart
          data={dataset}
          width={500}
          height={200}
          x={50}
          y={30}
          race={"B"}
        />

        <Linechart
          data={dataset}
          width={500}
          height={200}
          x={50}
          y={250}
          race={"W"}
        />
      </svg>
    </div>
  );
}
