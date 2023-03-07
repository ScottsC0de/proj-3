import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_USER } from '../utils/queries';

const SingleUser = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {user.email}'s friends have comment on their image...
      </h2>

      {user.comments?.length > 0 && <CommentsList comments={user.comments} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm userId={user._id} />
      </div>
    </div>
  );
};

export default SingleUser;
