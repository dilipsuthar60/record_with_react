import './App.css';
// import Fields  from './Fields.js';
import React, { useState } from 'react';
function Fields() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [data, setdata] = useState([]);
  const adddata = () => {
    if (name.length === 0 || email.length === 0) {
      return;
    }
    setdata([...data, {
      name: name,
      email: email
    }]);
    setemail("");
    setname("");
  }
  const remove = (index) => {
    let new_data = data.filter((element, idx) => (idx !== index));
    setdata(new_data);
  }
  return (
    <>
      <div className="container">
        <div className="header">Record Data</div>
      </div>
      <div className="input_item">
        <input value={name} onChange={(e) => setname(e.target.value)}></input>
        <input value={email} onChange={(e) => setemail(e.target.value)} ></input>
        <button onClick={adddata} >Add</button>
      </div>
      <div className="data">
        <div className="data_val">
          <h4 >name</h4>
          <h4>email</h4>
          <h4>Del</h4>
        </div>
        {
          data.map((element, index) => {
            return <>
              <div className="data_val">
                <h4 >{element.name}</h4>
                <h4>{element.email}</h4>
                <button onClick={() => remove(index)} ><h4>Del</h4></button>
              </div>
            </>
          })
        }
      </div>
    </>
  );
}

export default Fields;
