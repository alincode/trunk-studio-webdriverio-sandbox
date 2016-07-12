import FrontPage from '../pageobjects/front.page';
import GuidePage from '../pageobjects/guide.page';
import ApiPage from '../pageobjects/api.page';

describe('site map', () => {

  describe('front page', () => {
    it('title', () => {
      FrontPage.open();
      let title = $.getTitle();
      title.should.be.equal(FrontPage.content.title);
      $.saveScreenshot('./screenshot/front.png');
      FrontPage.subTitleElement.isExisting().should.be.equal(true);
      FrontPage.subTitleElement.getText().should.be.equal(FrontPage
        .content.subTitle);
    });

    it('subtitle', () => {
      FrontPage.open();
      let title = $.getTitle();
      title.should.be.equal(FrontPage.content.title);
      FrontPage.subTitleElement.isExisting().should.be.equal(true);
      FrontPage.subTitleElement.getText().should.be.equal(FrontPage
        .content.subTitle);
    });
  });

  it('guide page', () => {
    GuidePage.open();
    let title = $.getTitle();
    $.saveScreenshot('./screenshot/guide.png');
    title.should.be.equal(GuidePage.content.title);
  });

  it('api page', () => {
    ApiPage.open();
    let title = $.getTitle();
    $.saveScreenshot('./screenshot/api.png');
    title.should.be.equal(ApiPage.content.title);
  });

});
