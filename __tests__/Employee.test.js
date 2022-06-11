const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should create a new employee with a name, id, email', () => {
        const employee = new Employee('Dev', 12345, 'email@email.com');

        expect(employee.getName()).toEqual('Dev');
        expect(employee.getId()).toEqual(12345);
        expect(employee.getEmail()).toEqual('email@email.com');
        expect(employee.getRole()).toEqual('Employee');
    })

});