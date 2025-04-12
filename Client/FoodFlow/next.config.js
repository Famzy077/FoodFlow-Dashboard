/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1, // Limit concurrent page builds to reduce CPU strain
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.net',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'icon2.cleanpng.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Ensure this matches your Cloudinary URLs
      },
      {
        protocol: 'https',
        hostname: '*.net', // If images come from this domain
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com'
      },
    ],
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    // Customize Webpack watch options
    config.watchOptions = {
      ignored: ["**/node_modules", "**/.next/**"],
    };

    // Add a rule to handle .node files (if needed)
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });
    return config;
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       ignored: ["**/node_modules", "**/.next/**"],
//     };
//     return config;
//   },
// };
// module.exports = nextConfig;
// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   webpack: (config, { isServer }) => {
// //     // Add a rule to handle .node files
// //     config.module.rules.push({
// //       test: /\.node$/,
// //       use: "node-loader",
// //     });

// //     return config;
// //   },
// //   webpackDevMiddleware: (config) => {
// //     config.watchOptions = {
// //       ignored: ["**/node_modules", "**/.next/**"],
// //     };
// //     return config;
// //   },
// // };

// // module.exports = nextConfig;
