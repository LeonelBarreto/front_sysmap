import './styles.css';
import PostCard from '../../components/PostCard';
import baseApi from '../../services/getApi';
import { useEffect, useState} from 'react'

function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      try {
        const response = await baseApi.get(`/posts`);

        if (response.status > 204) {
          return;
        };

        setPosts(posts.concat(...response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadAPI();
  }, []);

  return (

    <main className='main-container'>
        <div className='post-container-cards'>
          
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
    </main>
  );
}

export default Home;