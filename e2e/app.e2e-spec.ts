import { AngularSharedModulePage } from './app.po';

describe('angular-shared-module App', () => {
  let page: AngularSharedModulePage;

  beforeEach(() => {
    page = new AngularSharedModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
