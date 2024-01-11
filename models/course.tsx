import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
	coursename :{
		type: String,
		required: true,
	},
	courseId : {
        type: String,
        required : true,
    }
}
);


export default mongoose.models.Course || mongoose.model("Course", CourseSchema);