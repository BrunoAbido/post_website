"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
// criando um elemento de postagem no HTML
function createPostElement(post) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('card');
    var postLink = document.createElement('a');
    postLink.href = "post_details.html?id=".concat(post.id);
    postLink.classList.add('link');
    var postImage = document.createElement('img');
    postImage.src = post.imageUrl;
    postImage.classList.add('card_img');
    var postElementsDiv = document.createElement('div');
    postElementsDiv.classList.add('post_elements');
    var postTitle = document.createElement('h3');
    postTitle.classList.add('post_title');
    postTitle.textContent = post.title;
    var postText = document.createElement('p');
    postText.classList.add('text_post');
    postText.textContent = post.body;
    var expandText = document.createElement('p');
    expandText.classList.add('expand');
    expandText.textContent = 'Expand...';
    postElementsDiv.appendChild(postTitle);
    postElementsDiv.appendChild(postText);
    postElementsDiv.appendChild(expandText);
    postLink.appendChild(postImage);
    postLink.appendChild(postElementsDiv);
    postDiv.appendChild(postLink);
    return postDiv;
}
// Função para popular a seção de postagens no HTML
function populatePostSection() {
    var postSection = document.getElementById('postSection');
    if (!postSection)
        return;
    data_1.posts.forEach(function (post) {
        var postElement = createPostElement(post);
        postSection.appendChild(postElement);
    });
}
// Chama a função
populatePostSection();
