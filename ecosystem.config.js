module.exports = {
  apps: [
    {
      name: 'migroup_frontend',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production'
      },
    },    
  ],
};
