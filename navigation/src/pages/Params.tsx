import React from 'react';
import { useParams } from 'react-router-dom';

const Params = () => {
    const {id} = useParams<{id: any}>();
    return (
        <h1>Params {id}</h1>
    );
}

export default Params;