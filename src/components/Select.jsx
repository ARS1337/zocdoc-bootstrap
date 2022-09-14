import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function Select(props) {
  const [selected,setSelected] = useState("")
  const [show, setShow] = useState(false);
  const list = [
    "popular specialties",
    "Physical care physician (PCP)",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
    "text1",
  ];

  const handleFocus = () => {
    setShow(true);
  };

  const handleBlur = () => {
    setShow(false);
  };

  return (
    <Form.Group
      controlId="exampleForm.ControlInput1"
      tabIndex="-1"
      onFocus={handleFocus}
    >
      <Form.Control
        className="border-0"
        type="text"
        placeholder="Conditions, procedure, specialties..."
        value={selected}
        onFocus={handleFocus}
      />
      {show && (
        <div className="position-absolute SelectDropDown" tabIndex="-2" onFocus={handleBlur} >
          <ul className="list-group">
            {list.map((el,key) => {
              return (
                  <li  key={key} className="list-group-item px-4" onClick={()=>{console.log("el",el);setSelected(el)}}> {el}</li>
              );
            })}
          </ul>
        </div>
      )}
    </Form.Group>
  );
}

export default Select;
