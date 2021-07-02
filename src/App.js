import './App.css'
import Posts from './Posts.js'
import { useEffect, useState } from 'react'
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  let [data, setData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/blog')
        // console.log(response.data)
        setData(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  // console.log(data)

  const renderedData = data.map((data, index) =>
    <Posts key={index} data={data} />)

  return (
    <div className="App">
      <Router>
        <h1>Posts</h1>
        {renderedData}
      </Router>
    </div>
  )
}

export default App;
