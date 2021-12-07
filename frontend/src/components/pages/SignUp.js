
import React from 'react';
import { Container } from 'reactstrap'
import './SignUp.css'
import {Button} from '../Button';
import Footer from '../Footer';


class SignUp extends React.Component {
  render() {
    return (
      <Container className='container_signup'>
          <div className='form'>
            <i className='icon' class="fas fa-users"></i>
            <form>
                <div className= "mb-3">
                <label for="lblUsuario" className= "form-label">
                     
                </label>
                <input  type="text" name="username" className="form-control"
                id="lblUsuario" aria-describedby="ayudaUsuario"
                placeholder=" Username">
                </input>
                </div>
                <div className="mb-3">
                </div>

                <label for="lblEmail" className= "form-label">
                
                </label>
                <input type="email" name="email" className="form-control"
                id="lblEmail" placeholder=" Email">
                </input>
                
                 
                <div className="mb-3">
                <label for="lblClave" className= "form-label">
                
                </label>
                <input type="password" name="password" className="form-control"
                id="lblClave" placeholder="Password"/>
                </div>
               <Button className='btns' buttonStyle='btn--second'>REGISTRATE</Button>
            </form>
            </div>
            <Footer/>
            </Container>
    );
  }
}
export default SignUp;