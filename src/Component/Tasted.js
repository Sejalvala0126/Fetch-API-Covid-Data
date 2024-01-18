import React, {useEffect, useState} from 'react';


const Data = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {

        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.tested);
        setData(actualData.tested);

    }

    useEffect(() => {

        getCovidData();
    },
        []);

    return (
        <div>
            <table>
                <thead>
                    <th>Tested As Of</th>
                    <th>Total Positive Cases</th>
                    <th>Total Samples Tested</th>
                    <th>Update Times Tamp</th>
                </thead>
                <tbody>
                    {
                        data.map((i) => {
                            return(
                                <tr>
                                    <td>{i.testedasof}</td>
                                    <td>{i.totalpositivecases}</td>
                                    <td>{i.totalsamplestested}</td>
                                    <td>{i.updatetimestamp}</td>
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