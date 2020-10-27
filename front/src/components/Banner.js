import React from 'react';

function Banner(props) {
    return (
        <div>
            <header id="banner" className="masthead text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">
                                Bienvenidos a Donarte, la mejor opción para ayudar!
                            </h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto"></div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Banner;