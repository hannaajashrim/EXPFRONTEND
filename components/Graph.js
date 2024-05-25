import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../calculate/Calculate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

Chart.register(ArcElement);

export default function Graph() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    // IIFE (Immediate Invoke Function Expression)
    if (user) {
      (async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/labels/${user._id}`
          );
          setData(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex justify-contents max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...chart_Data(data)}></Doughnut>
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-2xl text-emerald-400">
              ${getTotal(data) ?? 0}
            </span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels/>
        </div>
      </div>
    </div>
  );
}
