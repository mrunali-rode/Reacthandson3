import "./App.css";
import React, { useState } from "react";

function App() {
  const [Toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    Department: "",
    Rating: "",
    employees: [],
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
   

    const arr = {
      Name: formData.Name,
      Department: formData.Department,
      Rating: formData.Rating,
    };

    let temp = formData.employees;
    temp.push(arr);
    setFormData({ ...formData, employees: temp });
    console.log(formData.employees);
    setToggle(false);
  };

  const displayHandler = () => {
    setToggle(true);
  };

  return (
    <div className="App">
      <h1 className="title">EMPLOYEE FEEDBACK DATA</h1>
      {Toggle ? (
        <form>
          <label className="name">Name : </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <label className="dept">Department : </label>
          <input
            type="text"
            name="Department"
            value={formData.Department}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <label className="ratg">Rating : </label>
          <input
            type="number"
            name="Rating"
            value={formData.Rating}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <br />
          <button className="btn btn-warning btn1" onClick={submitHandler}>
            Submit
          </button>
          {/*HTML Button is of type SUBMIT*/}
        </form>
      ) : (
        <>
          <div className="mainbox container">
            {formData.employees.map((value, index) => {
              return (
                <span className="container box1" key={index}>
                  <span>
                    Name : {value.Name} | Department : {value.Department} |
                    Rating : {value.Rating}
                  </span>
                </span>
              );
            })}
          </div>
          <br />
          <button className="btn btn-warning btn2" onClick={displayHandler}>
            GO BACK
          </button>
        </>
      )}
    </div>
  );
}

export default App;
