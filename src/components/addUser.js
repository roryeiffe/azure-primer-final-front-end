import axios from "axios";
import { useState, useEffect } from "react"

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('https://rory2.azurewebsites.net/users', user)
        .then(response => alert(`User added! ID is ${response.data.id}`));
        setUser({name: '', email: ''})

    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Add User</h1>
                <h5>Enter Name</h5>
                <input onChange = {onChangeHandler} name = 'name' type = 'text' value = {user.name}/>
                <h5>Enter Email</h5>
                <input onChange = {onChangeHandler} name = 'email' type = 'email' value = {user.email}/>
                <br />
                <input type = 'submit' value = 'Add User'/>
            </form>
        </div>
    )
}

export default AddUser;