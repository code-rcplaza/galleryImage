export const getImgs = async (category) => {

    const url = `http://jsonplaceholder.typicode.com/${category}?_start=0&_limit=12`
    const response = await fetch(url)
    const data = await response.json()

    const imgs = data.map(element => {
      return {
        albumId: element.albumId,
        id: element.id,
        title: element.title,
        url: element.url,
        thumbnailUrl: element.thumbnailUrl,
      }
    })

    return imgs

}
