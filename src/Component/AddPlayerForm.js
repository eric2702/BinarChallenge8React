import * as React from 'react';
import InputText from './InputText';
import './style.css'

const AddPlayerForm = () => {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [errUser, setErrUser] = React.useState('Username must contain at least 5 characters!')
    const [errEmail, setErrEmail] = React.useState('Enter a valid email!')
    const [errPass, setErrPass] = React.useState('Password must contain at least 8 characters!')
    const [errConPass, setErrConPass] = React.useState('Password does not match!')
    const [resUser, setResUser] = React.useState('')
    const [resEmail, setResEmail] = React.useState('')
    const [resPass, setResPass] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (errUser || errEmail || errPass || errConPass) {
            alert('Error occurred')
            
        } else {
            setResUser(username)
            setResEmail(email)
            setResPass(password)
        }

    }

    const userCheck = (e) => {
        setErrUser('')
        const value = e.target.value
        if (value.length < 5) {
            setErrUser('Username must contain at least 5 characters!')
        }
        setUsername(value)
    }

    const emailCheck = (e) => {
        setErrEmail('')
        const value = e.target.value
        if (!value.includes('@')) {
            setErrEmail('Enter a valid email!')
        }
        setEmail(value)
    }

    const passCheck = (e) => {
        setErrPass('')
        const value = e.target.value
        if (value.length < 8) {
            setErrPass('Password must contain at least 8 characters!')
        }
        setPassword(value)
    }

    const conPassCheck = (e) => {
        setErrConPass('')
        const value = e.target.value
        if (value !== password && password.length >= 8) {
            setErrConPass('Password does not match!')
        }
        setConfirmPassword(value)
    }

    return (
        <div className="container">
            <div className="border-div">
                <h1>ADD</h1>
                <form onSubmit={handleSubmit}>
                <InputText type='text' label='Username' value={username} onChange={userCheck} error={errUser}/>
                <div className="mb-2" style={{color: "red"}}>{errUser}</div>
                <InputText type='email' label='Email' value={email} onChange={emailCheck} error={errEmail} />
                <div className="mb-2" style={{color: "red"}}>{errEmail}</div>
                <InputText type='password' label='Password' value={password} onChange={passCheck} error={errPass} />
                <div className="mb-2" style={{color: "red"}}>{errPass}</div>
                <InputText type='password' label='Confirm Password' value={confirmPassword} onChange={conPassCheck} error={errConPass} />
                <div className="mb-2" style={{color: "red"}}>{errConPass}</div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
            <div className="mt-3" style={{color: "blue"}}>
                Username: {resUser}
                <br />
                Email: {resEmail}
                <br />
                Password: {resPass}
                <br />
            </div>
        </div>
    
    )

}

export default AddPlayerForm;