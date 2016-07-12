import Page from './page';

let GuidePage = Object.create(Page, {
  content: {
    get: () => {
      return {
        title: 'WebdriverIO - Developer Guide'
      };
    }
  },
  open: {
    value: () => {
      Page.open.call(this, 'guide.html');
    }
  }

});

module.exports = GuidePage;
