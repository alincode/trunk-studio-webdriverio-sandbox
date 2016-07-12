import Page from './page';

let APIPage = Object.create(Page, {
  content: {
    get: () => {
      return {
        title: 'WebdriverIO - API Docs'
      };
    }
  },
  open: {
    value: () => {
      Page.open.call(this, 'api.html');
    }
  }
});

module.exports = APIPage;
