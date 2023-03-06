import React from "react";
import { Jumbotron, Container, CardColumimageIdArrns, Card, Button, } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { REMOVE_IMAGE } from "../utils/mutations";
import Auth from "../utils/auth";
import { removeImageId } from "../utils/localStorage";

const SavedImages = () => {
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me || [];
    const [removeImage] = useMutation(REMOVE_IMAGE);


    // create function that accepts the image's mongo _id value as param and deletes the image from the database
    const handleDeleteImage = async (imageId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeImage({
                variables: { imageId },
            });
            // upon success, remove image's id from localStorage
            removeImageId(imageId);
        } catch (err) {
            console.error(err);
        }
    };

    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
    <>
            <Jumbotron fluid className="text-light bg-dark">
                <Container>
                    <h1>Viewing saved images!</h1>
                </Container>
            </Jumbotron>
             <Container>
                <h2>
                    {userData.savedImages?.length
                        ? `Viewing ${userData.savedImages.length} saved ${userData.savedImages.length === 1 ? "image" : "images"
                        }:`
                        : "You have no saved images!"}
                </h2>
                <div className="masonry-with-columns">
                    {userData.savedImages?.map((photo) =>  {
            return (
            <Card className='card'key={photo.imageId}>
                               <Card.Img
                                key={`${photo.imageId}`}
                                src={`https://live.staticflickr.com/${photo.server}/${photo.imageId}_${photo.secret}.jpg`}
                                alt={`${photo.title}`}
                                thumbnailheight={350}
                                thumbnailwidth={350}
                                caption={`${photo.title}`}
                            />
                            {
                                (

                                    <Button
                                        className="btn-block btn-danger"
                                        onClick={() => handleDeleteImage(photo.imageId)}
                                    >
                                        Delete this Image!
                                    </Button>
                                )

                            }
                        </Card>
            );
})}
    </div>
                </Container>
            </>
    );
};

            export default SavedImages;