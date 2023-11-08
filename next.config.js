/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Houssam2001",
        permanent: true,
      },
      
      {
        source: "/instagram",
        destination: "https://instagram.com/machmech_houssam/",
        permanent: true
      },
      // {
      //   source: "/npm",
      //   destination: "https://npmjs.com/",
      //   permanent: true
      // }
    ];
  },
};

module.exports = nextConfig
