import React from 'react';

const ApiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m-4 4l-4 4 4 4m8-8l4 4-4 4" />
  </svg>
);

export default ApiIcon;