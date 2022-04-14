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
  
    it('should check for app to be defined', () => {
      console.log('1st Test was called.');
      expect(app).toBeDefined();
    });
  
    it('should check for title on app is defined', () => {
      console.log('2nd Test was called.');
      expect(app.title).toBeDefined();
    })
  
    it('should check for title on app is steps', () => {
      console.log('3rd Test was called.');
      expect(app.title).toBe('steps');
    })
  
    it('should check for title on app contains 5 characters', () => {
      console.log('4th Test was called.');
      expect(app.title.length).toBe(5);
    })
  });

  describe('Testing for UserAge', () => {
    beforeAll(() => {
      app = new AppComponent();
      console.log('Before All was Called');
    });

    it('Should check for userage to be defined', () => {
      expect(app.userage).toBeDefined();
    });

    it('Should check for userage to be 18', () => {
      expect(app.userage).toBe(18);
    });

    it('Should check for userage to be 19', () => {
      app.increaseAge();
      expect(app.userage).toBe(19);
    });

    afterEach(() => {
      app.userage = 18;
    })
  });
});