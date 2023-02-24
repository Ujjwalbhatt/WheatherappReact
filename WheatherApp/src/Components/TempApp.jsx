import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css/styles.css'
const TempApp = () => {

    const [city, setCity] = useState(null)
    const [search, setsearch] = useState('Dehradun')

    useEffect(() => {
        const AxiosApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ae3e426845028aa48f96ec0eb64187cc`
    
            try {
                const response = await axios.get(url);
                console.log(response.data.main);
                setCity(response.data.main);
            } catch (error) {
                console.log(error);
                setCity(null);
            }
        };
        AxiosApi();
    }, [search]);
    

    return (
        <div className='box'>
            <div className='inputData'>
                <input type="search"
                 value={search}
                    className='inputField'
                    onChange={(event) => {
                        setsearch(event.target.value)
                    }}
                />

            </div >
            {
                !city ? (
                    <p className='errorMsg'>No data found</p>
                ) :(
                    <div>
                    <div className='info'>
                        <h2 className='location'>
                            <i className="fa-solid fa-street-view"></i>
                            {search}
                        </h2>
                        <h1 className='temp'>
                       {city.temp}°C
                        </h1>
                        <h3 className='tempmin_max'>
                            Min: {city.temp_min}°C | Max : {city.temp_max}°C
                        </h3>
                    </div>
                        <div className='wave '> </div>
                        <div className='wave -two'>  </div>
                        <div className='wave -three'></div>
                        </div>
                    )
            }
        





        </div>
    )
}

export default TempApp