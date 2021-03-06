const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
	quizTitle: { 
		type: String, 
		
	 },

	quizSubject:{
		type:String,
		

	},

	quizDate:{

		type: String,
	
	},
	quizTime: {
		type: String,
	
	},

	quizDuration: {
		type: String,	
	},

	quizCode: {
		 type: String,
		 required: true,

	},
    question:[
	{ quizquestion:{
		questiontext: {
			type: String,
			required: true,
		},
		options: [
			 {
				 text: {
					 type: String,
					 required: true,
				 },
			 },
		],
		correctAns: {
			type: String,
			required: true,
		},
	}
    }],
	
	quizStatus: {
		type: Number,
		default: 0,
	},
});	
 
  

module.exports = mongoose.model("Quiz", quizSchema);