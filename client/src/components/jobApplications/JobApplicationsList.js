import React from 'react';
import JobApplication from './JobApplication'

const JobApplicationsList = ({jobs, handleClick}) => (
  <div id="jobsList">
  {jobs.map(jobApp => <JobApplication key={jobApp.id}
                        id={jobApp.id}
                        resume={jobApp.resume}
                        cover_letter={jobApp.cover_letter}
                        created_at={jobApp.created_at}
                        onClick={handleClick}
                   /> )}
  </div>
)

export default JobApplicationsList;
