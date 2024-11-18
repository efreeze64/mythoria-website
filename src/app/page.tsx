import React from "react";
import Navbar from "../assets/components/navbar";
import Footer from "../assets/components/footer";
import "../assets/styling/global-style.css";

const Home = () => {


    return (
        <body>
            <Navbar />
                <h1>Home Page</h1>
                <p>This is home page</p>
            <Footer />
        </body>
    )
}

export default Home;