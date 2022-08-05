import axios from 'axios';

import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Controls from "../components/Controls";
import {ALL_COUNTRIES} from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Header from "../components/Header";
import Main from "../components/Main";
import {useNavigate} from "react-router-dom";

export interface Flags {
    svg: string;
    png: string;
}

export interface Json {
    name: string;
    capital: string;
    region: string;
    population: number;
    flags: Flags;
    independent: boolean;
}

interface info {
    title: string,
    description: string
}

export interface region {
    label: string,
    value: string,
}

interface HomePageProps {
    countries: Json[]
    setCountries: Dispatch<SetStateAction<Json[]>>
}

const HomePage = ({countries, setCountries}: HomePageProps): JSX.Element => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();

    const handleSearch = (search: string, region: string) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region));
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({data}) => {
                setCountries(data)
                setFilteredCountries(data)
            });
        }
    }, [])

    return (
        <>
                <Controls onSearch={handleSearch} />
                <List>
                    {
                        filteredCountries.map(c => {
                            const info: info[] = [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: 'Capital',
                                    description: c.population.toLocaleString()
                                },
                            ]

                            return (
                                <Card img={c.flags.png} name={c.name} info={info}
                                      onClick={() => navigate(`/country/${c.name}`)} key={c.name}/>
                            )
                        })
                    }
                </List>
        </>
    );
};

export default HomePage;