import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function PostCard({ postObj }) {
  return (
    <Card style={{ width: '50rem', marginRight: '20px', height: '10rem' }} className="postCard">
      <Card.Body>
        <Card.Title>{postObj.title}</Card.Title>
        <p>{postObj.description}</p>
        <Link href={`/posts/${postObj.firebaseKey}`} passHref>
          <Button variant="primary" className="viewBtn">View</Button>
        </Link>
        <Link href={`/posts/edit/${postObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
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
  }).isRequired,
};
