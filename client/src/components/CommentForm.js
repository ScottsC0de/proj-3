import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CommentForm = ({ userId }) => {
  const [comment, setComment] = useState('');

  const [addComment, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addComment({
        variables: { userId, comment },
      });

      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add some more comments below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add some comments..."
              value={comment}
              className="form-input w-100"
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Comment
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add comments. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
