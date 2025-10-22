const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    console.log('--- Post Titles ---');
    posts.forEach(post => console.log(post.title));
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

module.exports = fetchData;
