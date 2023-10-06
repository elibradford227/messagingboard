import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSinglePost } from '../../api/postData';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSinglePost(firebaseKey).then(setPostDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          <p>{postDetails.title}</p>
          <p>{postDetails.description}</p>
        </h5>
      </div>
    </div>
  );
}
