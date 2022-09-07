const express = require("express");
const morgan = require("morgan");
// Importing handlers
const{
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
    getUserById,
    updateUser,
    getWorkout
} = require("./handlers");

express()
.use(morgan("tiny"))
.use(express.json())
 // get all exercises USED
.get("/exercises", getAllExercises)
 // get exercise by id USED
.get("/exercises/exercise/:exercise", exerciseById)
 // get exercise by target
.get("/exercises/target/:target", getExercisesByTarget)
// get exercise by bodyPart
.get("/exercises/bodyPart/:bodyPart", getExercisesByBodyPart)
    // get exercise by name
.get("/exercises/name/:name", getExercisesByName)
 // get exercises by equipment type
.get("/exercises/equipment/:equipment", getExercisesByEquipment)
  // create a new user USED
.post("/create-user", createNewUser)
  // post a sign in
.post("/signin", handleSignIn)
  //add exercise in favorites USED
.put("/favorites", addToFavorites)
   //remove exercise from favorites USED
.delete("/favorites", deleteFromFavorites)
 // create a new workout USED
.put("/workout", createWorkout)
 // get a new workout by id
.get("/workout/:userId", getWorkout)
  //add exercise to workout USED
.put("/addExercise", addExerciseToWorkout)
//get user by Id
.get("/user/:userId", getUserById)
 // update a user USED
.patch("/user/:userId", updateUser)


// this is our catch all endpoint.
.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
    });
})
 // Node spins up our server and sets it to listen on port 8000.
.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});