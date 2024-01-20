const postsContainer = document.getElementById('posts-container');

// Fetch posts from JSONPlaceholder API
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return data;
}

// Display posts on the page
function displayPosts(posts) {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Fetch and display posts
fetchPosts().then(posts => displayPosts(posts));