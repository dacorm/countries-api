import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import {Json} from "./HomePage";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";

const Details = ():JSX.Element => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState<Json[] | null>(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => setCountry(data[0]))
    }, [name])

    console.log(country)

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {name}
        </div>
    );
};

export default Details;