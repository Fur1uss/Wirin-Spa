import React, { useState, useEffect } from "react";

export default function ImageCarousel() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flocal01.webp?alt=media&token=d5358b74-e42b-4a45-8d65-0ead449ae89b",
    "https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flocal02.webp?alt=media&token=33f635e0-2536-467a-b15b-7fa4873795ae",
    "https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flocal03.jpg?alt=media&token=2365fece-9a5f-431d-acc1-ce7a9822e9e5",
    "https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flocal04.jpg?alt=media&token=0da55556-a189-4e92-b079-a542c3eeed5d",
    "https://firebasestorage.googleapis.com/v0/b/pulgaticket.appspot.com/o/assets%2Flocal05.jpg?alt=media&token=ecd210ab-88a0-4975-9c8d-e061195a9d82",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.carouselContainer}>

      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={styles.image}
        />
      </div>


      <div style={styles.indicators}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? "#333" : "#ccc",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  carouselContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "17px",
    objectFit:"cover",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "17px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "17px",
  },
  indicators: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
