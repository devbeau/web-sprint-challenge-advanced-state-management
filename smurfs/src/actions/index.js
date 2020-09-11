import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const POST_SMURF_START = 'FETCH_SMURFS_START';
export const POST_SMURF_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const POST_SMURF_FAIL = 'FETCH_SMURFS_FAIL';

export function fetchSmurfs(){
    return (dispatch) => {
        dispatch({type: FETCH_SMURFS_START});
        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
            })
            .catch(error => {
                dispatch({type: FETCH_SMURFS_FAIL, payload: error});
            })
    }
}

export function postSmurf(smurf){
    return (dispatch) => {
        dispatch({type: POST_SMURF_START});
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(response => {
                dispatch({type: POST_SMURF_SUCCESS, payload: response.data})
            })
            .catch(error => {
                dispatch({type: POST_SMURF_FAIL, payload: error});
            })
    }
}
