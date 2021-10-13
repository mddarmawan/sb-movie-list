import React from 'react';
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <button data-testid="backBtn" className="mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Back
      </button>
    </Link>
  );
}

export default BackButton;
