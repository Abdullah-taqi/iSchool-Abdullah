import { ISchoolPipe } from "./school.pipe";

describe('Test ISchoolPipe', () => {
    let ischoolpipe: ISchoolPipe;

    beforeEach(() => {
        console.log('beforeEach from ischoopipe was called.');
        ischoolpipe = new ISchoolPipe();
    });

    it('should check if the ischoolpipe is defined', () => {
        expect(ischoolpipe).toBeDefined();
    })

    it('should check if the ischoolpipe is working', () => {
        expect(ischoolpipe.transform('Rajesh', 'Hi')).toBe('Hi Rajesh');
    })
});