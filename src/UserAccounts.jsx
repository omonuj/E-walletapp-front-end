import axios from "axios";
import { useState } from "react"

const userValidate = () => {
    const [username, setUsername] = useState('')
    const[pin, setPin] = useState('')
}

const userAccount = () => {
    const [user, setUser] = useState('')
    const [account_number, setAccountNumber] = useState('')
}

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/v1/wallet/get_wallet', {pin})
        .then(res => {
            localStorage.setItem('token', res.data.balance)
        })
    .catch(error => {
        console.error("Authentication error", error);
    })        
};

const handleUserAccount = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/v1/wallet/get_wallet', {user, account_number})
        .then(res => {
            localStorage.setItem('token', res.data)
        })
    .catch(error => {
        console.error("Authentication error", error);
    })        
};

return (
    <form onSubmit={handleSubmit, handleUserAccount}>
        <input
          type=""
            value={username}
            onChange={e => setUsername(e.targetValue)}
        />
        <input
            type=""
            value={pin}
            onChange={e => setPin(e.targetValue)}    
        />
        <button type = "submit">  </button>

        <input
            type=""
            value={pin}
            onChange={e => setUser(e.targetValue)}    
        />
        <input
            type=""
            value={pin}
            onChange={e => setAccountNumber(e.targetValue)}    
        />
    <button type= "Check Linked Accounts"> Linked Accounts </button>
    </form>

)
