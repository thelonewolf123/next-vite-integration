/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
            source: '/public/myfile.html',
            destination: '/pages/api/editor'
        }
    ],
    env: {
        PROJECT_ROOT: __dirname
    }
}

module.exports = nextConfig
