import React, { useState } from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions';

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}
function AddSmurf (props) {

    const [formValues, setFormValues] = useState(initialFormValues);

    function onChange (event) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    function onSubmit (event) {
        event.preventDefault();
        props.postSmurf(formValues)
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            type='text'
            name='name'
            value={formValues.name}
            onChange={onChange}
            placeholder="Enter name..."
            />
             <input 
            type='text'
            name='age'
            value={formValues.age}
            onChange={onChange}
            placeholder="Enter age..."
            />
             <input 
            type='text'
            name='height'
            value={formValues.height}
            onChange={onChange}
            placeholder="Enter height..."
            />
            <button>add smurf</button>
        </form>
    )
}

function mapStateToProps(state){
    return {
        smurfs: state.smurfs,
        error: state.error,
        isFetching: state.isFetching,
    }
}
export default connect ((mapStateToProps), {postSmurf})(AddSmurf)