import React from 'react';
import ImageList from '../components/ImageList';
import { Container,  Card } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS} from "../utils/queries";
import UserNav from "../components/ImageAndUserNav"; 

const AllSavedUsers = () => {

    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    return (
      <>
      {/* <UserNav /> */}
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ImageList
                  users={users}
                  title="See what inspires other users..."
                />
              )}
            </div>
          </div>
        </main>
        </>
      );
    };

    export default AllSavedUsers;
