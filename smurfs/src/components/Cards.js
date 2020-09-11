import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs, editSmurf, deleteSmurf} from '../actions/'

import Card from './Card';

function Cards (props) {
    useEffect(() => {props.fetchSmurfs()}, [])
  
console.log(props);


    return (
        <div className='cards-container'>
            
            {props.smurfs.map(smurf => {
                console.log(smurf);
                return (
                    <Card key={smurf.id} smurf={smurf} editSmurf={props.editSmurf} deleteSmurf={props.deleteSmurf}/>
                )
            })}
        </div>
    )
}

function mapStateToProps(state){
    return {
        smurfs: state.smurfs,
        error: state.error,
        isFetching: state.isFetching,
    }
}

export default connect((mapStateToProps), {fetchSmurfs, editSmurf, deleteSmurf})(Cards)