import {ACTIONS_JOB} from '../types/Jobs';

const initialState = [
    {
        jobs:[{}],
        loading:false,
        error:false
    }
];

export default function reducer(state= initialState, action){
   const {type, payload} = action;
   
    switch (type) {
        case ACTIONS_JOB.MAKE_REQUEST:            
            return {loading: true, jobs:[], error:false}

        case ACTIONS_JOB.GET_DATA:
           return{...state, loading: false, jobs: payload, error:false } // payload. jobs ??

        case ACTIONS_JOB.ERROR:            
            return{...state, loading: false, jobs:[], error:payload}
        
            default:
            return state
            
    }
}