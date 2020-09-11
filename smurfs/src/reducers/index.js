import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    EDIT_SMURF_START,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_FAIL
} from '../actions/'

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
};

export default function reducer(state = initialState, action){
    console.log('reducer', action)
    switch(action.type){
        case FETCH_SMURFS_START:
            return {...state,
                    isFetching: true,
                    error: ''}
        case FETCH_SMURFS_SUCCESS:
            return {...state,
                isFetching: false,
                error: '',
                smurfs: action.payload}
        case FETCH_SMURFS_FAIL:
            return {...state,
                isFetching: false,
                error: action.payload}
        case POST_SMURF_START:
            return {...state,
                    isFetching: true,
                    error: ''}
        case POST_SMURF_SUCCESS:
            return {...state,
                    isFetching: false,
                    smurfs: [...state.smurfs, action.payload],
                    error: ''}
        case POST_SMURF_FAIL: 
            return {...state,
                    isFetching: false,
                    error: action.payload}
        case EDIT_SMURF_START:
            return {...state,
                    isFetching: true,
                    error: ''}
        case EDIT_SMURF_SUCCESS:
            console.log(action.payload, state);
            return {...state,
                    isFetching: false,
                    smurfs: action.payload,
                    error: ''}
        case EDIT_SMURF_FAIL: 
            return {...state,
                    isFetching: false,
                    error: action.payload}
        default:
            return state;
    }
}