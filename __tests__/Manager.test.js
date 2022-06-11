const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create a manager employee with a name, id, email, officeNumber, role', () => {
        const manager = new Manager('Intern', 12345, 'email@email.com', 101);

        expect(manager.getName()).toEqual('Intern');
        expect(manager.getId()).toEqual(12345);
        expect(manager.getEmail()).toEqual('email@email.com');
        expect(manager.getOfficeNumber()).toEqual(101);
        expect(manager.getRole()).toEqual('Manager');
    })

});