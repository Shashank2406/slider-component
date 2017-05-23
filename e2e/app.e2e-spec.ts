import { SlideAppPage } from './app.po';

describe('slide-app App', function() {
  let page: SlideAppPage;

  beforeEach(() => {
    page = new SlideAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
