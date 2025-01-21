const questionMdl = require("../models/questionSchema")
const resultMdl = require("../models/resultSchema")
const {questions} = require("../databse/data.js")

console.log("question from data",questions); 


async function getQuestions(req, res){
    // res.json("questions api get request")
    try{
        const q = await questionMdl.find()
        // res.json("suceess", q)
        res.status(200).json({ status: 'success', data: q });


    }catch(err){
        res.json(err)

    }
}
 async function insertQuestions(req, res){
    // res.json("questions api post request")
    try{
        //  await QuestionsModel.insertMany({questions: [0], answers: [1], function(err, data){
        //     res.status(200).json({ status: 'Datta inserted' });
        const data = {
             questions,
            // answers: answers
        }
        await questionMdl.insertMany(data);
    res.status(200).json({  message: 'Data inserted successfully' });

    }catch(err){
        res.status(500).json({ status: 'error', message: 'Failed to insert questions', error: err.message });
    }
}
 async function dropQuestions(req, res){
    // res.json("questions api delete request")
    try{
      
        await questionMdl.deleteMany();
    res.status(200).json({  message: 'Data deleted successfully' });

    }catch(err){
        res.status(500).json({ status: 'error', message: 'Failed to insert questions', error: err.message });
    }
}



// get
async function getResult(req, res){
    // res.json("getResult api get request")
    try{
        const r = await resultMdl.find()
        res.status(200).json({ status: 'success', data: r });


    }catch(err){
        res.json(err)

    }
}
// post
 async function storeResult(req, res){
    // res.json("getResult api post request")
    try{
        const {username, result, attempts, points, achived} = req.body
        if(!username && !result) throw new Error("data not provided...")
            resultMdl.create({username, result, attempts, points, achived}, 
                res.status(200).json({ status: 'success', message: 'Result saved'}))
                console.log("result from result saved");
                

        

    }catch(err){
        res.json({err})

         

    }
    
}
 async function dropResult(req, res){
    // res.json("getResult api delete request")
    try{

        await resultMdl.deleteMany()
        res.status(200).json({ status: 'success', message: 'result to deleted successfully'});

        

    }catch(err){
        res.status(500).json({ status: 'error', message: 'Failed to delete quesanswerstions', error: err.message });


    }
}
module.exports = {getQuestions, insertQuestions, dropQuestions, getResult, storeResult,
    dropResult
}