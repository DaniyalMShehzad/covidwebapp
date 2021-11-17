import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router";
import Example from './chart';
import Navbar from './navbar';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { Bar } from "react-chartjs-2";
const { Column, ColumnGroup } = Table;

function Home() {
    const [det, setData] = useState([])
    const [inp, setInp] = useState([])
    const [totalcases, setTotalCases] = useState(0)
    const [Totalrecovered, setTotalRecovered] = useState(0)
    const [Totaldeaths, setTotalDeaths] = useState(0)
    const [topValues, setTopValues] = useState([])



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
        const topValues1 = det.sort((a, b) => b.cases - a.cases).slice(0, 8);
        setTopValues(topValues1)
    }, [det])
    console.log(topValues);

    useEffect(() => {
        getData();
    }, [])
    console.log(totalcases);
    const navigate = useNavigate();

    const data = (id) => {
        console.log("id")
        // const api = "https://disease.sh/v3/covid-19/countries/id"
        // axios.get(api).then((e) => {
        //     const datatype={e}
        //     console.log(datatype);
        navigate(`about/${id?.countryInfo?._id}`, { state: id },);
        // console.log(id);

        // })
    }


    // const filters= [{
    //     title: 'country',
    //     dataIndex: 'country',
    //     filters: [
    //       {
    //         text: country,
    //         value: country,
    //       },
    //       {
    //         text: country,
    //         value: country,
    //       },
    //     ],
    //     onFilter: (value, record) => record.address.indexOf(value) === 0,
    //   },
    // ];
    // function onChange(i) {
    //             const api = "https://disease.sh/v3/covid-19/countries/country"
    //     axios.get(api).then((e) => {
    //     console.log(e);

    //     })
    //   }
    // const totalCases = (a,b)=>{
    //     const pr= (a+b)
    //     return pr.reduce()
    // // }
    // console.log(cases);
    // const arr2 =[
    // {
    //     title: 'Address',
    //     dataIndex: 'address',
    //     filters: [
    //       {
    //         text: 'London',
    //         value: 'London',
    //       },
    //       {
    //         text: 'New York',
    //         value: 'New York',
    //       },
    //     ],
    // onFilter: (value, record) => record.address.startsWith(value),
    // filterSearch: true,
    // width: '40%',
    // ]
    //   },
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
                    {/* <table  className="home-div-table">
                    <tr className="home-div-table-tr">
                        <th className="home-div-table-tr-th" colspan="2" >Country</th>
                        <th className="home-div-table-tr-th">Total Confirmed</th>
                        <th className="home-div-table-tr-th">Total Recovered</th>
                        <th className="home-div-table-tr-th">Total Deaths</th>
                    </tr>
                    {det.map((e, i) => {
                        return (
                            <tr  className="home-div-table-tr-2" key={i}>
                                <td id="home-div-table-tr-td-id" className="home-div-table-tr-td-2" colspan="2">
                                    <div className="home-div-table-tr-td-div-1">
                                    <img className="table-tr-td-img" src={e.countryInfo.flag} />
                                    <h5 onClick={() => data(e)}>{e.country}</h5>
                                    </div>
                                </td>
                                <td className="home-div-table-tr-td-2">{e.cases}</td>
                                <td className="home-div-table-tr-td-2">{e.recovered}</td>
                                <td className="home-div-table-tr-td-2">{e.deaths}</td>
                            </tr>
                        )
                    })}
                </table> */}
                    <div>
                        {/* <Bar className="obj-div-card-Doughnut" data={data} width={50} height={50} /> */}
                    </div>
                </div>
            </div >
        </>
    )
}
export default Home