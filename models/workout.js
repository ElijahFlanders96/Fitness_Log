const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Specify a type of exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "State the exercise name"
                },
                duration: {
                    type: Number,
                    required: "Specify the duration of the exercise, in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;