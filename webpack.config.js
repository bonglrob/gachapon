module.exports = {
    assetPrefix: '',
    basePath: '',
    module: {
      rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
            type: 'asset/resource',
        },
      ],
    },
  };