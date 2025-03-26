import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";

// Initialize Cloudinary with your cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true, // Force HTTPS
  },
});

// Helper function to get optimized image URL
export const getImageUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
  }
) => {
  const image = cld.image(publicId);

  // Only apply size transformations if explicitly requested
  if (options?.width || options?.height) {
    const transform = scale();
    if (options.width) transform.width(options.width);
    if (options.height) transform.height(options.height);
    image.resize(transform);
  }

  // Add format auto and quality auto for best performance
  // but don't compress quality unless specifically requested
  image.delivery(format("auto"));
  image.quality(options?.quality ? options.quality : auto());

  return image.toURL();
};

export default cld;
