import { ComentUsers, Post, posts } from './data';


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
        
                    <p class="text_section">${filterPostById.body}</p>

    
                `;
        }

    if (renderComents) {
        FilterComents?.coments.map((coment) => {
            const listComent = document.createElement("p");
            const hr = document.createElement("hr");
    
            console.log(coment);
    
            listComent.innerHTML = `
            <em>${coment.name}:  ${coment.Email}: </em> ${coment.body}   
            `;
    
            renderComents?.appendChild(listComent);
            renderComents?.appendChild(hr);
        });
    
    }

}



renderPostDetails()



