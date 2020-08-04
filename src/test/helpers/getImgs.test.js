const { getImgs } = require("../../helpers/getImgs");

describe('Test on getGifs Fetch', () => {
    
    test('12 elements in images array', async (  ) => {
        const imgs = await getImgs('photos')
        
        expect(imgs.length).toBe(12)
    });
})