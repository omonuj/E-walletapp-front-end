import axios from "axios"
import { useState } from "react"


const user_transactions = () => {
    const [amount, setAmount] = useState('')
    const [balance, setBalance] = useState('')
    const [pin, setPin] = useState('')
}

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/user/deposits', {username, pin})
        .then(res => {
            localStorage.setItem('token', res.data.balances)
        })
    .catch(error => {
        console.error("Authentication error", error);
    })        
};


const handleResponse = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/user/withdrawals', {amount, balance, pin})
        .then(res => {
            localStorage.setItem('token', res.data)
        })
    .catch(error => {
        console.error("Insufficient funds", error)
    })    
};




return (
    <div onSubmit={handleSubmit, handleResponse}>
        <input 
            type="text" 
            value={amount}
            onChange={e => setAmount(e.targetValue)}
        />
        <input 
            type="text" 
            value={balance}
            onChange={e => setBalance(e.targetValue)}
        />
        <input 
            type="text" 
            value={pin}
            onChange={e => setPin(e.targetValue)}
        />
        <button type= "submit"> Withdraw Amount </button>
    </div>
)     