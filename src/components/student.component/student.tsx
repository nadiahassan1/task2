import Istudent from "../../models/student.interface"

const GetStudent :React.FC<{students:Array<Istudent>}> = ({students})=>{
    return<>
    {console.log("student",students)}
    <div>
        <div className="container">
            <div className="row justify-content-center ">
            {students.map((elem)=>{
                    return <div key={elem.id} className=" w-50 border m-3 shadow py-4" >
                        <div>
                            <div className="d-flex justify-content-around my-2">
                              <p>ID : {elem.id}</p>
                              <p>Name : {elem.name}</p>
                            </div> 
                            <div className="d-flex justify-content-around ">  
                             <p>Age : {elem.age}</p>
                             <p>Department : {elem.dept}</p>
                           </div>
                            <div className="d-flex justify-content-around ">  
                             <p>CourseName : {elem.course?.name}</p>
                             <p>CourseDegree : {elem.course?.grade}</p>
                           </div>
                        </div> 
                    </div>
                })}
            </div>
       
       
         </div>
         </div>
    </>
}
export default GetStudent;