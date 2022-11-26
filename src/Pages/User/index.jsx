import './styles.css';
import baseApi from '../../services/getApi';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({
        id: 0,
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            },
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhare: '',
            bs: ''
        }
    });
    
    useEffect(() => {
        async function loadAPI() {
          try {
            const response = await baseApi.get(`/users/${id}`);
    
            if (response.status > 204) {
              return;
            };
    
            setUser(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        loadAPI();
      }, [id]);

  return (

    <main className='main-container'>
        <div className='post-container-cards'>
          <span>{user.id}</span>
          <span>{user.name}</span>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.address.street}</span>
          <span>{user.address.suite}</span>
          <span>{user.address.city}</span>
          <span>{user.address.zipcode}</span>
          <span>{user.address.geo.lat}</span>
          <span>{user.address.geo.lng}</span>
          <span>{user.phone}</span>
          <span>{user.website}</span>
          <span>{user.company.name}</span>
          <span>{user.company.catchPhare}</span>
          <span>{user.company.bs}</span>
        </div>
    </main>
  );
}

export default User;