const util = require('../util');

class Site {
  constructor () {
    this.name = 'BitPorn';
    this.url = 'https://bitporn.eu/';
  };

  async getInfo () {
    const info = {};
    const document = await this._getDocument(this.index, false, 10);
    // 用户名
    info.username = document.querySelector('.top-nav__icon-bar > li.top-nav__dropdown > ul > li:nth-child(1) > a > span').textContent.trim();
    // uid
    info.uid = +document.querySelector('.blocks__top-torrents').getAttribute('wire:snapshot').match(/"key":\s*(\d+)/)[1];
    // 上传
    info.upload = document.querySelector('.ratio-bar__uploaded > a').textContent.trim();
    info.upload = util.calSize(...info.upload.split(/\s+/));
    // 下载
    info.download = document.querySelector('.ratio-bar__downloaded > a').textContent.trim();
    info.download = util.calSize(...info.download.split(/\s+/));
    // 做种
    info.seeding = +document.querySelector('.ratio-bar__seeding > a').textContent.trim();
    // 下载
    info.leeching = +document.querySelector('.ratio-bar__leeching > a').textContent.trim();
    return info;
  };
};
module.exports = Site;
