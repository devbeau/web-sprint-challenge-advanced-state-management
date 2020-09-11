import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs, editSmurf, deleteSmurf} from '../actions/'

import Card from './Card';

function Cards (props) {
    let {fetchSmurfs, editSmurf, deleteSmurf, smurfs} = props;

    useEffect(() => {fetchSmurfs()}, [fetchSmurfs])
  
console.log(props);


    return (
        <div className='cards-container'>
            
            {smurfs.map(smurf => {
                console.log(smurf);
                return (
                    <Card key={smurf.id} smurf={smurf} editSmurf={editSmurf} deleteSmurf={deleteSmurf}/>
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