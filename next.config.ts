/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.luzanimal.com", "res.cloudinary.com"], 
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;