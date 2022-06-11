const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an intern employee with a name, id, email, school, role', () => {
        const intern = new Intern('Intern', 12345, 'email@email.com', 'School');

        expect(intern.getName()).toEqual('Intern');
        expect(intern.getId()).toEqual(12345);
        expect(intern.getEmail()).toEqual('email@email.com');
        expect(intern.getSchool()).toEqual('School');
        expect(intern.getRole()).toEqual('Intern');
    })

});