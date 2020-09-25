import React from 'react';

import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Wrapper = props => {
        return (
            <div>
                <Header />
                <Navigation />
                <Footer />
            </div>
        );
}

export default Wrapper;