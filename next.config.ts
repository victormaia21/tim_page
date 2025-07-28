// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'timbrasil.widen.net',
      'grandesnomesdapropaganda.com.br', // ⬅️ Adicione esta linha
    ],
  },
};

module.exports = nextConfig;
