import { Card } from "antd"
import axios from "axios"
import React from "react"
// import {} from 'react-router'
import { useState, useEffect } from "react"
import { Doughnut, Line } from "react-chartjs-2"
function About() {
    const [item, setItem] = useState([])
    const [death, setDeath] = useState([])
    const [recovered, setRecovered] = useState([])
    const [cases, setCases] = useState([])

    // setData(data)
    useEffect(() => {
        const id = window.location.pathname?.split("/")[2]
        const api = `https://disease.sh/v3/covid-19/countries/${id}`
        axios.get(api).then((e) => {
            // const datatype={e}
            // console.log(e.data);
            // navigate(`about/${id?.countryInfo?._id}`, { state: id },);
            // console.log(id);
            console.log(e.data);
            setItem(e.data)
            // console.log(item);
            setCases(e.data.cases)
            setRecovered(e.data.recovered)
            setDeath(e.data.deaths)
        })

    }, [])
    // const data = {
    //     labels: [
    //         'Recovered',
    //     ],
    //     datasets: [{
    //           labels: ['Recovered',],
    //         data: [recovered],
    //         backgroundColor: [
    //             'rgb(255, 99, 132)',
    //         ],
    // font: {
    //     size: "50px"
    // },
    // fullSize: false,
    // maxHeight: 100,
    // maxWidth: 100,
    // hoverOffset: 4
    // }],
    // options: {
    // plugins: {
    //     legend: {
    //         display: false,
    //         fullSize: false,
    //         maxHeight: 100,
    //         maxWidth: 100,

    //     }
    // }
    // }
    // };
    return (
        <>
            <div className="obj-div-card">
                {/* <Doughnut className="" data={data}/> */}
                {/* <Doughnut className="obj-div-card-Doughnut" data={data} width={50} height={50}  /> */} 
                <div className="obj-div-span-1">
                    <div className="obj-div-span-2">
                        <div className="obj-div-3-span-3">
                            <img className="obj-div-span-img-1" src={item?.countryInfo?.flag} />
                            <span className="div-span-item-1" >{item?.country}</span>
                        </div>
                        <div className="obj-div-5-span-6-class">
                            <div className="obj-div-4-span-3">
                                <span className="div-span-item-2" >{item?.cases}</span>
                                <span className="div-span-item-5" >Confirmed</span>
                            </div>
                            <div className="obj-div-4-span-3">
                                <span className="div-span-item-3" >{item?.recovered}</span>
                                <span className="div-span-item-5" >Recovered</span>
                            </div>
                            <div className="obj-div-4-span-3">
                                <span className="div-span-item-4" >{item?.deaths}</span>
                                <span className="div-span-item-5" >Deaths</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>90<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">Cases</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">Recovery Rate</h2>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>60<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">Fatality Rate</h2>
                </div>
            </div>
        </div>
            </div>
        </>
    )
}
export default About