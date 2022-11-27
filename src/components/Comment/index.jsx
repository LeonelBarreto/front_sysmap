import './styles.css';

function Comment({ name, email, body }) {

    return(
        <div className='comment-list-data'>
            <span>Nome:</span>
            <p>{name}</p>
            <span>E-mail:</span>
            <p>{email}</p>
            <span>Comentário:</span>
            <p>{body}</p>
        </div>
    )
}

export default Comment;