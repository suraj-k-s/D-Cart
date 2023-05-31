import React from 'react'
import  './company_registration.scss'

const Company_registration = () => {
  return (
    <div className='reg'>
      <div className='head_pos'>
        <h1 className='head_style'>
          Company Registration
        </h1>
      </div>
      <div className='table_pos' align='center'>
        <table className='table'>
          <tr>
            <td> <h1 className='text_style'>Name</h1></td>
            <td><input type="text" className='field_style' placeholder='Enter Name' /></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Company Established</h1></td>
            <td><input type="date" className='field_style' placeholder='Enter Year' /></td>
          </tr>
          <tr>
            <td> <h1 className='text_style'>Contact</h1></td>
            <td><input type="text" className='field_style' placeholder='Enter Number' /></td>
          </tr>
          <tr>
            <td><h1 className='text_style'>Address</h1></td>
            <td><textarea className='field_style'> </textarea></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Company Logo</h1></td>
            <td><input type="file" className='field_style' placeholder='upload logo' /></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Proof</h1></td>
            <td><input type="file" className='field_style' placeholder='upload proof' /></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Country</h1></td>
            <td><select><option>India</option></select></td>
          </tr>
          <tr><td><h1 className='text_style'>State</h1></td><td><select><option>Kerala</option></select></td></tr>
          <tr><td><h1 className='text_style'>District</h1></td><td><select><option>Thrissur</option></select></td></tr>
          <tr><td><h1 className='text_style'>Place</h1></td><td><select><option>Kunnamkulam</option></select></td></tr>
          <tr>

            <td> <h1 className='text_style'>Email</h1></td>
            <td><input type="email" className='field_style' placeholder='Enter email'/></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Password</h1></td>
            <td><input type="text" className='field_style' placeholder='Enter password'/></td>
          </tr>
          <tr>

            <td> <h1 className='text_style'>Confirm password</h1></td>
            <td><input type="text" className='field_style' placeholder='Confirm password'/></td>
          </tr>

        </table>
        <div className='btn_pos'>
          <input className='btn' type='button' value='submit'/><input className='btn' type="button" name="Cancel" value="Cancel"/>
        </div>
       
      
      </div>


    </div>

  )
}

export default Company_registration