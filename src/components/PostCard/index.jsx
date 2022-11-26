import './styles.css';
//import { useNavigate } from 'react-router-dom';

function PostCard({ title, body }) {

    /*const navigate = useNavigate();

    function loadPost() {
        navigate('/post')
    };*/

    return(
        <div className='post-list-data'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button className='post-list-button'>Ver Comentários</button>
        </div>
    )
}

export default PostCard;