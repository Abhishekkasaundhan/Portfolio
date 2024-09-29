import React from 'react';
import CV from '../../assets/Resume.pdf';

const downloadAndOpenPDF = () => {
  const link = document.createElement('a');
  link.href = CV;
  link.download = 'CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Wait a bit to ensure the download has started
  setTimeout(() => {
    window.open(CV, '_blank');
  }, 1000); // Adjust the delay as needed
};

const CTA = () => {
  return (
    <div className='cta'>
      <button className='btn btn-primary' onClick={downloadAndOpenPDF}>Download Resume</button>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
};

export default CTA;
