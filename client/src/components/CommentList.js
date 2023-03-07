import React from 'react';

const CommentsList = ({ comments }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {comment} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentsList;
