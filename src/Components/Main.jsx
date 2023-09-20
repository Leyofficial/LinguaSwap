import React from 'react';
import store from '../Redux/rootReduce';
import { useSelector } from 'react-redux';

const Main = () => {
    const test = useSelector(((state) => state))
    console.log(test)
    return (
        <div>
            <p>Hello</p>
        </div>
    );
};

export default Main;