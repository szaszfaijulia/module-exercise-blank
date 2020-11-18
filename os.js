const os = require('os');

module.exports = {
  getOSData: () => ({
    platform: os.platform(),
    os: os.type() + " " + os.release(),
    arch: os.arch(),
    cpus: os.cpus().length,
    mem: {
      free: os.freemem() * Math.pow(10, -9),
      total: os.totalmem() * Math.pow(10, -9)
    }
  })
};