const express = require("express");
const morgan = require("morgan");
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

.get("/exercises", getAllExercises)
.get("/exercises/exercise/:exercise", exerciseById)
.get("/exercises/target/:target", getExercisesByTarget)
.get("/exercises/bodyPart/:bodyPart", getExercisesByBodyPart)
.get("/exercises/name/:name", getExercisesByName)
.get("/exercises/equipment/:equipment", getExercisesByEquipment)
.post("/create-user", createNewUser)
.post("/signin", handleSignIn)
.put("/favorites", addToFavorites)
.delete("/favorites", deleteFromFavorites)
.put("/workout", createWorkout)
.get("/workout/:userId", getWorkout)
.put("/addExercise", addExerciseToWorkout)
.get("/user/:userId", getUserById)
.patch("/user/:userId", updateUser)


// this is our catch all endpoint.
.get("*", (req, res) => {
    res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
    });
})

.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});