import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewUserForm = ({ formData, handleChange, setCurrentUser, setErrors,  errors }) => {
    
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            name: formData.name,
            username: formData.username,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        }
        fetch(`/api/users`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user)).then(navigate('/'))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }
    
    return(
        <div className="New-user-card">
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label className='login-label' htmlFor="name">Name:</label>
                    <input className='login-input' type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
                </div>

                <div>
                    <label className='login-label' htmlFor="username">Username:</label>
                    <input className='login-input' type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="password">Password:</label>
                    <input className='login-input' type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label className='login-label' htmlFor="password_confirmation">Confirm Password:</label>
                    <input className='login-input' type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='login-button' type="submit" />
                </div>
            </form>
        </div>
        )
}

export default NewUserForm;