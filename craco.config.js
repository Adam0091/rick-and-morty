const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components/'),
      "@containers": path.resolve(__dirname, 'src/containers/'),
      "@constants": path.resolve(__dirname, 'src/constants/'),
      "@routes": path.resolve(__dirname, 'src/routes/'),
      "@utils": path.resolve(__dirname, 'src/utils/'),
      "@types": path.resolve(__dirname, 'src/types/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
      "@UI-Kit": path.resolve(__dirname, 'src/components/UI-Kit/')
    },
  },
};