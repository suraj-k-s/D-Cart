import React from 'react'
import './customer_registration.scss'

const Customer_registration = () => {
    return (
        <div className='reg'>
            <div className='head_pos'>
                <h1 className='head_style'>
                    Customer Registration
                </h1>
            </div>
            <div className='table_pos' align='center'>
                <table className='table'>
                    <tr>
                        <td> <h1 className='text_style'>Name</h1></td>
                        <td><input type="text" className='field_style' placeholder='Enter Name' /></td>
                    </tr>
                    <tr>
                        <td><h1 className='text_style'>Gender</h1></td>
                        <td><input type='radio' className='field_style' value="Male" />Male <input type="radio" name="Gender" className='field_style' value="Female" />Female<input type="radio" name="Gender" className='field_style' value="Others" />Others</td>
                    </tr>
                    <tr>
                        <td> <h1 className='text_style'>Contact</h1></td>
                        <td><input type="text" className='field_style' placeholder='Enter Number' /></td>
                    </tr>
                    <tr>

                        <td> <h1 className='text_style'>Country</h1></td>
                        <td><select><option>India</option></select></td>
                    </tr>
                    <tr><td><h1 className='text_style'>State</h1></td><td><select><option>Kerala</option></select></td></tr>
                    <tr><td><h1 className='text_style'>District</h1></td><td><select><option>Thrissur</option></select></td></tr>
                    <tr><td><h1 className='text_style'>Place</h1></td><td><select><option>Kunnamkulam</option></select></td></tr>

                    <tr>
                        <td><h1 className='text_style'>Address</h1></td>
                        <td><textarea className='field_style'> </textarea></td>
                    </tr><tr>
                    <td> <h1 className='text_style'>Photo</h1></td>
                    <td><input type="file" className='field_style' placeholder='upload photo' /></td>
                </tr>
                <tr>

                    <td> <h1 className='text_style'>Email</h1></td>
                    <td><input type="email" className='field_style' placeholder='Enter email' /></td>
                </tr>
                <tr>

                    <td> <h1 className='text_style'>Password</h1></td>
                    <td><input type="text" className='field_style' placeholder='Enter password' /></td>
                </tr>
                <tr>

                    <td> <h1 className='text_style'>Confirm password</h1></td>
                    <td><input type="text" className='field_style' placeholder='Confirm password' /></td>
                </tr>
            </table>
            <div className='btn_pos'>
          <input className='btn' type='button' value='submit'/><input className='btn' type="button" name="Cancel" value="Cancel"/>
        </div>
        </div>

        </div >
    )
}

export default Customer_registration