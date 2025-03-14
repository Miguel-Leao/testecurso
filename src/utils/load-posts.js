export const loadPosts = async () => {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        const photosResponse = await fetch('./output[1].json')
    
        const [ posts, photos ] = await Promise.all([postsResponse, photosResponse]);
    
        const postsJson = await posts.json();
        const photosJson = await photos.json();
    
        const postsAndPhotos = postsJson.map((post, index) => {
          return { ...post, cover: photosJson[index]?.url }
        });
    
    return postsAndPhotos;
}