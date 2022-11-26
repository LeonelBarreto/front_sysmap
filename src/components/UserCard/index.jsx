import './styles.css';
import { useNavigate } from 'react-router-dom';

function UserCard({ id, name, username, email }) {

    const navigate = useNavigate();

    function redirectComments() {
        navigate(`/users/${id}`)
    };

    return(
        <div className='post-list-data'>
            <span>{name}</span>
            <span>{username}</span>
            <span>{email}</span>
            <button className='post-list-button' onClick={redirectComments}>Detalhes do Usuário</button>
        </div>
    )
}

export default UserCard;