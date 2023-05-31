import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  className='log'>
    <div className='head_pos'>
        <h1 className='head_style'>
            Login
        </h1>
    </div>
    <div className='table_pos'  align='center'>
        <table className='table'>
            <tr>
                <td> <h1 className='text_style'>Email</h1></td>
                <td><input type="text" className='field_style' placeholder='Enter Email'></input></td>
            </tr>
            <tr>
                <td><h1 className='text_style'>Password</h1></td>
                <td><input type='text' className='field_style' placeholder='Enter password' ></input></td>
            </tr>

        </table>
        <div className='btn_pos'>
        <input className='btn' type='button' value='submit'></input>
        </div>
        <div>
            <h4>Don't have an account <Link to="/con">register</Link> </h4>
        </div>
    </div>

    </div>
  )
}

export default Login