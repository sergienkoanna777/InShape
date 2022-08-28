const express = require("express");
const morgan = require("morgan");
const{
    getAllExercises, 
    getExercisesByTarget,
    exerciseById,
    getExercisesByBodyPart,
    getExercisesByName,
    getExercisesByEquipment
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