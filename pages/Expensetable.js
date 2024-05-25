import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Table.css";
import Graph from "../components/Graph";
import "boxicons";
import UserContext from "../contexts/UserContext";
import Labels from "../components/Labels";

function Expensetable() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    // IIFE (Immediate Invoke Function Expression)
    if (user) {
      (async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/labels/${user._id}`
          );
          setTransaction(data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="body">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="rext-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          EXPENSE CHART
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4"></div>
      <div className="charts">
        <div className="first">
          <div className="grid md:grid-cols-1 gap-4">
            <Graph/>
          </div>
        
        </div>
      {Transaction}
        <div className="second">
          <div className="flex flex-col py-6 gap-6 ">
            <h1 className="font-bold text-xl history ">History</h1> 
            {/* py-4 */}
            <div className="col-lg-14 col-md-12">
              <table className="exptable ">
                <tr className="tabhead">
                  <th className="headtb">Categogry</th>
                  <th className="headtb">Name</th>
                  <th className="headtb">Amount</th>
                  <th className="headtb">Edit</th>
                  <th className="headtb">Delete</th>
                </tr>
                {transaction.map((display, ind) => (
                  <tr key={ind} className="tabdata">
                    <td className="datatb">{display.type}</td>
                    <td className="datatb">{display.name}</td>
                    <td className="datatb">{display.amount}</td>
                    <td>
                      <Link to={`/edititem/${display._id}`}>
                        <button className="btntbl1">
                          <box-icon size="15px" name="edit"></box-icon>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/deleteitem/${display._id}`}>
                        <button className="btntbl2">
                          <box-icon size="15px" name="trash"></box-icon>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="">
              <Link to={user ? "/homemain" : "/login"}>
                <Button variant="dark" className="btnAddexp">
                  Add Transaction
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Transaction({ category }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <span className="block w-full">{category.name ?? ""}</span>
    </div>
  );
}

export default Expensetable;
