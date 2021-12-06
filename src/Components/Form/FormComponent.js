import React from "react";
import "./FormComponent.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const FormComponent = () => {
  const Department = ["IT", "EEE", "ECE", "CSE", "ISE", "ME", "CE"];
  return (
    <div className="FormContainer">
      <Form>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input id="Name" name="name" placeholder="Enter name" type="text" />
        </FormGroup>
        <div className="Details">
          <div className="TwoHalf">
            <FormGroup>
              <Label for="Number">Phone Number</Label>
              <Input
                id="Number"
                name="number"
                placeholder="Enter phone number"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input id="Address" name="address" placeholder="Enter Address" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">DOB</Label>
              <Input
                id="exampleDate"
                name="date"
                placeholder="Enter date of birth"
                type="date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Name">Blood group</Label>
              <Input
                id="Blood"
                name="blood"
                placeholder="Enter blood group"
                type="text"
              />
            </FormGroup>
          </div>
          <div className="TwoHalf">
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                id="Email"
                name="email"
                placeholder="Enter email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                name="password"
                placeholder="Enter password"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Year of study</Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Department</Label>
              <Input id="exampleSelect" name="select" type="select">
                {Department.map((item) => (
                  <option>{item}</option>
                ))}
              </Input>
            </FormGroup>
          </div>
        </div>
        <div className="Footer">
          <Button color="warning">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
