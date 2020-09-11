import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAIL = 'EDIT_SMURF_FAIL';

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

export function editSmurf(smurf){
    return (dispatch) => {
        dispatch({type: EDIT_SMURF_START});
        axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
            .then(response => {
                dispatch({type: EDIT_SMURF_SUCCESS, payload: response.data})
            })
            .catch(error => {
                dispatch({type: EDIT_SMURF_FAIL, payload: error});
            })
    }
}
