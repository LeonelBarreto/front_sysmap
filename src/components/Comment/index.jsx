import './styles.css';

function Comment({ name, email, body }) {

    return(
        <div className='comment-list-data'>
            <span>nome:</span>
            <p>{name}</p>
            <span>e-mail:</span>
            <p>{email}</p>
            <span>Comentário:</span>
            <p>{body}</p>
        </div>
    )
}

export default Comment;