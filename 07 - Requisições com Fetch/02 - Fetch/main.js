fetch("https://api.github.com/search/repositories?q=javascript").then(
    (response) => response.json()
);
