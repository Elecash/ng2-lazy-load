import { Ng2LazyLoadPage } from './app.po';

describe('ng2-lazy-load App', function() {
  let page: Ng2LazyLoadPage;

  beforeEach(() => {
    page = new Ng2LazyLoadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
