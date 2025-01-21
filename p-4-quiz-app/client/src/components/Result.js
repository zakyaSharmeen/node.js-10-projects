import React, { useEffect } from "react";
import ResultTable from "./ResultTable";
import { Link } from "react-router-dom";
import "../styles/Result.css";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import {
  attempts_Numbers,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { usePublishResult } from "../hookks/setResult";

function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  useEffect(() => {
    console.log("total points", totalPoints);

    // console.log("results",result);
    // console.log("attempts taken",attempts);
    // console.log("eraned points",earnPoints);
    console.log(flag);
  });

  const totalPoints = queue.length * 10;
  const attempts = attempts_Numbers(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  console.log({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    console.log("on restart");
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">Daily Tution</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">{totalPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">{queue.length || 0}</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">{attempts || 0}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">{earnPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span
              style={{ color: `${flag ? "green" : "red"}` }}
              className="bold"
            >
              {flag ? "Passed" : "Failed"}
            </span>
          </div>
        </div>

        <div className="start">
          <Link className="btn" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div className="container">
          {/* result table */}
          <ResultTable></ResultTable>
        </div>
      </div>
    </div>
  );
}

export default Result;
