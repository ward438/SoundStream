import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


const AddArtist = (artistId) => {
    const requestObj = {"_id":"60e8a7a23c2a9a18acebe544", ...artistId }
    const addArtist = () => {
        axios({
            method: 'PUT',
            url: '/api/userData/add-artist',
            data: requestObj,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8' 
            }
        }).then(response => {
            toast.info('Artist added to list')
            console.log(response);
        })
        // {
        //     artistId: artistId.artistId
        // }).then((response) => {
        //     // todo - show a toast w/ a message
        //     console.log(response);        })
    }
    return (
        <div>
            <Button type="submit" onClick={() => addArtist( artistId )}>Add Artist</Button>
             <ToastContainer />
        </div>
    )
}

export default AddArtist;

