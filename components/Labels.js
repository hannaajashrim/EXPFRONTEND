import { useContext, useEffect, useState } from "react";
import { getLabels } from "../calculate/Calculate";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Labels() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [transactions,setTransactions] = useState([])

  useEffect(() => {
    // IIFE (Immediate Invoke Function Expression)
    if (user) {
      (async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/labels/${user._id}`
          );
         setTransactions(getLabels(data, "type").map((v, i) => (
            <LabelComponent key={i} data={v} />
          )));
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      navigate("/login");
    }
  }, [user]);

  return <>{transactions}</>;
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? "#36312c" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent) ?? 0} %</h3>
    </div>
  );
}

