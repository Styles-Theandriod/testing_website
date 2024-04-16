document.getElementById("fetch-posts").addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var posts = JSON.parse(xhr.responseText);
      var postsList = document.getElementById("posts-list");
      postsList.innerHTML = ""; // Clear existing posts
      posts.forEach(function(post) {
        var listItem = document.createElement("li");
        listItem.textContent = post.title;
        postsList.appendChild(listItem);
      });
    } else if (xhr.readyState === 4) {
      console.error("Error fetching posts. Status code: " + xhr.status);
    }
  };
  xhr.send();
});