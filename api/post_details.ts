interface ComentsUsers {

    coments: {id: number,name: string, Email:string, text: string}[];
    postId: number;

}

interface Post {
    id: number;
    title: string;
    img: string;
    text: string;
  };

let ComentUsers: ComentsUsers[] = [
    {
        postId: 1,
        coments: [
            {
            id: 1,
            name: "Bruno Henrique",
            Email: "brunoabidi@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Lionel Messi",
            Email: "messi10a@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Maria Joana",
            Email: "mariajoana@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 4,
            name: "Andres Dalessandro",
            Email: "dale10@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            
        ],
        },

        {
        postId: 2,
        coments: [
            {
            id: 1,
            name: "Smith Jones",
            Email: "smithjoneso@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Taylor Williams",
            Email: "taylor44e@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Wilson",
            Email: "wilson@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ],
        },

        {
        postId: 3,
        coments: [
            {
            id: 1,
            name: "Thomas Brown",
            Email: "thomasbrown@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Roberts Johnson",
            Email: "robertsjohnson@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Dixon Evans",
            Email: "dixonevans@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ],
        },
        
        {
        postId: 4,
        coments: [
            {
            id: 1,
            name: "Pedro Carlos",
            Email: "aaliyah20023@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Luiz Henrique",
            Email: "luizgonzaga@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Gabriel Santos",
            Email: "joaonoel@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ],
        },

        {
        postId: 5,
        coments: [
            {
            id: 1,
            name: "Henrique Paulo",
            Email: "henriquepaulo@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Helena Maria",
            Email: "helenamaria@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "joaonoel",
            Email: "joaonoel@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ],
        },

        {
        postId: 6,
        coments: [
            {
            id: 1,
            name: "English Teacher",
            Email: "teacherenglish@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Luiz Eduardo",
            Email: "luizeduardo@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Paulo Victor",
            Email: "jpv@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
        ],
        },

        {
        postId: 7,
        coments: [
            {
            id: 1,
            name: "English Teacher",
            Email: "teacherenglish@gmail.com",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            }
        ]
        },

    ];

    const posts: Post[] = [
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


function renderPostDetails() {
    const urlParametros = new URLSearchParams(window.location.search);

    const id = urlParametros.get("id") as string;
    console.log(id); 

    const filterPostById = posts.find(

    (post) => post.id === parseInt(id, 10)
    );

    const RenderDetails = document.querySelector(".post_section");

    const renderComents = document.querySelector(".review_section");

    const FilterComents = ComentUsers.find(
    (post) => post.postId === filterPostById?.id
    );

    console.log({FilterComents})
    console.log({renderComents})

    if (filterPostById && RenderDetails) {
        RenderDetails.innerHTML = `
                <img src="../images/img_post_section.png" class="img_post_section">
        

                    <h1>${filterPostById.title}</h1>
        
                    <p class="text_section">${filterPostById.text}</p>

    
                `;
        }

    if (renderComents) {
        FilterComents?.coments.map((coment) => {
            const listComent = document.createElement("p");
            const hr = document.createElement("hr");
    
            console.log(coment);
    
            listComent.innerHTML = `
            <em>${coment.name}:  ${coment.Email}: </em> ${coment.text}   
            `;
    
            renderComents?.appendChild(listComent);
            renderComents?.appendChild(hr);
        });
    
    }

}



renderPostDetails()



