import { Jeson114.Github.IoPage } from './app.po';

describe('jeson114.github.io App', () => {
  let page: Jeson114.Github.IoPage;

  beforeEach(() => {
    page = new Jeson114.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
