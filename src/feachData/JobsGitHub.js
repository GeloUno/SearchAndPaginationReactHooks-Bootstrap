
import { 
    useReducer, 
    useEffect } from 'react';
import reducer from './../reducers/Jobs';
import { ACTIONS_JOB } from './../types/Jobs';
import axios from 'axios'
// import { useReducer } from "reinspect"
// import store from './../store';
// import { useQuery } from 'react-query';

const BASE_URL = 'http://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json';
// const BASE_URL = 'http://jobs.github.com/positions.json';

//  const BASE_URL = 'https://swapi.dev/api/';


// export const fetchJobsGitHub = async () =>{
//      const res = await(await fetch(BASE_URL)).json();
//      console.log('res :>> ', res);
//      return res; 
//     }
    
    export default function useFetchData(page, params){
        
    //     const {isLoading, isError, error, data} = useQuery('Jobs',fetchJobsGitHub)

    // const [state, dispatch] = useReducer(reducer, {jobs:[], loading:true});
    
    // isLoading && dispatch(
    //     {
    //         type: ACTIONS_JOB.MAKE_REQUEST
    //     }   
    // )
    // isError && dispatch(
    //     {
    //         type: ACTIONS_JOB.ERROR,
    //         payload:error
    //     }   
    // )
    // !isError && !isLoading && dispatch(
    //     {
    //         type: ACTIONS_JOB.GET_DATA,
    //         payload:data
    //     }   
    // )
    
    /// useEffect and dispach data 
    const [state, dispatch] = useReducer(reducer, {jobs:[], loading:true});
    
    useEffect(() =>  {
        dispatch(
            {
                type: ACTIONS_JOB.MAKE_REQUEST
            }            )
        axios.get(BASE_URL, {
           
            // headers: {
            //     'Referrer-Policy': 'no-referrer',
            //     'Host': 'jobs.github.com',
            // 'Host': 'http://localhost:3000/',
            //     'Origin': 'localhost:3000/',
            //     'Access-Control-Allow-Origin':'localhost:3000/'
                // 'Referrer-Policy': 'strict-origin-when-cross-origin',
                // 'Origin': 'https://jobs.github.com',
                // 'Access-Control-Request-Method': 'GET',
// 'Access-Control-Request-Headers': 'X-PINGOTHER, Content-Type',
//                 // 'X-Permitted-Cross-Domain-Policies':'http://jobs.github.com/',
//                 // 'X-Permitted-Cross-Domain-Policies':'http://localhost:3000/',
//                 'Cross-Origin-Resource-Policy': 'https://jobs.github.com/',
            // },
            params: { page: page, ...params }
        })
        .then(res=>{
             console.log('res :>> ', res);
            dispatch({
                type: ACTIONS_JOB.GET_DATA,
                payload:  res.data
            })
        })
        .catch(
            err=>{               
                dispatch({
                    type: ACTIONS_JOB.ERROR,
                    payload: err
            }
        )})
        // return () => {
        //     cleanup
        // }
    }, [page, params])

    return state
}
