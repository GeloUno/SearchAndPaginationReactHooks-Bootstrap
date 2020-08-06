import {ACTIONS_JOB} from '../types/Jobs';

const initialState = [
    {
        jobs:[{}],
        loading:false,
        error: false,
        jobsLength: undefined
    }
];

export default function reducer(state= initialState, action){
   const {type, payload} = action;
   
    switch (type) {
        case ACTIONS_JOB.MAKE_REQUEST:            
            return {loading: true, jobs:[], error:false,jobsLength: undefined }

        case ACTIONS_JOB.GET_DATA:
           return{...state, loading: false, jobs: payload, error:false, jobsLength: payload.length  } // payload. jobs ??

        case ACTIONS_JOB.ERROR:            
            return{...state, loading: false, jobs:[], error:payload, jobsLength: null}
        
            default:
            return state
            
    }
}