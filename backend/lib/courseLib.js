const courseModel = require("../models/courseModel.js");

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}
module.exports.createFirstCourse = async function(){
    const courses  = await courseModel.find({});
    // const courses = this.getAllCourses();
    if(courses && courses.length>=1){
        return ;
    }
    const firstCourseInput = {
        "title" : "Bz DSA",
        "level" : "easy"
    };
    const course = new courseModel(firstCourseInput);
    await course.save();
}