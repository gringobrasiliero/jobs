import React from 'react';
import Job from './Job'

const JobsList = ({jobs, handleClick}) => (
  <div id="jobsList">
  {jobs.map(job => <Job key={job.id}
                        id={job.id}
                        title={job.title}
                        company={job.company}
                        description={job.description}
                        created_at={job.created_at}
                        onClick={handleClick}
                   /> )}
  </div>
)

export default JobsList;
