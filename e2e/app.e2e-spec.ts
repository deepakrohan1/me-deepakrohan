import { MeDeepakrohanPage } from './app.po';

describe('me-deepakrohan App', () => {
  let page: MeDeepakrohanPage;

  beforeEach(() => {
    page = new MeDeepakrohanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
