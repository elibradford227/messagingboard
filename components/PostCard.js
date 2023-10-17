import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { updatePost } from '../api/postData';

export default function PostCard({ postObj }) {
  const [votes, setVotes] = useState(postObj.votes);

  const increment = () => {
    const newVotes = postObj.votes + 1;
    const payload = { votes: newVotes, firebaseKey: postObj.firebaseKey };
    updatePost(payload);
    setVotes(newVotes);
  };

  const decrement = () => {
    const newVotes = postObj.votes - 1;
    const payload = { votes: newVotes, firebaseKey: postObj.firebaseKey };
    updatePost(payload);
    setVotes(newVotes);
  };
  return (
    <Card style={{ width: '50rem', marginRight: '20px', height: '10rem' }} className="postCard">
      <Card.Body>
        <Card.Title>{postObj.title}</Card.Title>
        <p>{postObj.description.length > 250 ? `${postObj.description.slice(0, 250)}...` : postObj.description}</p>
        <Link href={`/posts/${postObj.firebaseKey}`} passHref>
          <Button variant="primary" className="viewBtn">View</Button>
        </Link>
        <Link href={`/posts/edit/${postObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="primary" className="m-2" onClick={decrement}>
          -
        </Button>
        {votes}
        <Button variant="primary" className="m-2" onClick={increment}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    votes: PropTypes.number,
  }).isRequired,
};
