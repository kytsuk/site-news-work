import { SiteNewsPage } from './app.po';

describe('site-news App', () => {
  let page: SiteNewsPage;

  beforeEach(() => {
    page = new SiteNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
