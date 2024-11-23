import { useState } from "react";
import Istudent from "../../models/student.interface";
import GetStudent from "./student";
const Getform: React.FC<{ students: Array<Istudent> }> = ({ students }) => {
    const [studentList, setStudentList] = useState<Array<Istudent>>(students);
    const [formData, setFormData] = useState({
        name: "",
        dept: "",
        age: "",
        courseName: "",
        coursegrade: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((oldData) => ({
            ...oldData,[name]: value
        }));
    };
    const addStudent = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, dept, age, courseName, coursegrade } = formData;
        if (!name || !dept || !age  || !courseName || !coursegrade) {
           alert("Please fill in all fields");
           
        }
        const newStudent: Istudent = {
            id: studentList.length + 1,
            name,
            dept,
            age: Number(age),
            course: {
                name: courseName,
                grade: coursegrade,
            },
        };

        setStudentList([...studentList, newStudent]);
        setFormData({
            name: "",
            dept: "",
            age: "",
            courseName: "",
            coursegrade: ""
        });
    };

    return (
        <>
            <div className="border-bottom border-top border-primary bg-light rounded-1 w-50 shadow-lg mx-auto">
                <form className="py-5 d-flex flex-column align-items-center justify-content-center" onSubmit={addStudent}>
                    <input className="w-75 form-control" type="text" name="name" placeholder="Enter name" value={formData.name}  onChange={handleChange} required/>
                    <input className="w-75 my-4 form-control" type="text" name="dept" placeholder="Enter department" value={formData.dept} onChange={handleChange} required/>
                    <input className="w-75 form-control" type="number" name="age" placeholder="Enter age"  value={formData.age}  onChange={handleChange}  required />
                    <input className="w-75 form-control" type="text" name="courseName" placeholder="Enter course name" value={formData.courseName}  onChange={handleChange}  required/>
                    <input  className="w-75 form-control"  type="text"  name="coursegrade"  placeholder="Enter course degree"  value={formData.coursegrade}  onChange={handleChange}  required  />
                    <button className="mb-5 btn btn-outline-primary w-75" type="submit">Add Student</button>
                </form>
            </div>
            <GetStudent students={studentList} />
        </>
    );
};

export default Getform;