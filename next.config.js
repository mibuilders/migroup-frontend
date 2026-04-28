/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['backend.mibuilders.com'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },

      {
        protocol: "http",
        hostname: "65.1.0.20",
      },
      {
        protocol: "https",
        hostname: "api.mibuilders.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/residential.php",
        destination: "/projects/residential",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/retreat_center.php",
        destination: "/projects/residential/mi-retreat-center",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uploads/medium_blog_banner_img2_mobile_6d6258f43d.webp",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/uploads/Company_profile_06f75e8dbd.pdf",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/updates.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/faq/index.html",
        destination: "/projects/residential/mi-gordan",
        permanent: true,
      },
      {
        source: "/contact/index.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/residential/project/miroyal.html",
        destination: "/projects/residential/mi-royal-court-1",
        permanent: true,
      },
      {
        source: "/residential.html",
        destination: "/projects/residential",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
