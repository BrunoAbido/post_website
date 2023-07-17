import { posts, comments } from './data';
import { Post } from './data';

// criando um elemento de postagem no HTML
function createPostElement(post: Post): HTMLElement {
  const postDiv = document.createElement('div');
  postDiv.classList.add('card');

  const postLink = document.createElement('a');
  postLink.href = `post_details.html?id=${post.id}`;
  postLink.classList.add('link');

  const postImage = document.createElement('img');
  postImage.src = post.imageUrl;
  postImage.classList.add('card_img');

  const postElementsDiv = document.createElement('div');
  postElementsDiv.classList.add('post_elements');

  const postTitle = document.createElement('h3');
  postTitle.classList.add('post_title');
  postTitle.textContent = post.title;

  const postText = document.createElement('p');
  postText.classList.add('text_post');
  postText.textContent = post.body;

  const expandText = document.createElement('p');
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
  const postSection = document.getElementById('postSection');
  if (!postSection) return;

  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postSection.appendChild(postElement);
  });
}

// Chama a função
populatePostSection();
