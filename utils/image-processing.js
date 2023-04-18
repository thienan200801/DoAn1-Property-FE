const imageBaseUrl = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;
const imageUrlRegex = /src="([^"]*)"/;
const imageUrlRegexGlobal = new RegExp(imageUrlRegex, "g");

export function convertImageNameToImageUrl(imageName) {
  return `${imageBaseUrl}/${imageName}`;
}

export function replaceImageNameByImageUrl(content) {
  const imageArray = [...content.matchAll(imageUrlRegexGlobal, "g")];
  const imageNameArray = imageArray.map((image) => {
    return image[1];
  });

  let newContent = content;
  for (let imageName of imageNameArray) {
    const imageUrl = convertImageNameToImageUrl(imageName);
    newContent = newContent.replaceAll(imageName, imageUrl);
  }

  return newContent;
}
