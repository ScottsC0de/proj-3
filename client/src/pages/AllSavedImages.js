import React from 'react';
import ImageList from '../components/ImageList';
import { Container,  Card } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_IMAGES} from "../utils/queries";

// use this page to display query/resolver of ALL saved images on DB

const AllSavedImages = () => {

    const { loading, data } = useQuery(QUERY_IMAGES);
    const users = data?.users || [];

    return (
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ImageList
                  users={users}
                  title="Here's the current list of all users..."
                />
              )}
            </div>
          </div>
        </main>
      );
    };
    
    export default AllSavedImages;
    