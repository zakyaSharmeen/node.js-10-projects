import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

// import quizData from "../database/data";
import * as Action from "../redux/question_reducer";
import { getServerData } from "../helper/helper";
// import { getServerData } from '../helper/helper';

export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    (async () => {
      try {
        // let question = await quizData.questions;
        // let answers = await quizData.answers;
        // --------------
        const url = process.env.REACT_APP_API_BASE_URL
         const q = await getServerData(`${url}/api/questions`,(data)=> data)
         console.log(q);


        


        // const q = await getServerData(`http://localhost:5000/api/questions`,(data)=> data)

        // // const q=await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (quizData)=> quizData)
        // // console.log(q);
        // const { question, answers } = await getServerData(
        //     `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
        //     (data) => data
        //   );

        // const q = await getServerData(`${process.env.REACT_APP_API_BASE_URL}/api/questions`,(data)=> data)

       
        
        // --------------------------------------------to dislond
        const insideDataQuestions = q.data[0].questions
        const insideDataResults = q.data[0].answers
        console.log("com",insideDataQuestions, insideDataResults);
          // --------------------------------------------to dislond


        
        

        // const {insideDataQuestions,insideDataResults} = await getServerData(`http://localhost:5000/api/questions`,(data)=> data)


        // console.log(insideDataQuestions, "inside questions");
        // console.log(insideDataResults, "inside rsults");

        
       


        // m-3
//         const apiUrl = process.env.REACT_APP_API_BASE_URL;  // The API base URL from .env
// const endpoint = '/api/questions';
// const fullUrl = `${apiUrl}${endpoint}`;  
//         const q = await getServerData(`${fullUrl}/api/questions`,(data)=> data)
// console.log(q, "came");




      

        // m-2
        // const serverUrl = process.env.REACT_APP_API_BASE_URL; // Get server URL from .env file

        // const q = await getServerData(`${serverUrl}/api/questions`, (data) => data);
        // console.log(q, 'qqq');

        //                 const serverUrl = process.env.REACT_APP_SERVER_HOSTNAME ;
        // const { question, answers } = await getServerData(`${serverUrl}/api/questions`, (data) => data);

        // console.log("quizdata", quizData);

        // console.log("coming from fetch quetsin",question);
        // console.log("coming from fetch quetsin",answers);

        // -----------------------------------
        // --------------------------------------------to dislond
        if (insideDataQuestions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: true }));
          setGetData((prev) => ({ ...prev, apiData: {insideDataQuestions,insideDataResults } }));

          // Dispatch action
          dispatch(Action.startExamAction({question: insideDataQuestions, answers:insideDataResults }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePreviousAction());
  } catch (error) {
    console.log(error);
  }
};
