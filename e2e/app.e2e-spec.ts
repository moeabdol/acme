import { AngularAcmeTutorialPage } from './app.po';

describe('angular-acme-tutorial App', () => {
  let page: AngularAcmeTutorialPage;

  beforeEach(() => {
    page = new AngularAcmeTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
