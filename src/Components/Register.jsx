import React, { useEffect } from 'react';
import { useState } from 'react';
import { addUser, updateUser } from '../redux-toolkit/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Register(){

    const username = useSelector((state)=>state.userData.edit)
    const [getName, setInput] = useState('');
    const [getEdit, setEdit] = useState(null);

    const dispath = useDispatch();

    const handelClick = (e)=>{
        e.preventDefault();

        
        if(getName){

            if(getEdit)
            {
                dispath(updateUser({id:username.id,name:getName}))
                setEdit(null);
                setInput('');
    
            }
            else{
                dispath(addUser(getName));
                setInput('');
            }

        }

       
    }

    useEffect(()=>{
        if(username?.name)
        {
            setInput(username.name)
            setEdit(username.id)
        }
    },[username])
    return(
        <>
            <h1> Register User with Redux - Toolkit </h1>
            <label> Add User : </label>
            <input type="text" name = "fname" value={getName} onChange={(e)=>setInput(e.target.value)} />
            <br/>
            <br/> 
            <button onClick={handelClick}> {getEdit ? 'Update' : 'Register'} </button>
        </>
    )
}