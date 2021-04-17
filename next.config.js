
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['s3BPJZUw9ZnZZkTDsygyJa'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  