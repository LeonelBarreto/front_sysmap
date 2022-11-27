import './styles.css';
import { useNavigate } from 'react-router-dom';

function UserCard({ id, name, username, email }) {

    const navigate = useNavigate();

    function redirectComments() {
        navigate(`/users/${id}`)
    };

    return(
        <div className='list-users'>
            <span>Nome:</span>
            <p>{name}</p>
            <span>Username:</span>
            <p>{username}</p>
            <span>E-mail:</span>
            <p>{email}</p>
            <button className='btn' onClick={redirectComments}>Detalhes do Usuário</button>
        </div>
    )
}

export default UserCard;