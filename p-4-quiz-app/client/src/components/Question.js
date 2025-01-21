import React, { useEffect, useState } from "react";
// import quizData from '../database/data';
import { useFetchQuestion } from "../hookks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hookks/setResult";

function Question({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  const dispatch = useDispatch();

  // const allDataQuestions=quizData.questions
  // const question1 = quizData.questions[0]
  // console.log("coming ffrom actual data all data",quizData);
  // console.log("coming ffrom actual data question1",question1);
  // console.log("coming ffrom actual data question1",allData);

  const { isLoading, apiData, serverError } = useFetchQuestion();
  // useSelector(state => console.log("coming from state",state))

  // const {questions} = useSelector(state=> state)
  // const questions = useSelector(state => state.questions)

  // const questions = useSelector(state => state.questions.queue[0])
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  // const questions = useSelector(
  //   (state) => state.questions
  // );
  // const trace = useSelector(state => state.questions.trace)

  //

  useEffect(() => {
    // console.log(allDataQuestions);
    // console.log(question1);
    // console.log(question1.options);
    // console.log(quizData);

    // console.log(isLoading);
    // console.log("coming from question.js api",apiData);
    // console.log(serverError);
    // console.log(question1s);
    // console.log(questions);
    // console.log(trace);

    // console.log(questions.queue);
    // console.log(questions.queue[0]);
    console.log({trace, checked});
    
    // dispatch(updateResult({ trace, checked }));
  },[checked]);

  function onSelect(i) {
    // console.log(i,"radio button")
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));

  }
  // if(isLoading) return <h3 className="text-light">isLoading</h3>
  if (serverError)
    return <h3 className="text-light">{serverError || "unknown error"}</h3>;

  return (
    <div className="questions">
      {/* <h1 onClick={() => console.log({})}>Hello</h1> */}
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${result[trace]=== i ? "checked": ""}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
