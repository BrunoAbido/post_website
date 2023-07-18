interface PostCard {
  id: number;
  title: string;
  img: string;
  text: string;
};

function rendering (){
  const posts: PostCard[] = [
    {
      id: 1,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 2,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 3,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 4,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 5,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 6,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
      id: 7,
      title: 'The future',
      img: 'images/post.png',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
    },
  ];
  const getdados = document.querySelector(".card_post")
    if (getdados) {
      getdados.innerHTML = "";
      

      posts.map((postcard) => {
        const postcardIten=document.createElement("div");
        postcardIten.className="card";
        postcardIten.innerHTML=`
        <a href="post_details.html?id=${postcard.id}" class="link">
        <img src="${postcard.img}" class="card_img"/>
        <div class="post_elements">
          <h3 class="post_title">${postcard.title}</h3>
          <p class="text_post">
            ${postcard.text}
          </p>
          <p class="expand">Expand...</p> 
        </div>
        </a> `;
        getdados.appendChild(postcardIten);
       
      });
    }
}

rendering();



