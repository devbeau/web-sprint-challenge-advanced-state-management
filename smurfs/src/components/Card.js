import React, {useState} from 'react';

export default function Card ({smurf, editSmurf, deleteSmurf}) {

    let [formValues, setFormValues] = useState(smurf);
    let [editId, setEditId] = useState('');

    function onChange (event) {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    function onSubmit (event) {
        event.preventDefault();
        editSmurf(formValues);
        setEditId('');
    }
    function onClick(event){
        if (editId === '') return setEditId(smurf.id);
    }
    function onDelete(event){
        deleteSmurf(smurf);
    }
  return (
    <div className='smurf-card'>
      {editId === smurf.id && 
        <form onSubmit={onSubmit}>
            {editId === smurf.id && <button>submit changes</button>}
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
        </form>
      }
      {editId === '' && 
      <>
        <h3>{smurf.name}</h3>
        <p>age: {smurf.age}</p>
        <p>height: {smurf.height}</p>
        {editId === '' && <button onClick={onClick}>edit</button>}
        <button onClick={onDelete}>delete smurf</button>
      </>
    }
    </div>
  )  
}

