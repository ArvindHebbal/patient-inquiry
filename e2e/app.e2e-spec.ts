import { PatientInquiryPage } from './app.po';

describe('patient-inquiry App', () => {
  let page: PatientInquiryPage;

  beforeEach(() => {
    page = new PatientInquiryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
