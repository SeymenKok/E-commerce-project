import {Fragment} from 'react';
import {Outlet} from 'react-router-dom'
import "../Sign/sign.styles.scss"

const Sign = () =>{
    return(
        <Fragment>
           <div className="main-container">
             <div className="card-container">
                <div className="card-input-container">
                  <input type="email" id='email' maxLength="35"/>
                  <input type="password" id='Password'maxLength="30" />
                </div>
                <div className="card-button-container">
                  <button className='card-container-button'>Login</button>
                </div>
                <div className='other'>
                  <h1>GOOGLE</h1>
                </div>
             </div>
             <div className=''>

             </div>
          </div>
         <Outlet/>
         </Fragment>
    )
   
}







export default Sign;