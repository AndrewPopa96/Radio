/* eslint-disable quotes */
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/:path*'
        },
        {
            source: '/api/users/login',
            destination: 'http://localhost:5000/users/:path*'
          }
      ]
    }
  }