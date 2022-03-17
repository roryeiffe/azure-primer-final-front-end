import { useEffect, useState } from "react"
import axios from "axios"

const User = () => {

    const [user, setUser] = useState({
        id: -1,
        name: "Unknown name",
        email: "Unknown Email"
    })

    const [id, setId] = useState(-1);

    const onIdChange = (event) => {
        event.preventDefault();
        setId(event.target.value);
    }

    const searchUser = (event) => {
        event.preventDefault();
        axios.get(`https://rory2.azurewebsites.net/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => setUser({...user, name: 'No user found', email: ''}));
    }

    // useEffect(() => {
    //     axios.get('https://rory2.azurewebsites.net/users/1')
    //     .then(response => console.log(response.data))
    //     .catch(error => console.error(error));
    // })

    return (
        <div>

            <hr />
            <h1>Get User</h1>
            <form onSubmit = {searchUser}>
                <input value = {id} onChange = {onIdChange}></input>
                <input value = 'Seach User' type = 'submit'/>
            </form>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </div>
    )

}

export default User;