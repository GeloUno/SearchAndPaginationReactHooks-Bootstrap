import React, { useState } from 'react'
import useFetchData  from '../feachData/JobsGitHub'
import { Job } from './Job';
import {Container, Row, Col} from 'react-bootstrap'
import JobsPagination from './JobsPagination';
import SearchForms from './searchForms';

const Jobs = () => { 
    const [page, setPage] = useState(1)
    const [params, setParams] = useState(
        {
            location: '',
            description:''
        }
    )
    const { jobs, loading, error } = useFetchData(page, params);    


    const onHandleSearchChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevParams => {
            return { ...prevParams, [name]: value }
        }
        )
    }

       return (          
           <Container>  
               <SearchForms
                onHandleSearchChange={onHandleSearchChange}
                   params={params}
               />
               <JobsPagination page={page} setPage={setPage}
                  
               />    
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
