import { AppComponent } from './app.component';

describe('Testing AppComponent', () => {
  let app: AppComponent;

  describe('Testing Title', () => {
    beforeAll(() => {
      app = new AppComponent();
      console.log('Before All was called.');
    });
    beforeEach(() => {
      console.log('Before Eacch was called.');
    });
    afterEach(() => {
      console.log('After Each was called.');
    });
    afterAll(() => {
      console.log('After All was called.');
    });
  
    it('Should check for app to be defined', () => {
      console.log('1st Test was called.');
      expect(app).toBeDefined();
    });
  
    it('Should check for title on app is defined', () => {
      console.log('2nd Test was called.');
      expect(app.title).toBeDefined();
    })
  
    it('Should check for title on app is steps', () => {
      console.log('3rd Test was called.');
      expect(app.title).toBe('test-assignment');
    })
  
    it('Should check for title on app contains 15 characters', () => {
      console.log('4th Test was called.');
      expect(app.title.length).toBe(15);
    })
  });
});