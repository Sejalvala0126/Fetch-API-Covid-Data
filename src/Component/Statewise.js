import React, {useEffect, useState} from 'react';


const Data = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);

    }

    useEffect(() => {

        getCovidData();
    },
        []);

    return (
        <div>
            <table>
                <thead>
                    <th>state</th>
                    <th>Confirmed</th>
                    <th>Recoverd</th>
                    <th>Death</th>
                    <th>Updates</th>
                </thead>
                <tbody>
                    {
                        data.map((i) => {
                            return(
                                <tr>
                                    <td>{i.state}</td>
                                    <td>{i.confirmed}</td>
                                    <td>{i.recovered}</td>
                                    <td>{i.deaths}</td>
                                    <td>{i.lastupdatedtime}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Data;