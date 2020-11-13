// const mongoose = require('mongoose')

// const QuestionSchema = new mongoose.Schema({
//     description: String,
//     alternatives: [
//         {
//             text: {
//                 type: String,
//                 required: true
//             },
//             isCorrect: {
//                 type: Boolean,
//                 required: true,
//                 default: false
//             }
//         }
//     ]
// })

// module.exports = mongoose.model('Question', QuestionSchema)
const mongoose = require('mongoose')
var questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        trim: true,
        required : [true, 'Question text is a required field']
    },
    options: [String],
    answer: {
        type: Number,
        min: 0,
        max: 3,
        required: [true, 'Answer is a required field']
    },
    solution: {
        type: String,
        trim: true,
        required: false,
        default: ''
    },
    difficultyLevel: {
        type: String,
        trim: true,
        enum: ['E', 'M', 'H'],
        required: [true, 'Difficulty level is a required field']
    },
    questionActive: {
        type: Number,
        default: 1
    }
},
    {
        strict: true,
        runSettersOnQuery: true,
        timestamps: {
            createdAt: 'created', updatedAt: 'updated'
        }


});

module.exports = mongoose.model('Question',questionSchema);
