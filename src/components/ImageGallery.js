// src/components/ImageGallery.js
import React from 'react';
import Gallery from 'react-photo-gallery';
import { motion } from 'framer-motion';
import image1 from '../images/comingsoon.jpg';

const photos = [
  {
    src: image1,
    width: 4,
    height: 3,
  },
  {
    src: image1,
    width: 4,
    height: 3,
  },
  // Add more images as needed
];

function ImageGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="image-gallery"
    >
      <Gallery photos={photos} />
    </motion.div>
  );
}

export default ImageGallery;
