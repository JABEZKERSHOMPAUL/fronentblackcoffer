// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Table = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/alldata')
//       .then(response => {
//         console.log(response.data.res)
//         setData(response.data.res);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);


//   return (
//     <div>
//       <h1>Datas in Table</h1>
//       <table>

//         <tbody>
//           {data.map(item => {
//             return (
//               <tr key={item._id}>
//                 <td>{item.topic}</td>
//                 <td>{item.insight}</td>
//                 <td>{item.region}</td>
//                 <td>{item.country}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// export default Table;


import Select from 'react-select'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Table.css"

const TablePagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page
    const [endYear, setendYear] = useState("")
    const [topic, settopic] = useState("")
    const [country, setcountry] = useState("")

    useEffect(() => {
        fetchData();
    }, [currentPage, endYear, topic,country]); // Fetch data when the current page changes

    const fetchData = async () => {
        try {


            // Fetch paginated data using POST request
            const response = await axios.post('https://blackcoofer.onrender.com/api/pagination', {
                search: '', // Your search query
                limit: itemsPerPage,
                skip: (currentPage - 1) * itemsPerPage,
                end_year: endYear ,
                region: "",
                topic: topic,
                country: country,
                insight: ""
            });

            const responseData = response.data.response;


            // Update data for paginated requests
            setData(responseData.result);

            setTotalPages(Math.ceil(responseData.fullcount / itemsPerPage));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const year = [
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
        { value: '2020', label: '2020' }
    ];
    const topicsoption = [
        { value: 'oil', label: "OIL" },
        { value: "energy", label: "ENERGY" },
        { value: "growth", label: "GROWTH" },
        { value: "economy", label: "ECONOMY" },
        { value: "gas", label: "GAS" }
    ]
    const countryoption=[
        {value:"United States of America",label:"United States of America"},
        {value:"India",label:"India"},
        {value:"Saudi Arabia",label:"Saudi Arabia"},
        {value:"South Africa",label:"South Africa"},
    ]


    return (
        <div className="table-container">
            <h1 className="table-title">Table Pagination </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <Select isClearable options={year} onChange={(e) => setendYear(e ? e.value : "")} />
                    </div>
                    <div className='col-4'>
                        <Select isClearable options={topicsoption} onChange={(e) => settopic(e ? e.value : "")} />
                    </div>
                    <div className='col-4'>
                        <Select isClearable options={countryoption} onChange={(e) => setcountry(e ? e.value : "")} />
                    </div>
                    
                </div>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Insight</th>
                        <th>Year</th>
                        <th>Region</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.topic}</td>
                            <td>{item.insight}</td>
                            <td>{item.end_year}</td>
                            <td>{item.region}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination-controls">
                {/* Pagination controls */}
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="pagination-page">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};




export default TablePagination;

