const ObjectHelper = require('./../../../../src/common/helpers/ObjectHelper');

describe('ObjectHelper', () => {
    let sut;

    beforeEach(() => {
        sut = ObjectHelper;
    });

    it('should be defined', () => {
        expect(sut).to.be.exist;
    });

    describe('on isContains', () => {
        let objectArray;
        let object;

        beforeEach(() => {
            objectArray = [{ name: 'mockName', surname: 'mockSurname' }, {}];
            object = { name: 'mockName', year: '1234' };
        });

        it('should contains  object by certain property', () => {
            expect(sut.isContains(objectArray, object, 'name')).to.be.true;
        });

        it('should not contains object by certain property', () => {
            expect(sut.isContains(objectArray, object, 'year')).to.be.false;
        });

        it('should not contains object by certain property if object property undefined', () => {
            expect(sut.isContains(objectArray, object, 'surname')).to.be.false;
        });
    });

    describe('on uniqBy', () => {
        let objectArray;

        beforeEach(() => {
            objectArray = [
                { name: 'mockName', surname: 'mockSurname', datasource: { title: 'try' } },
                { name: 'mockName1', surname: 'mockSurname', datasource: { title: 'try' } },
                { name: 'mockName', surname: 'mockSurname', datasource: { title: 'try' } },
                { name: 'mockName', datasource: { title: 'try' } },
                { name: 'mockName', datasource: { title: 'try' } },
            ];
        });

        it('should contains  uniq objects by certain property', () => {
            expect(sut.uniqBy(objectArray, 'name').length).to.be.eql(2);
        });

        it('should contains  uniq objects by certain property if undefined', () => {
            expect(sut.uniqBy(objectArray, 'surname').length).to.be.eql(3);
        });

        it('should contains all array if pass unexisting property', () => {
            expect(sut.uniqBy(objectArray, 'year').length).to.be.eql(5);
        });
    });

    describe('on indexOfByField', () => {
        let objectArray;
        let object;

        beforeEach(() => {
            object = { name: 'mockName', year: '000' };
            objectArray = [
                { name: 'mockName', surname: 'mockSurname' },
                { name: 'mockName1', surname: 'mockSurname' },
                { name: 'mockName', surname: 'mockSurname' },
                { name: 'mockName' },
                { name: 'mockName' },
            ];
        });

        it('should return object index in array', () => {
            expect(sut.indexOfByField(objectArray, object, 'name')).to.be.eql(0);
        });

        it('should return -1 if array does not contain object', () => {
            expect(sut.indexOfByField(objectArray, object, 'year')).to.be.eql(-1);
        });
    });

    describe('on isObjectEqualByField', () => {
        let obj1;
        let obj2;

        beforeEach(() => {
            obj1 = { name: 'mockName', year: '000' };
            obj2 = { name: 'mockName', surname: 'mockSurname' };
        });

        it('should objects be equal by provided property', () => {
            expect(sut.isObjectEqualByField(obj1, obj2, 'name')).to.be.true;
        });

        it('should not objects be equal by provided property', () => {
            expect(sut.isObjectEqualByField(obj1, obj2, 'year')).to.be.false;
        });
    });
});
