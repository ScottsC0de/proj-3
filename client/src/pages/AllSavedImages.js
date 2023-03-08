import React from 'react';
import ImageList from '../components/ImageList';
import { Container, Button, Card } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
// import { QUERY_USERS} from "../utils/queries";
import { QUERY_ALL_IMAGES } from "../utils/queries";
import UserNav from "../components/ImageAndUserNav"; 

// use this page to display query/resolver of ALL saved images on DB

const AllSavedImages = () => {

    // const { loading, data } = useQuery(QUERY_USERS);
    const { loading, data } = useQuery(QUERY_ALL_IMAGES);
    console.log('Hello', data);
    const users = data?.users || [];
    console.log('users: ', users);
    const allImages = [];
    for (let i=0; i < users.length; i++) {
      allImages.push((users[i].savedImages))
    }
    console.log('allImages: ', allImages.flat());
    const images = allImages.flat();
    console.log('images: ', images);

    return (
      <>
      <Container>
      <UserNav />
</Container>
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                // <ImageList
                //   users={users}
                //   title="See what inspires other users..."
                // />
                <Container>
                <h2>
                  {images.length
                    ? `Viewing ${images.length} results:`
                    : ""}
                </h2>
        
                <div className="masonry-with-columns">
                  {images.map((photo) => {
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
                  <Button
                    className="btn-block btn-danger"
                    // onClick={() => handleDeleteImage(photo.imageId)}
                    onClick={() => alert(`Liked ${photo.title}` )}
                  >
                    Like this Image!
                  </Button>
                }
                      </Card>
                    );
                  })}
                </div>
              </Container>

                
              )}
            </div>
          </div>
        </main>
        </>
      );
    };
    
    export default AllSavedImages;
    