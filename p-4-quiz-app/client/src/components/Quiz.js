import React, { useEffect, useState } from 'react'
import Question from './Question';
import { useDispatch, useSelector } from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hookks/FetchQuestion';
import { PushAnswer } from '../hookks/setResult';
import {Navigate} from "react-router-dom"

function Quiz() {
  const [check, setChecked] = useState(undefined)
  // const state = useSelector(state => state)
  const result = useSelector(state => state.result.result)

  const {  trace, queue } = useSelector(state => state.questions);
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   console.log("coming from quiz resut",result);
    
  // })



  function onNext(){
    console.log("On next click");
    if(trace < queue.length){
      dispatch(MoveNextQuestion())
      // dispatch(PushAnswer(1))
      if(result.length <= trace){
        dispatch(PushAnswer(check))

      }


    }

    // reset the value undefined
    setChecked(undefined)
    
  }
  function onPrev(){
    console.log("On prev click");

    if(trace >0){
      dispatch(MovePrevQuestion())


    }
    
  }
  function onChecked(check){
    console.log(check);
    setChecked(check)
    
  }

  // finised exam
  if(result.length && result.length >= queue.length){
    return <Navigate to={"/result"} replace="true"></Navigate>
  }



  return (
    <div>
       <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <Question onChecked={onChecked}/>

        <div className='grid'>
          {trace >0 ?<button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
    </div>
  )
}

export default Quiz