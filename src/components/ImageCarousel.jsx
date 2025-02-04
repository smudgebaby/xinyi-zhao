import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import images from '.././assets/carouselImagesInput.js';

const ImageCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;

    const startScroll = () => {
      let requestId;

      const scrollStep = () => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;

          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
        requestId = requestAnimationFrame(scrollStep);
      };

      requestId = requestAnimationFrame(scrollStep);
      return () => cancelAnimationFrame(requestId);
    };
    const cleanup = startScroll();

    return cleanup;
  }, []);

  const clonedImages = [...images, ...images];

  return (
    <Box sx={{ py: 4, }}>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {clonedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: 250,
              height: 250,
              background: `url(${image}) center/cover no-repeat`,
              borderRadius: 2,
              boxShadow: 3,
              mx: 1,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;


