import {ACTIONS_JOB} from '../types/Jobs';
import {useQuery} from 'react-query'
import { feachJobsGitHub } from '../feachData/JobsGitHub';

export const getJobsAction = (isLoading, isError, data, error) => (dispatch) =>{
    console.log(isLoading, isError);
    
    isLoading&&(dispatch(
        {    
            type:ACTIONS_JOB.MAKE_REQUEST                    
        }
        )
    )    
        isError&&(dispatch(
            {    
                type:ACTIONS_JOB.ERROR,
                payload: error
            }
            )
     )    
            
    !isLoading&&!isError&&(dispatch(
             {    
                type:ACTIONS_JOB.GET_DATA,
                payload: data
             }
                            )
      )    
}
        