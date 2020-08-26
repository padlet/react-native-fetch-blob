module.exports = {
  dependency: {
    hooks: {
      prelink: 'node ./node_modules/react-native-fetch-blob/scripts/prelink.js',
    },
  },
};
