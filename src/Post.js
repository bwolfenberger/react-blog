const Post = (props) => {
console.log(props)
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <small>By: {props.name}</small>
        </div>
    )
}

export default Post