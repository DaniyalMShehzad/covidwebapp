import { Card } from "antd"
import axios from "axios"
import React from "react"
// import {} from 'react-router'
import { useState, useEffect } from "react"
import { Doughnut, Line, PolarArea } from "react-chartjs-2"
import Navbar from "./navbar"

function About() {
    const [item, setItem] = useState([])
    const [death, setDeath] = useState("")
    const [recovered, setRecovered] = useState("")
    const [cases, setCases] = useState("")
    const [population, setPopulation] = useState("")
    const [topValues, setTopValues] = useState()
    const [topValues2, setTopValues2] = useState()
    const [topValues3, setTopValues3] = useState()
    const [topValues4, setTopValues4] = useState()
    const [topValues5, setTopValues5] = useState()

    // setData(data)
    useEffect(() => {
        const id = window.location.pathname?.split("/")[2]
        const api = `https://disease.sh/v3/covid-19/countries/${id}`
        axios.get(api).then((e) => {
            // const datatype={e}
            // console.log(e.data);
            // navigate(`about/${id?.countryInfo?._id}`, { state: id },);
            // console.log(id);
            // console.log(e.data);
            setItem(e.data)
            setCases(e.data.cases)
            setRecovered(e.data.recovered)
            setDeath(e.data.deaths)
            setPopulation(e.data.population)
            // console.log(population);
            setTopValues(e.data.todayCases)
            setTopValues2(e.data.todayDeaths)
            setTopValues3(e.data.todayRecovered)
            setTopValues4(e.data.active)
            setTopValues5(e.data.critical)
        })
        // console.log(topValues);
        // console.log(topValues2);
        // console.log(topValues3);
        // console.log(topValues4);
        // console.log(topValues5);

    }, [])

    const percentage = (a, b) => {
        const pr = (a / b) * 100
        return pr.toFixed(2);
    }


        const data1 = {
        labels: [
          'todayCases',
          'todayDeaths',
          'todayRecovered',
          'active',
          'critical'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [topValues,topValues2,topValues3,topValues4,topValues5],
          backgroundColor: [
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)'
          ]
        }]
      };
    return (
        <>
            <div className="obj-div-card">
                <Navbar />
                {/* <Doughnut className="obj-div-span-1-2-1-2" data={data}/> */}
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
                                <svg className="div-svg-img-1">
                                    <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `calc(440 - (440 * ${percentage(cases, population)}) / 100)`, }}></circle>
                                    <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `calc(440 - (440 * ${percentage(cases, population)}) / 100)`, }}></circle>
                                </svg>
                                <div className="number">
                                    <h2>{percentage(cases, population)}<span>%</span></h2>
                                </div>
                            </div>
                            <div className="div-circle-text-2">
                                <h2 className="text">Cases</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg className="div-svg-img-1">
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `calc(440 - (440 * ${percentage(recovered, cases)}) / 100)`, }}></circle>
                                </svg>
                                <div class="number">
                                    <h2>{percentage(recovered, cases)}<span>%</span></h2>
                                </div>
                            </div>
                            <div className="div-circle-text-2">
                                <h2 className="text">Recovery Rate</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg className="div-svg-img-1">
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `calc(440 - (440 * ${percentage(death, population)}) / 100)` }} ></circle>
                                </svg>
                                <div className="number">
                                    <h2>{percentage(death, cases)}<span>%</span></h2>
                                </div>
                            </div>
                            <div className="div-circle-text-2">
                                <h2 className="text">Fatality Rate</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div 
                // style={{ width: 400, height: 400, }}
                >
                    <PolarArea className="obj-div-card-bar-div-1-2-3" data={data1} />
                </div>
            </div>
        </>
    )
}
export default About