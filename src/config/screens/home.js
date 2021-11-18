import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router";
import Navbar from './navbar';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { Bar, Line } from "react-chartjs-2";
const { Column, ColumnGroup } = Table;

function Home() {
    const [det, setData] = useState([])
    const [inp, setInp] = useState([])
    const [totalcases, setTotalCases] = useState(0)
    const [Totalrecovered, setTotalRecovered] = useState(0)
    const [Totaldeaths, setTotalDeaths] = useState(0)
    const [topValues, setTopValues] = useState([])
    const [topValues2, setTopValues2] = useState()
    const [topValues3, setTopValues3] = useState()
    const [topValues4, setTopValues4] = useState()
    const [topValues5, setTopValues5] = useState()
    const [topValues6, setTopValues6] = useState()


    console.log(topValues2);

    const getData = () => {

        const api = "https://disease.sh/v3/covid-19/countries"
        axios.get(api).then((e) => {
            // console.log(e.data);
            setData(e.data)
            // console.log(det);
            setInp(e.data)
        })
    }

    useEffect(() => {
        if (det.length) {
            let a = 0
            console.log(det);
            det.map((e, i) => {
                a += e.cases
            })
            setTotalCases(a)
        }
    }, [det])
    useEffect(() => {
        if (det.length) {
            let a = 0
            console.log(det);
            det.map((e, i) => {
                a += e.recovered
            })
            setTotalRecovered(a)
        }
    }, [det])
    useEffect(() => {
        if (det.length) {
            let a = 0
            console.log(det);
            det.map((e, i) => {
                a += e.deaths
            })
            setTotalDeaths(a)
        }
        let arr = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
        let arr5 = []
        let arr6 = []
        const topValues1 = det.sort((a, b) => b.todayCases - a.todayCases).slice(0, 8);
        // setTopValues(topValues1)
        // let arr3=[]
        if (topValues1) {

            topValues1.map((val) => {
                arr.push(val.todayCases)
                arr2.push(val.country)
            })

            const topValues2 = det.sort((a, b) => b.todayDeaths - a.todayDeaths).slice(0, 8);
            if (topValues2) {

                topValues2.map((val) => {
                    arr3.push(val.todayDeaths)
                    arr4.push(val.country)
                })
                const topValues3 = det.sort((a, b) => b.todayRecovered - a.todayRecovered).slice(0, 8);
                // setTopValues(topValues1)
                // let arr3=[]
                if (topValues3) {

                    topValues3.map((val) => {
                        arr5.push(val.todayRecovered)
                        arr6.push(val.country)
                    })
                    setTopValues(arr2)
                    setTopValues2(arr)
                    setTopValues3(arr3)
                    setTopValues4(arr4)
                    setTopValues5(arr5)
                    setTopValues6(arr6)
                }
            }
        }
    }, [det])
    console.log(topValues);
    useEffect(() => {
        getData();
    }, [])
    // console.log(totalcases);
    const navigate = useNavigate();

    const data = (id) => {
        // console.log("id")
        // const api = "https://disease.sh/v3/covid-19/countries/id"
        // axios.get(api).then((e) => {
        //     const datatype={e}
        //     console.log(datatype);
        navigate(`about/${id?.countryInfo?._id}`, { state: id },);
        // console.log(id);

        // })
    }



    const data3 = {
        labels: topValues,
        datasets: [{
            label: "todayCases",
            data: topValues2,
            // data: [1637220727377,1637220727468,1637220727387,1637220727386,1637220727567,1637220727376,1637220727668,1637220727784,],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(206, 207, 209, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 209)',
                'rgb(201, 203, 209)'
            ],
            borderWidth: 1,
            // width: 300,
            // height: 400,
        }],
    };
    const data4 = {
        labels: topValues4,
        datasets: [{
            label: "todayDeaths",
            data: topValues3,
            // data: [1637220727377,1637220727468,1637220727387,1637220727386,1637220727567,1637220727376,1637220727668,1637220727784,],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(206, 207, 209, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 209)',
                'rgb(201, 203, 209)'
            ],
            borderWidth: 1,
            // width: 300,
            // height: 400,
        }],
    };
    const data5 = {
        labels: topValues6,
        datasets: [{
            label: "todayRecovered",
            data: topValues5,
            // data: [1637220727377,1637220727468,1637220727387,1637220727386,1637220727567,1637220727376,1637220727668,1637220727784,],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(206, 207, 209, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 209)',
                'rgb(201, 203, 209)'
            ],
            borderWidth: 1,
            // width: 300,
            // height: 400,
        }],
    };
    return (
        <>
            <Navbar />
            <div className="div-div-map-classname-1-parent-1-child-1">
                <div className="div-div-map-classname-1-parent-1">
                    <div className="div-div-map-classname-1">
                        <span className="div-div-div-map-classname-span2">Total Confirmed  </span>
                        <span className="div-div-div-map-classname-span3">{totalcases}</span>
                    </div>
                    <div className="div-div-map-classname-1">
                        <span className="div-div-div-map-classname-span4">Total Recovered</span>
                        <span className="div-div-div-map-classname-span5">{Totalrecovered}</span>
                    </div>
                    <div className="div-div-map-classname-1">
                        <span className="div-div-div-map-classname-span6">Total Deaths</span>
                        <span className="div-div-div-map-classname-span7">{Totaldeaths}</span>
                    </div>
                </div>
            </div>
            <div className="home-div">
                <div>
                    <h4></h4>
                </div>
                <div className="obj-div-card-bar-div-span--1">
                    <div style={{ width: 400, height: 400, }}>
                        <Line className="obj-div-card-bar-div-1-2-3" data={data4} />
                    </div>
                    <div style={{ width: 400, height: 400, }}>
                        <Bar className="obj-div-card-bar-div-1" data={data3} />
                    </div>
                    <div style={{ width: 400, height: 400, }}>
                        <Line className="obj-div-card-bar-div-1-2-3" data={data5} />
                    </div>
                </div>
                <div className="home-div-2">
                    {/* <Example/> */}
                    {/* <App/> */}

                    <Table dataSource={det} sticky={true}>
                        <Column title="Country" dataIndex="country" value="country" key="country"
                            // Filter={(value, record) => record.country.startsWith(value)} 
                            // filterSearch={true} 
                            width='40%' render={(a, e) => (
                                <>
                                    {/* <button o></button> */}
                                    <img className="table-tr-td-img" src={e.countryInfo.flag} />
                                    <h5 onClick={() => data(e)}>{e.country}</h5>
                                </>
                            )} />
                        <Column title="Confirmed" dataIndex="cases" key="cases" />
                        <Column title="Recovered" dataIndex="recovered" key="recovered" />
                        <Column title="Deaths" dataIndex="deaths" key="deaths" />
                    </Table>
                </div>
            </div >
        </>
    )
}
export default Home