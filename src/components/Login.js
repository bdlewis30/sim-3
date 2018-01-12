import react from 'react';

export default function Login(){
    return (
        <div>
            <h1 className="">Helo</h1>
            <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
        </div>
    )
}