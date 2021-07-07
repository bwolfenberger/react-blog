import './App.css'
import Posts from './Posts.js'
import Post from './Post.js'
import { useEffect, useState } from 'react'
import axios from 'axios';

import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  let [data, setData] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {

        //**** tip : axios.post for post request
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


  return (
    <Container className='p-3'>
        <Router>

          <Route
          exact path='/blog'
          render={() => <Posts data={data} />}
          />

          <Route
          exact path='/blog/:id'
          render={(props) => {
            // console.log(props.match.params.id)
            const post = data.find(post => post._id.toString() === props.match.params.id)
            props = {...props, ...post}
            return <Post {...props} />}
          }
          />
        </Router>
    </Container>
  )
}

export default App;
