import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Hidden, IconButton, useTheme } from '@mui/material';
import ImageGallery from 'react-image-gallery';
export type PropertyGalleryProps = {
  items?: { original: string; thumbnail?: string }[];
};


const Gallery : React.FC<PropertyGalleryProps> = ({
  items = [],
}) => {
  const theme = useTheme();
  return (
    <div className="relative">
      <ImageGallery
        autoPlay
        items={items}
        renderLeftNav={(onClick, disabled) => (
          <Hidden only={['xs', 'sm']}>
            <IconButton
              disabled={disabled}
              onClick={onClick}
              sx={{
                left: 8,
                position: 'absolute',
                top: '40%',
                zIndex: theme.zIndex.appBar + 1,
              }}
            >
              <ChevronLeft sx={{ fontSize: '60px' }} />
            </IconButton>
          </Hidden>
        )}
        renderRightNav={(onClick, disabled) => (
          <Hidden only={['xs', 'sm']}>
            <IconButton
              disabled={disabled}
              onClick={onClick}
              sx={{
                position: 'absolute',
                right: 8,
                top: '40%',
                zIndex: theme.zIndex.appBar + 1,
              }}
            >
              <ChevronRight sx={{ fontSize: '60px' }} />
            </IconButton>
          </Hidden>
        )}
      />
      
    </div>
  )
}

export default Gallery