export interface ComentsUsers {
    coments: { id: number; name: string; Email: string; body: string }[];
    postId: number;
}

export interface Post {
    id: number;
    title: string;
    img: string;
    body: string;
}

export const ComentUsers: ComentsUsers[] = [
    {
        postId: 1,
        coments: [
            {
            id: 1,
            name: "Bruno Henrique",
            Email: "brunoabidi@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Lionel Messi",
            Email: "messi10a@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Maria Joana",
            Email: "mariajoana@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 4,
            name: "Andres Dalessandro",
            Email: "dale10@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Taylor Williams",
            Email: "taylor44e@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Wilson",
            Email: "wilson@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Roberts Johnson",
            Email: "robertsjohnson@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Dixon Evans",
            Email: "dixonevans@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Luiz Henrique",
            Email: "luizgonzaga@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Gabriel Santos",
            Email: "joaonoel@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Helena Maria",
            Email: "helenamaria@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "joaonoel",
            Email: "joaonoel@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 2,
            name: "Luiz Eduardo",
            Email: "luizeduardo@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
            id: 3,
            name: "Paulo Victor",
            Email: "jpv@gmail.com",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
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
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            }
        ]
        },

    ];

export const posts: Post[] = [
    {
        id: 1,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
        id: 2,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
        id: 3,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
        id: 4,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
        id: 5,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
        id: 6,
        title: 'The future',
        img: 'images/post.png',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
      {
      id: 7,
      title: 'The future',
      img: 'images/post.png',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took...'
      },
    ];
