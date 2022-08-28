const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const { EXERCISE_DB_KEY } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const request = require('request');

const { v4: uuidv4 } = require("uuid");

const getAllExercises = async(req, res) => {

    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
    }
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    const result = JSON.parse(body);
    result
    ? res.status(200).json({ status: 200, data: result, message: "Success" })
    : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

const exerciseById = async(req, res) => {

    const {exercise} = req.params;

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${exercise}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const result = JSON.parse(body);
        result
        ? res.status(200).json({ status: 200, data: result, message: "Success" })
        : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

const getExercisesByTarget = async(req, res) => {
    
    const {target} = req.params;

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const result = JSON.parse(body);
        result
        ? res.status(200).json({ status: 200, data: result, message: "Success" })
        : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

const getExercisesByBodyPart = async(req, res) => {
    
    const {bodyPart} = req.params;

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const result = JSON.parse(body);
        result
        ? res.status(200).json({ status: 200, data: result, message: "Success" })
        : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

const getExercisesByName = async(req, res) => {
    
    const {name} = req.params;

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const result = JSON.parse(body);
        result
        ? res.status(200).json({ status: 200, data: result, message: "Success" })
        : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

const getExercisesByEquipment = async(req, res) => {
    
    const {equipment} = req.params;
    

    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
        headers: {
            'X-RapidAPI-Key': EXERCISE_DB_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        const result = JSON.parse(body);
        result
        ? res.status(200).json({ status: 200, data: result, message: "Success" })
        : res.status(404).json({ status: 404, message: "Exercise is not found" });
    });
}

module.exports = {
    getAllExercises,
    getExercisesByTarget,
    exerciseById,
    getExercisesByBodyPart,
    getExercisesByName,
    getExercisesByEquipment
}