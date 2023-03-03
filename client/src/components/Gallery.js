import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

function Gallery() {
    const [gallery, setGallery] = useState([]);

  
    useEffect(() => {
        async function fetchGallery() {
        // Request for images      
        axios.get('https://res.cloudinary.com/demo/image/list.json')
            .then(res => {
                console.log(res.data.resources);
                setGallery({gallery: res.data.resources});
            });
    }
    fetchGallery();
    }, []);

    // uploadWidget() {
    //    // . . .
    // }
        return (
            <div className="main">
                <h1>Gallery</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="cloud_name">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`https://res.cloudinary.com/demo/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }


    export default Gallery;

