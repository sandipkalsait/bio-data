import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import PersonalDetails from './components/PersonalDetails';
import AddImage from './components/AddImage';
// import Loading from './components/Loading'; // Make sure this path is correct
import biodata from './data/data.json'; // Directly import biodata from src/data/data.json
import MarriageThemeComponent from './components/MarriageThemeComponent';

function App() {
  const [images, setImages] = useState([]); // State to store the random or user-added images
  const [randomImages, setRandomImages] = useState([]); // Random images fetched from randomuser.me
  // const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Set initial images from biodata (data.json)
    setImages(biodata.images.others);

    // Fetch random images from randomuser.me API
    fetchRandomImages();
  }, []);

  // Function to fetch random images using randomuser.me API
  const fetchRandomImages = () => {
    const numberOfImages = 5;
    const apiURL = `https://randomuser.me/api/?results=${numberOfImages}`;

    fetch(apiURL)
      .then((response) => response.json())
      .then((responseData) => {
        const fetchedImages = responseData.results.map((user) => user.picture.large);
        setRandomImages(fetchedImages);
        // setLoading(false); // Set loading to false after images are fetched
      })
      .catch((error) => {
        console.error('Error fetching random images:', error);
        // setLoading(false); // Ensure loading is false on error
      });
  };

  // Function to add a new image to the gallery
  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  // Function to simulate image capture from webcam
  const captureImage = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        console.log('Camera stream started', stream);
        // Future work: Implement actual image capture here
      })
      .catch((error) => console.error('Error accessing webcam:', error));
  };

  // If loading, display the loading animation
  // if (loading) return <Loading />; // Display the loading animation while fetching

  return (
    <div className="bio-container">
      {/* Primary Image Section */}
      <div className="image-section">
        <img src={biodata.images.primary} alt="Primary" className="primary-image" />
      </div>

      {/* Personal Details Section */}
      <PersonalDetails details={biodata.personalDetails} />

      {/* Add Image Section */}

      <div className="image-section">
        
        {/* Image Gallery */}
        <ImageGallery images={randomImages.concat(images)} setImages={setImages} />
      </div>
      <AddImage addImage={addImage} captureImage={captureImage} />
      {/* <MarriageThemeComponent /> */}
    </div>
  );
}

export default App;
