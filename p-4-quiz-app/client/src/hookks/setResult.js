import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";
const url = process.env.REACT_APP_API_BASE_URL


export const PushAnswer = (result) => async (dispatch) => {
  try {
    dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;

  (async () => {
    try {
      if (!Array.isArray(result) || result.length === 0 || !username) {
        throw new Error(
          "Cannot get results: result is empty or username is missing"
        );
      }

    //   ------------------------------------
    //   const q = await postServerData(
    //     `http://localhost:5000/api/result`,
    //     resultData,
    //     (data) => data
    //   );
    //   // console.log(q);
    //   const insideDataResults = q.data[0].answers;
    //   console.log("setresults com", insideDataResults);
    //   -----------------------------------

             const q = await postServerData(`${url}/api/result`,resultData,(data)=> data)
             console.log(q);
    } catch (err) {
      console.log(err);
    }
  })();
};
