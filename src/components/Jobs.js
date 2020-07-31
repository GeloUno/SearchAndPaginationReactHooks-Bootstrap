import React, { useState } from 'react'
import useFetchData  from '../feachData/JobsGitHub'
import { Job } from './Job';
import {Container, Row, Col} from 'react-bootstrap'
import JobsPagination from './JobsPagination';

const Jobs = () => { 
    const [page, setPage] = useState(1)
    const [params, setParams] = useState()
    const { jobs, loading, error } = useFetchData(page, params);    
       return (          
           <Container>  
               <JobsPagination page={page} setPage={setPage}/>    
                <Row>                    
                    {loading&&(<div>Loading</div>)}
                    {error&&(<div>Error</div>)}
                    {jobs.map(job=>{
                        return <Col key={job.id} lg={4} md={6} xs={12}> <Job  key={job.id} job={job} /> </Col>
       })
       }
                   
                </Row>
        </Container> 
    )
}

export default Jobs
