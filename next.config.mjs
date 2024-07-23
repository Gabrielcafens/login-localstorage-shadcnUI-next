/** @type {import('next').NextConfig} */
const nextConfig = {env:{
    TEST_USER_EMAIL: process.env.TEST_USER_EMAIL,
    TEST_USER_PASSWORD: process.env.TEST_USER_PASSWORD
}};

export default nextConfig;
