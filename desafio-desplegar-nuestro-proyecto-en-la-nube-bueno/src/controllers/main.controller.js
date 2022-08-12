const args = require('../services/args')
const os = require('os')
const logger = require('../services/logger')

class MainController {
  index(req, res) {
    const { user } = req
    res.render('index', { user })
  }

  info(req, res) {
    const info = {
      args: JSON.stringify(args, null, 2),
      execPath: process.execPath,
      platform: process.platform,
      pid: process.pid,
      version: process.version,
      projectPath: process.cwd(),
      rss: JSON.stringify(process.memoryUsage(), null, 2),
      cpus: os.cpus().length
    }
    
    if (req.query.console) {
      logger.log({ label: 'main-controller', message: JSON.stringify(info, null, 2) })
    }

    res.render('info', { info })
  }

  randoms(req, res) {
    const quantity = req.query.cant || 100000000
    const min = 1
    const max = 1000

    let randoms = {}

    for (let i = 0; i < quantity; i++) {
      const number = Math.floor(Math.random() * (max - min) + min)

      if (number in randoms) {
        randoms[number] += 1
      }
      else {
        randoms[number] = 1
      }
    }

    res.send(randoms)
  }
}

module.exports = new MainController()