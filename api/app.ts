import { posts } from './data';

function rendering() {
  const getdados = document.querySelector(".card_post");
  if (getdados) {
    getdados.innerHTML = "";

    posts.map((postcard) => {
      const postcardIten = document.createElement("div");
      postcardIten.className = "card";
      postcardIten.innerHTML = `
        <a href="post_details.html?id=${postcard.id}" class="link">
          <img src="${postcard.img}" class="card_img"/>
          <div class="post_elements">
            <h3 class="post_title">${postcard.title}</h3>
            <p class="text_post">
              ${postcard.body}
            </p>
            <p class="expand">Expand...</p> 
          </div>
        </a> `;
      getdados.appendChild(postcardIten);
    });
  }
}

rendering();
