import './styles.css';
import baseApi from '../../services/getApi';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import Comment from '../../components/Comment';

function Post() {
    const { id } = useParams();
    const [comments, setComments] = useState([{
        postId: 0,
        id: 0,
        name: '',
        email: '',
        body: ''
    }]);
    
    useEffect(() => {
        async function loadAPI() {
          try {
            const response = await baseApi.get(`/posts/${id}/comments`);
    
            if (response.status > 204) {
              return;
            };
    
            setComments(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        loadAPI();
      }, []);

  return (

    <main className='main-container'>
        <div className='post-container-cards'>
          
          {comments?.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </div>
    </main>
  );
}

export default Post;