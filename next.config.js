/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "swiperjs.com",
      port: "",
      pathname: "/demos/images/**",
    },
  ],
};

module.exports = {
  images: {
    domains: ["swiperjs.com", "fiverr-res.cloudinary.com" ,"img.freepik.com", "media.istockphoto.com", "images.unsplash.com"],
  },
};
