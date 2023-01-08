import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const AddAlbum = (props) => {
    const getAlbumFormData = ()=>{
        const userId = document.getElementById('addform-userid-input').value;
        const title = document.getElementById('addform-title-input').value;
        props.AddAlbumToList(Number(userId),title)
    }
  return (
    <div>
        <Navbar path="/" page="Home"/>
        <div className="addalbum-container">
            <div className="addalbum-form">
                <h3>Add New Album Details</h3>
                <div className="input-container">
                    <span> User Id:</span>
                    <input type="number" id="addform-userid-input" />
                </div>
                <div className="input-container">
                   <span> Album Title:</span>
                    <input type="text" id="addform-title-input" />
                </div>
            </div>
            <Link to="/"><button onClick={getAlbumFormData}>Add to List</button></Link>
        </div>
    </div>
  )
}

export default AddAlbum