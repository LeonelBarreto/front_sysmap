import './styles.css';
import baseApi from '../../services/getApi';
import { useEffect, useState} from 'react'
import UserCard from '../../components/UserCard';

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      try {
        const response = await baseApi.get(`/users`);

        if (response.status > 204) {
          return;
        };

        setUsers(users.concat(...response.data));
      } catch (error) {
        console.log(error);
      }
    }
    loadAPI();
  }, [users]);

  return (

    <main className='container-list-users'>
      <h2>USUÁRIOS CADASTRADOS</h2>
        <dir className='container-list-users-card-data'>
          {users?.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </dir>       
    </main>
  );
}

export default Users;