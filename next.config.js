/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: 'images.unsplash.com', 
                //enter the website ur getting images from
            }
        ]
    }
}

module.exports = nextConfig
