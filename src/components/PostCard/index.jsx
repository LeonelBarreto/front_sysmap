import './styles.css';
import { useNavigate } from 'react-router-dom';

function PostCard({ title, body, id }) {

    const navigate = useNavigate();

    function redirectComments() {
        navigate(`/post/${id}`)
    };

    return(
        <div className='post-list-data'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button className='post-list-button' onClick={redirectComments}>Ver Comentários</button>
        </div>
    )
}

export default PostCard;