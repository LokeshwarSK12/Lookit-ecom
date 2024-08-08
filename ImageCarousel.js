// src/components/ImageCarousel.js
import React, { useState } from 'react';
import image1 from './assets/virat.jpg';
import image2 from './assets/rohit.jpg';
import image3 from './assets/dhoni.jpg';
import image4 from './assets/lap1.jpg';
import image5 from './assets/mac1.jpg';

const images = [
  image1,image2,image3
];

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={handlePrev} className="arrow left-arrow">
//         &lt;
//       </button>
//       <div className="image-container">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
//       </div>
//       <button onClick={handleNext} className="arrow right-arrow">
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
      <div className='flexdiv'>
        <div className="carousel">
          <div className="image-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={handlePrev} className="arrow left-arrow">
              &lt;
            </button>
            <button onClick={handleNext} className="arrow right-arrow">
              &gt;
            </button>
          </div>
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
          <h1 className='details'>
            Limited Deal
          </h1>
          <h2 className='detail1'>
            Realme 12Pro
          </h2>
          <p className='price'>Just<span> $ 221</span></p>
        </div>
        <div className='secondcoldiv'>
          <div className='sideimage1'>
              <img src={image4} className='imag1' />
              <div className='offer'>
                20%<br/><span >get</span>
              </div>
              <div className='circle'>

              </div>
              <h1>ACER
                <br/>
                <span>
                  Get the world 
                </span>
              </h1>
          </div>
          <div className='sideimage2'>
              <img src={image5} className='imag2'/>
              <div className='offer1'>
                20%<br/><span >get</span>
              </div>
              <div className='circle2'>

              </div>
              <h1>Mac
                
                <span>
                  -ing 
                </span>
              </h1>
          </div>
        </div>
      </div>
  );
};

export default ImageCarousel;
