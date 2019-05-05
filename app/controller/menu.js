const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    this.ctx.json = {
      "a": 1
    };
  }
}

module.exports = MenuController;