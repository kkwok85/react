import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Caleb",
        role: "Developer",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      },
      {
        name: "Sal",
        role: "Manager",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      },
      {
        name: "Caleb",
        role: "Developer",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      },
      {
        name: "Caleb",
        role: "Developer",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      },
      {
        name: "Caleb",
        role: "Developer",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      },
      {
        name: "Caleb",
        role: "Developer",
        img: "https://images.pexels.com/photos/1096657/pexels-photo-1096657.jpeg"
      }

    ]


  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (

      
      <>
      <input type = 'text' onChange ={(e) =>{
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
      <div className = "flex flex-wrap justify-center">
          {employees.map( (employee) => {
            console.log(employee);
            // since this is a function, so need to have a return
            return(
              <Employee 
              key = {uuidv4()}
              name={employee.name} 
              role = {employee.role} 
              img = {employee.img} 
              />
            );
          } ) }
      </div>

      </>
      ) : (
        <p>You cannot see the employees</p>
      )}


    </div>
  );
}

export default App;
