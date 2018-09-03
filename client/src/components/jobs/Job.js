import React from 'react'
import { Link } from 'react-router-dom';

const Job = (props) => (
  <div>
    <section>
      <h1><Link onClick={props.onClick} id={props.id} to ={`jobs/${props.id}`}>{props.title} - {props.company}</Link></h1>
      <h2>Description</h2>
      <p>{props.description}</p>
  <p>Job Posted on: {props.created_at}</p>
    </section>
  </div>
)

export default Job;
