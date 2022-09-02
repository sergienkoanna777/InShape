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

const createNewUser =async(req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("InShape");
        const {name, lastName, email, gender, age, weight, password, confirmPassword, favorites, workouts, status, clients} = req.body;
        
        //validations

        if(!name){
            return  res.status(400).json({ status: 400, message: "Please, enter your name" });
        }
        else if(!lastName){
            return  res.status(400).json({ status: 400, message: "Please, enter your last name" });
        }
        else if(!status){
            return  res.status(400).json({ status: 400, message: "Please, select your status" });
        }
        else if(!email.includes("@")){
            return  res.status(400).json({ status: 400, message: "Please, enter your valide email" });
        }
        else if(!gender){
            return  res.status(400).json({ status: 400, message: "Please, enter your gender" });
        }
        else if(!age){
            return  res.status(400).json({ status: 400, message: "Please, enter your age" });
        }
        else if(!weight){
            return  res.status(400).json({ status: 400, message: "Please, enter your weight" });
        }
        else if(!password || !confirmPassword){
            return  res.status(400).json({ status: 400, message: "Please, enter your password" });
        }
        else if(password.length<10){
            return  res.status(400).json({ status: 400, message: "Your password shout be 10 charathers minimum" });
        }
        else if(password !== confirmPassword){
            return  res.status(400).json({ status: 400, message: "Your password is not matching your confirmation password" });
        }
        //id for new user
        const _id = uuidv4();
        let newUser = {};
        if(status === "athlet") {
            newUser = {
                _id,
                name: name,
                lastName: lastName,
                email:email,
                gender:gender, 
                age:age, 
                weight:weight, 
                password:password, 
                confirmPassword:confirmPassword, 
                favorites:favorites, 
                workouts:workouts,
                status:status
            }
            
        }
        else if (status === "coach") {
            newUser = {
                _id,
                name: name,
                lastName: lastName,
                email:email,
                gender:gender, 
                age:age, 
                weight:weight, 
                password:password, 
                confirmPassword:confirmPassword, 
                favorites:favorites, 
                workouts:workouts,
                status:status,
                clients:clients
            }
        }
        
         //validation if user exists
        const existingClient = await db.collection("clients").findOne({email:email});
        
        if(existingClient){
            return  res.status(400).json({ status: 400, message: "This email is alredy used" });
        }
        else{
            
            const  result = await db.collection("clients").insertOne(newUser);
            
            result
                ? res.status(201).json({ status: 201, data: newUser, message: "Success" })
                : res.status(400).json({ status: 400, message: "Please provide valid data" });
        }
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const handleSignIn = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {userPassword, userEmail} = req.body;
        console.log(userEmail);
        const user = await db.collection("clients").findOne({email:userEmail});
        if(!user){
            return  res.status(404).json({ status: 404, message: "User is not found" });
        }
        else if (user.password !== userPassword) {
            return  res.status(400).json({ status: 400, message: "Your password is't correct" });
        }
        
        else{
            return res.status(200).json({ status: 200, data: user, message: "Success" })
        }
    }

    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const addToFavorites = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {bodyPart, equipment, gifUrl, id, name, target, description, userId} = req.body;
        const user = await db.collection("clients").findOne({_id:userId});
        const exercise = user.favorites.find((exe) => {
            return exe.id === id
        })
        if(exercise){
            return  res.status(400).json({ status: 400, message: "Exercise is alredy saved" });
        }
        else{
            const query = {"_id":userId};
            const newValues = {$addToSet:{"favorites":{bodyPart, equipment, gifUrl, id, name, target, description}}};
            const result = await db.collection("clients").updateOne(query, newValues);
            result
            ? res.status(201).json({ status: 201, message: "Exercise was saved" })
            : res.status(400).json({ status: 400, message: "Something went wrong" });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const deleteFromFavorites = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {id, userId} = req.body;
        
            const query = {"_id":userId};
            const newValues = {$pull:{"favorites":{"id": id}}};
            const result = await db.collection("clients").updateOne(query, newValues);
            result
            ? res.status(204).json({ status: 204, message: "Exercise was deleted" })
            : res.status(400).json({ status: 400, message: "Something went wrong" });  
    }

    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const createWorkout = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {userId, workoutName, exercises, status, clients} = req.body;
        const workoutId = uuidv4();
        let newWorkout = {};
        if (status === "coach") {
            newWorkout = {
                workoutId:workoutId,
                userId:userId,
                workoutName:workoutName,
                exercises:exercises,
                status:status,
                clients:clients
            }
        }
        else if(status === "athlet") {
            newWorkout = {
                workoutId:workoutId,
                userId:userId,
                workoutName:workoutName,
                exercises:exercises,
                status:status
            }
        }
            const query = {"_id":userId};
            const newValues = {$push:{workouts: newWorkout}};
            const result = await db.collection("clients").updateOne(query, newValues);
            result
            ? res.status(201).json({ status: 201, message: "Workout was created" })
            : res.status(400).json({ status: 400, message: "Something went wrong" });  
    }

    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const addExerciseToWorkout = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {userId, workoutId, bodyPart, equipment, gifUrl, id, name, target, description} = req.body;
            const query = {"_id":userId, "workouts.workoutId":workoutId};
            const newValues = {$push:{"workouts.$.exercises":{
                "id": id,
                "bodyPart": bodyPart, 
                "equipment":equipment, 
                "gifUrl": gifUrl, 
                "name": name, 
                "target":target, 
                "description": description
            }}};
            const result = await db.collection("clients").updateOne(query, newValues);
            result
            ? res.status(201).json({ status: 201, message: "Exercise was added" })
            : res.status(400).json({ status: 400, message: "Something went wrong" });  
    }

    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}

const getUserById = async(req,res) => {
    const client = new MongoClient(MONGO_URI, options);
    try{
        await client.connect();
        const db = client.db("InShape");
        const {userId} = req.params;
            const result = await db.collection("clients").findOne({_id:userId});
            result
            ? res.status(200).json({ status: 200, data:result, message: "Succes" })
            : res.status(400).json({ status: 400, message: "Something went wrong" });  
    }

    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, message: error.message })
    }
    finally{
        client.close();
    }
}
module.exports = {
    getAllExercises,
    getExercisesByTarget,
    exerciseById,
    getExercisesByBodyPart,
    getExercisesByName,
    getExercisesByEquipment,
    createNewUser,
    handleSignIn,
    addToFavorites,
    deleteFromFavorites,
    createWorkout,
    addExerciseToWorkout,
    getUserById
}