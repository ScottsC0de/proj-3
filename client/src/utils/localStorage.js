export const getSavedImageSrcs = () => {
    const savedImageSrcs = localStorage.getItem('saved_images')
      ? JSON.parse(localStorage.getItem('saved_images'))
      : [];
  
    return savedImageSrcs;
  };
  
  export const saveImageSrcs = (imageSrcArr) => {
    if (imageSrcArr.length) {
      localStorage.setItem('saved_images', JSON.stringify(imageSrcArr));
    } else {
      localStorage.removeItem('saved_images');
    }
  };
  
  export const removeImageSrc = (imageSrc) => {
    const savedImageSrcs = localStorage.getItem('saved_images')
      ? JSON.parse(localStorage.getItem('saved_images'))
      : null;
  
    if (!savedImageSrcs) {
      return false;
    }
  
    const updatedSavedImageSrcs = savedImageSrcs?.filter((savedImageSrc) => savedImageSrc !== imageSrc);
    localStorage.setItem('saved_images', JSON.stringify(updatedSavedImageSrcs));
  
    return true;
  };
  