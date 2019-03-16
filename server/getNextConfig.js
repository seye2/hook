const getConfig = require('next/config').default;

const { publicRuntimeConfig } = getConfig();

module.exports = {
    publicRuntimeConfig,
}