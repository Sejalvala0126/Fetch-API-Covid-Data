

import React, {useEffect, useState} from 'react';


const Data = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.cases_time_series);
        setData(actualData.cases_time_series);

    }

    useEffect(() => {

        getCovidData();
    },
        []);

    return (
        <div>
            <table>
                <thead>
                    <th>Daily Confirmed</th>
                    <th>Daily Deceased</th>
                    <th>Daily Recovered</th>
                    <th>Date</th>
                    <th>Date ymd</th>
                </thead>
                <tbody>
                    {
                        data.map((i) => {
                            return(
                                <tr>
                                    <td>{i.dailyconfirmed}</td>
                                    <td>{i.dailydeceased}</td>
                                    <td>{i.dailyrecovered}</td>
                                    <td>{i.date}</td>
                                    <td>{i.dateymd}</td>
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