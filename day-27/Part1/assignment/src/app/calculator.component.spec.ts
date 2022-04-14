import { CalculatorComponent } from './calculator.component';

describe('Testing CalculatorComponent', () => {
  let calculator: CalculatorComponent;

  describe('Testing Add operation', () => {
    beforeAll(() => {
      calculator = new CalculatorComponent();
      console.log('Before All was called.');
    });
    beforeEach(() => {
      console.log('Before Each was called.');
    });
    afterEach(() => {
      console.log('After Each was called.');
    });
    afterAll(() => {
      console.log('After All was called.');
    });
  
    it('Should check for calculator to be defined', () => {
      expect(calculator).toBeDefined();
    });
  
    it('Should check for add to be defined', () => {
      expect(calculator.add).toBeDefined();
    });
  
    it('Should check for add operation to work properly', () => {
      expect(calculator.add(4, 5)).toBe(9);
    });
  });

  describe('Testing Subtraction Operation', () => {
    beforeAll(() => {
      calculator = new CalculatorComponent();
    });
  
    it('should check for subtraction to be defined', () => {
      expect(calculator.subtraction).toBeDefined();
    });
  
    it('should check for subtraction operation to work correctly', () => {
      expect(calculator.subtraction(15, 5)).toBe(10);
    });
  });

  describe('Testing Multiply Operation', () => {
    beforeAll(() => {
      calculator = new CalculatorComponent();
    });
  
    it('should check for multiply to be defined', () => {
      expect(calculator.multiply).toBeDefined();
    });
  
    it('should check for multiply operation to work correctly', () => {
      expect(calculator.multiply(1, 5)).toBe(5);
    });
  });

  describe('Testing DIV Operation', () => {
    beforeAll(() => {
      calculator = new CalculatorComponent();
    });
  
    it('should check for div to be defined', () => {
      expect(calculator.add).toBeDefined();
    });
  
    it('should check for div operation to work correctly', () => {
      expect(calculator.div(10, 5)).toBe(2);
    });
  });
});