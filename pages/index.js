/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { getPosts } from '../api/postData';
import PostCard from '../components/PostCard';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    getPosts(user.uid).then((result) => setPosts(result));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.warn(posts);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
      }}
    >
      <Link href="/posts/new" passHref>
        <Button variant="primary" className="addBtn">Create Post</Button>
      </Link>
      <h1>Hello {user.displayName}! </h1>
      <div className="d-flex flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.firebaseKey} postObj={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
