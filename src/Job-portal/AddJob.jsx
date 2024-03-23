import React, { useState } from 'react';
import axiosInstance from "../helper/axiosInstance";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Global.css";

const AddJob = () => {
  let navigate = useNavigate();
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [requirements, setRequirements] = useState("");

  let addJob =  (e) => {
    e.preventDefault();
    let payload = {
      title,
      description,
      requirements
    }

    axiosInstance.post("/jobs", payload);
    toast.success(`${title} added successfully!`);
    navigate("/jobs");
  };

  return (
    <div className='formblock'>
      <form action="" style={{ textAlign: "center" }}>
        <fieldset>
          <legend>ADD JOB</legend>
          <br /> <br />
          <label htmlFor="title">Job Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br /><br />
          <label htmlFor="description">Job Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <br /><br />
          <label htmlFor="requirements">Job Requirements:</label>
          <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} />
          <br /> <br />
          <button onClick={addJob}>ADD JOB</button>
          <br /> <br />
        </fieldset>
      </form>
    </div>
  );
}

export default AddJob;
