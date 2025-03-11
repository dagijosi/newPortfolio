const images = import.meta.glob('../image/*.{png,jpg,jpeg,svg}');

const imagePaths = Object.keys(images);

export default imagePaths;
