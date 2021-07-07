import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Posts = (props) => {
    // console.log(props.data)
    const renderedPosts = props.data.map((data, index) => {
        return (
            <div>
        
                <ul key={index}>
                    <h3><Link to={`/blog/${data._id}`}>{data.title}</Link>
                    <br></br>
                    -<small>{data.name}</small></h3>
                </ul>
            </div>
        )
    })

    return (
        <div>
            <div>
                <Jumbotron>
                    <h1 className='header'>Benji's Blog</h1>
                    <p>Welcome to my blog where you can read about the coolest and most interesting topics</p>
                </Jumbotron>
            </div>
            <ul className='list'>
                {renderedPosts}
            </ul>
        </div>
    )
}

export default Posts