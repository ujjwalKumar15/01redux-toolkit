import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../redux-toolkit/userSlice';

export default function UserList() {
    const dispath = useDispatch();
    const listingData = useSelector((state) => state.userData.users);

    const handlerEdit = (id,name)=>{

        dispath(editUser({id,name}))
    }


    return (
        <>
            <h1> Listing Users </h1>
            <ul>

                {
                    listingData && listingData.map((user) => (

                        <li key={user.id}>
                         {user.name}
                         &nbsp;
                         <button onClick={()=>handlerEdit(user.id,user.name)}> Edit </button> &nbsp;
                         <button onClick={()=> dispath(deleteUser(user.id))}> Delete </button>
                        </li>

                    ))
                }
            </ul>

        </>
    )
}