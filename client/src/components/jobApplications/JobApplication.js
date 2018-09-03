import React from 'react'
import { Link } from 'react-router-dom';

const JobApplication = (props) => (
  <div>
    <section>
      <h1>Applicant</h1>
      <h2>Resume</h2>
      <p>{props.resume}</p>
      <h2>Cover Letter </h2>
      <p>{props.cover_letter}</p>
  <p>Applied on: {props.created_at}</p>
    </section>
  </div>
)

export default JobApplication;
