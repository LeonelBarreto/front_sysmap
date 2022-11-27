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

    <main className='container-user'>
      <h2>DADOS DO USUÁRIO</h2>
      <div className='container-user-data'>
        <div className='container-user-data-board'>
          <div className='container-user-data-board-title'>
            <span>PERFIL DO USUÁRIO</span>
          </div>
          <div className='container-user-data-board-info'>
            <span>ID:</span>
            <p>{user.id}</p>
            <span>Nome:</span>
            <p>{user.name}</p>
            <span>Username:</span>
            <p>{user.username}</p>
            <span>E-mail:</span>
            <p>{user.email}</p>
          </div>
        </div>
        <div className='container-user-data-board'>
          <div className='container-user-data-board-title'>
            <span>ENDEREÇO DO USUÁRIO</span>
          </div>
          <div className='container-user-data-board-info'>
            <span>Rua:</span>
            <p>{user.address.street}</p>
            <span>Complemento:</span>
            <p>{user.address.suite}</p>
            <span>Cidade:</span>
            <p>{user.address.city}</p>
            <span>Código Postal:</span>
            <p>{user.address.zipcode}</p>
            <span>Geolocalização:</span>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
            <span>Telefone:</span>
            <p>{user.phone}</p>
            <span>Website:</span>
            <p>{user.website}</p>
          </div>
        </div>
        <div className='container-user-data-board'>
          <div className='container-user-data-board-title'>
            <span>DADOS DA EMPRESA</span>
          </div>
          <div className='container-user-data-board-info'>
            <span>Nome da Empresa:</span>
            <p>{user.company.name}</p>
            <span>Bordão:</span>
            <p>{user.company.catchPhrase}</p>
            <span>Brand Slogan:</span>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default User;