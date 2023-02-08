module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@talentprotocol/design-system, @talentprotocol/conf"],
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT
  }
};
