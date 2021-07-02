import { Link } from 'react-router-dom'

const Posts = (props) => {
    // console.log(props.data)
    return (
        <div>
            <h3><Link to={'/blog/id'}>{props.data.title}</Link></h3>
        </div>
    )
}

export default Posts