import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'click.gt',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol:"https",
        hostname:'loremflickr.com'
      },
      {
        protocol:"https",
        hostname:'tumercadoperu.com'
      },
      {
        protocol:"https",
        hostname:'placehold.co'
      },
      {
        protocol:"https",
        hostname:'encrypted-tbn0.gstatic.com'
      },
      {
        protocol:"https",
        hostname:'carnesideal.tienda'
      },
      {
        protocol:'https',
        hostname:'www.recetasnestle.com.pe'
      },
      {
        protocol:'https',
        hostname:'st.depositphotos.com'
      }, 
      {
        protocol:'https',
        hostname:'example.com'
      }, 
      {
        protocol:'https',
        hostname:'**'
      }, 
    ],
  },
};

export default nextConfig;
