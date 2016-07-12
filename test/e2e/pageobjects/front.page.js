import Page from './page';

let FrontPage = Object.create(Page, {
  content: {
    get: () => {
      return {
        title: 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs',
        subTitle: 'Selenium 2.0 bindings for NodeJS'
      };
    }
  },

  open: {
    value: () => {
      Page.open.call(this, '');
    }
  },

  /* define elements */
  subTitleElement: {
    get: () => {
      return $.element('h2');
    }
  }
});

module.exports = FrontPage;
