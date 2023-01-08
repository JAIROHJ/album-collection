import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const UpdateAlbum = (props) => {
    const getUpdateData = ()=>{
        const id = props.album.id;
        let updateTitle = document.getElementById('title-input').value;
        let updateUserid = document.getElementById('userid-input').value;

        if(updateTitle===''){
            updateTitle = props.album.title;
        }
        if(updateUserid===''){
            updateUserid = props.album.userId
        }
        props.updateAlbumInList(id,updateTitle,Number(updateUserid),props.album);
    }
  return (
    <div className="navbar">
        <Navbar  path="/" page="Home"/>
        <div className="update-album">
            <h2>Update Your Album</h2>
            <div className="form-container">
                <h3><span>Title:</span> {props.album.title}</h3>
                <div className="input-container">
                   <span> Add New Title:</span>
                    <input type="text" id='title-input' />
                </div>
                <h3><span> User Id:</span>{props.album.userId}</h3>
                <div className="input-container">
                    <span> Add New UserId:</span>
                    <input type="number" id='userid-input' />
                </div>
                <Link to="/"><button type='submit' onClick={getUpdateData}>Save</button></Link>
            </div>
        </div>
    </div>
  )
}

export default UpdateAlbum