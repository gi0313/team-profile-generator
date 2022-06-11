const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an engineer employee with a name, id, email, github, role', () => {
        const engineer = new Engineer('Engineer', 12345, 'email@email.com', 'gitHub');

        expect(engineer.getName()).toEqual('Engineer');
        expect(engineer.getId()).toEqual(12345);
        expect(engineer.getEmail()).toEqual('email@email.com');
        expect(engineer.getGithub()).toEqual('gitHub');
        expect(engineer.getRole()).toEqual('Engineer');
    })

});