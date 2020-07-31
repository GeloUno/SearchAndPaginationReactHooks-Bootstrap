
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
        axios.get(BASE_URL, { params: {page:page, ...params}})
        .then(res=>{
            // console.log('res :>> ', res.data);
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
