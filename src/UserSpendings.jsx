import axios from "axios"
import { useState } from "react"

const user_spendings = () => {
    const [user, setUser] = useState('')
    const [pin, setPin] = useState('')
}


const checkSpendings = (element) => {
    element.preventDefault();
    axios.post('http://localhost:8000/user/transaction_history', {user, transactions})
        .then(res => {
            localStorage.setItem('token', res.data)
        })
    .catch(error => {
        console.error("Authentication error", error);
    })        
}


return (
    <div>
        <input 
            type="text"
            value={user}
            onChange = {element => (element.targetValue)}
        />
        <input 
            type="text"
            value={transactions}
            onChange = {element => (element.targetValue)}
        />
        <button type= 'submit'> Transactions History </button>
    </div>
)