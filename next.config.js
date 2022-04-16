/** @type {import('next').NextConfig} */
const path = require('path');
const withCSS = require('@zeit/next-css')
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['sezy-design']);
const { i18n } = require('./i18n.config')

module.exports = withPlugins([withTM], {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL ?? '',
    ACCESS_TOKEN_COOKIE: process.env.ACCESS_TOKEN_COOKIE ?? 'access_token',
  },
  i18n,
});