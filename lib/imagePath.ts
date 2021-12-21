
export const getImagePathForHero = (imageSrc: string): string => {
  const url = `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT_HERO}${imageSrc.replace(/^\//, '')}`;
  return url;
}

export const getImagePathForThumbnail = (imageSrc: string): string => {
  const url = `${process.env.NEXT_PUBLIC_IMAGE_ENDPOINT_THUMBNAIL}${imageSrc.replace(/^\//, '')}`;
  return url; 
}
