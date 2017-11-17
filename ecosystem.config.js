module.exports = {
  apps: [
    {
      name: 'io.chronobank.backend',
      cwd: './io.chronobank.backend',
      script: 'keystone.js',
      watch: true,
      env: {
        'PORT': 3000,
        'COOKIE_SECRET': 'dfcc1c155c0e392de21af2a94ac9c25e0c5833ba8a8e6e4f79a937b0995b31cd2a924c863de694b6a229be62920b10e6509b9ec85b7e7c0b99c3d34a244b965b',
        'CLOUDINARY_URL': 'cloudinary://535824645681574:s0SGkP29qSKSV5vn9hwwla_GCzY@duxucxxwd',
        'NODE_ENV': 'development',
        'MONGO_URI': 'mongodb://localhost:27017/backend-chronobank-io',
        'SOLR_URI': 'http://solr.chronobank.tp.ntr1x.com/solr/io-chronobank'
      },
      env_production: {
        'PORT': 3010,
        'COOKIE_SECRET': 'dfcc1c155c0e392de21af2a94ac9c25e0c5833ba8a8e6e4f79a937b0995b31cd2a924c863de694b6a229be62920b10e6509b9ec85b7e7c0b99c3d34a244b965b',
        'CLOUDINARY_URL': 'cloudinary://535824645681574:s0SGkP29qSKSV5vn9hwwla_GCzY@duxucxxwd',
        'NODE_ENV': 'production',
        'MONGO_URI': 'mongodb://localhost:27017/backend-chronobank-io',
        'SOLR_URI': 'http://solr.chronobank.tp.ntr1x.com/solr/io-chronobank'
      }
    },
    {
      name: 'io.chronobank.web',
      cwd: './io.chronobank.web',
      script: 'server.js',
      watch: true,
      env: {
        'PORT': 3001,
        'NODE_ENV': 'development'
      },
      env_production: {
        'PORT': 3011,
        'NODE_ENV': 'production'
      }
    }
  ]
}
