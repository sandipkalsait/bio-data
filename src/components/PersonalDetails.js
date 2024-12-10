import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = ({ details }) => {
  return (
    <div className="personal-details">
      <h2>💖{details.name}💖</h2>
      <p><strong>Age:</strong> {details.age}</p>
      <p><strong>Profession:</strong> {details.profession}</p>
      <p><strong>Location:</strong> {details.location}</p>
      <p><strong>About Me:</strong> {details.aboutMe}</p>

      {/* Family Details */}
      <div>
        <strong>Family:</strong>
        <p>Father: {details.family.father}</p>
        <p>Mother: {details.family.mother}</p>
        <p>Siblings: {details.family.siblings}</p>
      </div>

      {/* Interests */}
      <div>
        <strong>Interests:</strong>
        <ul>
          {details.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      {/* Values */}
      <div>
        <strong>Values:</strong>
        <p>{details.values}</p>
      </div>

      {/* Looking For */}
      <div>
        <strong>Looking For:</strong>
        <p>{details.lookingFor}</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
