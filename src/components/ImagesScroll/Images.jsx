import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Images.css'
export default function Images() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://picsum.photos/v2/list?page=1&limit=20';
    
        axios.get(apiUrl)
          .then((response) => {
            setImages(response.data);
          })
          .catch((error) => {
            console.error('Error fetching images:', error);
          });
      }, []);

    return(
            <div className="gallery">
                 {images.map((image) => (
                     <div key={image.id} className="gallery-item">
                         <img
                           src={image.download_url}
                           alt={`Image ${image.id}`}
                           className="gallery-images"
                         />
                     </div>
                 ))}
            </div>
    )
}
