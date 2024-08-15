import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    courses: "",
    terms: false,
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Enter name"
          type="text"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter email"
          type="email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() => setInputs({ ...inputs, terms: !inputs.terms })}
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            // defaultValue={"male"}
            onChange={handleChange}
          >
            <FormControlLabel value={"male"} label="Male" control={<Radio />} />
            <FormControlLabel
              value={"female"}
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value={"other"}
              label="Other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel htmlFor="menu" id="menu">
            Courses
          </InputLabel>
          <Select
            labelId="menu"
            id="menu"
            label="courses"
            value={inputs.courses}
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Form;
