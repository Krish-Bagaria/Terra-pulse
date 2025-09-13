import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          Property Details - {id}
        </h1>
        <div className="card">
          <p className="text-neutral-600">
            Property details page will be implemented here with image gallery, 
            property information, AI predictions, and ROI calculator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;

