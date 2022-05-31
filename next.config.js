/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  },
  env:{
    ApiKey: 'fd50808cd2msh37b77e9e84f90fap186a56jsn6d3903875962',
  }
}

module.exports = nextConfig
