import Course from "./course.interface";

interface Istudent{
    id:number,
    name:string,
    age:number,
    dept:string,
    course?: Course;
}
export default Istudent;