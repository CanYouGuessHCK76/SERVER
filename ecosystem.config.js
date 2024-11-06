module.exports = {
  apps: [{
    name: "www",
    script: "bin/www",
    env: {
      "PORT": 80,
      "NODE_ENV": "production",
    }
  }]
}
