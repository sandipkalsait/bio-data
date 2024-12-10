import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, setImages }) => {
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="other-images">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image} alt={`Random ${index}`} className="other-image" />
          <button onClick={() => removeImage(index)} className="remove-btn">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
