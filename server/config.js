exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'http://localhost:7778'
: 'http://localhost:3000'