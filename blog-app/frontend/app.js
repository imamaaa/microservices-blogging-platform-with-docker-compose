const baseUrl = "http://localhost:8000";

// Fetch and display all posts
document.addEventListener("DOMContentLoaded", fetchPosts);

function fetchPosts() {
    fetch(`${baseUrl}/posts`)
        .then(response => response.json())
        .then(posts => {
            const postsDiv = document.getElementById("posts");
            postsDiv.innerHTML = "";
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.innerHTML = `<h3>ID: ${post[0]}</h3><h3>${post[1]}</h3><p>${post[2]}</p>`;
                postsDiv.appendChild(postElement);
            });
        });
}

// Create a new post
document.getElementById("post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const newPost = { title, content };
    
    fetch(`${baseUrl}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        if (response.status === 201) {
            alert("Post created!");
            fetchPosts();  // Refresh the list of posts
            document.getElementById("post-form").reset();  // Clear the form
        }
    });
});

// Update an existing post
document.getElementById("update-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("update-id").value;
    const title = document.getElementById("update-title").value;
    const content = document.getElementById("update-content").value;

    const updatedPost = { title, content };

    fetch(`${baseUrl}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost)
    })
    .then(response => {
        if (response.status === 200) {
            alert("Post updated!");
            fetchPosts();  // Refresh the list of posts
            document.getElementById("update-form").reset();  // Clear the form
        }
    });
});

// Delete a post
document.getElementById("delete-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const id = document.getElementById("delete-id").value;

    fetch(`${baseUrl}/posts/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.status === 200) {
            alert("Post deleted!");
            fetchPosts();  // Refresh the list of posts
            document.getElementById("delete-form").reset();  // Clear the form
        }
    });
});
