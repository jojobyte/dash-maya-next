/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@dashincubator/secp256k1', 'dashkeys'],
}

module.exports = nextConfig;
