import { LicenseplatesPage } from './app.po';

describe('licenseplates App', function() {
  let page: LicenseplatesPage;

  beforeEach(() => {
    page = new LicenseplatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
