import React, { useState } from 'react';

const AddImage = ({ addImage, captureImage }) => {
  const [newImage, setNewImage] = useState('');

  return (
    <div className="add-image-section">
      <input
        type="text"
        placeholder="Enter Image URL"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <button onClick={() => addImage(newImage)} className="add-btn">Add Image</button>
      <button onClick={captureImage} className="capture-btn">Capture Image</button>
    </div>
  );
};

export default AddImage;
