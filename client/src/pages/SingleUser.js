import React from 'react';
import {
  Jumbotron,
  Container,
  Card,
  Button,
} from "react-bootstrap";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentsList from '../components/CommentList';
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
    <>
    <Jumbotron fluid className="text-light bg-dark">
      <Container>
        <h1>Viewing {user.username} saved images</h1>
      </Container>
    </Jumbotron>
    <Container>
    <h2>
          {user.savedImages?.length
            ? `Viewing ${user.savedImages.length} saved ${
              user.savedImages.length === 1 ? "image" : "images"
              }:`
            : "You have no saved images"}
        </h2>
        <div className="masonry-with-columns">
          {user.savedImages?.map((photo) => {
            return (
              <Card className="card" key={photo.imageId}>
                <Card.Img
                  key={`${photo.imageId}`}
                  src={`${photo.src}`}
                  alt={`${photo.title}`}
                  thumbnailheight={350}
                  thumbnailwidth={350}
                  caption={`${photo.title}`}
                />
                {
                  <h4>{photo.title}</h4>
                }
              </Card>
            );
          })}
        </div>
    </Container>
    <Container>
    <div>
      <h2 className="card-header">
        {user.username}'s friends have comment on their image...
      </h2>

      {user.comments?.length > 0 && <CommentsList comments={user.comments} />}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm userId={user._id} />
      </div>
    </div>
    </Container>
    </>
  );
};

export default SingleUser;
