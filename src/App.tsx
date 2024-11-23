
import './App.css'
import Getform from './components/student.component/from'

import Istudent from './models/student.interface'

function App() {
 
let students: Array<Istudent>=[]
  return (
    <>
    
    <Getform students={students}></Getform>
    </>
  )
}

export default App 
