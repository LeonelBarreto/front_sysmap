import './styles.css';

function Comment({ name, email, body }) {

    return(
        <div className='post-list-data'>
            <h2>{name}</h2>
            <span>{email}</span>
            <p>{body}</p>
        </div>
    )
}

export default Comment;