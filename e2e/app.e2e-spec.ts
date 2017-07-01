import { LegendaryCheckPage } from './app.po';

describe('legendary-check App', () => {
  let page: LegendaryCheckPage;

  beforeEach(() => {
    page = new LegendaryCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
