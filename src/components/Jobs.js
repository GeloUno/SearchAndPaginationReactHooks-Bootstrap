import React, { useReducer, useEffect } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import {Container, Button} from 'react-bootstrap';
import reducer from './../reducers/Jobs';
import { getJobsAction } from './../actions/Jobs';
import store from '../store';
import { feachJobsGitHub } from './../feachData/JobsGitHub';
import {useQuery}from 'react-query'
import { ReactQueryConfigProvider } from 'react-query'
 
 const queryConfig = {
   queries: {
     retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
   },
 }

const Jobs = () => {
    // getJobsAction();
    const {isLoading, isError, data, error, status} = useQuery('jobs', feachJobsGitHub);
    //  const [state, dispatch] = useReducer(reducer, {jobs:[], loading:true});

    store.dispatch(getJobsAction(isLoading, isError, data, error))
    // console.log(isLoading, isError);
    // const {isLoading, isError, data, status, error} = useQuery('jobs', feachJobsGitHub);
    //   useEffect(() => {
    //        store.dispatch(getJobsAction(),[]);
    //      }, []);
       // console.log('isLoading :>> ', isLoading);
       // console.log('isError :>> ', isError);
       return (
           <ReactQueryConfigProvider config={queryConfig}>   
           <div>    
        {status} Test
        </div>
            <ReactQueryDevtools initialIsOpen />
        </ReactQueryConfigProvider>
    )
}

export default Jobs
