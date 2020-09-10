import React from 'react';

//components
import SignupComponent from './Signup';

const Signup = () => {
    return (
        <section className="signup-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">

                        <div className="signup-component-section">
                            <SignupComponent />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default Signup;