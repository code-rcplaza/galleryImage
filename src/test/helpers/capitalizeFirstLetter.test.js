const { capitalizeFirstLetter } = require("../../helpers/capitalizeFirstLetter");

describe('Test on getGifs Fetch', () => {
    
    test('Should be capitalize de first letter', (  ) => {
        const simple = 'capitalized'
        const capitalized = capitalizeFirstLetter(simple)
        
        expect( capitalized ).toBe( 'Capitalized')
    });
})