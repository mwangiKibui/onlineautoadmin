import React from 'react';

//components
import LoginComponent from './Login';

const Login = () => {
    return (
       <section className="login-section">
           <div className="container">
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-12">
                       <div className="login-component-section">
                           <LoginComponent />
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
};

export default Login;