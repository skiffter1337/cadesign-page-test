import React from 'react';
import './App.scss';
import {Header} from "../components/Header/Header";
import {Carousel} from "../components/Carousel/Carousel";
import {Advantages} from "../components/Advantages/Advantages";

function App() {
    return (
        <>
            <Header/>
            <Carousel/>
            <Advantages/>
        </>
    )
}

export default App;
