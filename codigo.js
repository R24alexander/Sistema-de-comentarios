
const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commentsContainer = document.querySelector("#comments-container");

input.classList.add("input");

input.addEventListener('keydown', e => {
    handleEnter(e, null);
});

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function handleEnter(e, current) {
    if(e.key === 'Enter' && e.target.value != ''){
        const newComment = {
            text: e.target.value,
            likes: 0,
            reponses: []
        }

        if (current === null){
            comments.unshift(newComment); //agreagamos al inicio
        }else {
            current.reponses.unshift(newComment);
        }

        e.target.value = '';
        commentsContainer.innerHTML = '';
        commentsContainer.appendChild(inputContainer);

        // console.log(comments);

        renderComments(comments, commentsContainer);
    }
}

function renderComments(arr, parent) {
    arr.forEach(element => {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');

        const responseContainer = document.createElement('div');
        responseContainer.classList.add('responses-container');

        const replyButton = document.createElement('button');
        const likeButton = document.createElement('button');

        const textContainer = document.createElement('div');
        textContainer.textContent = element.text;

        const actionsContainer = document.createElement('div');

        replyButton.textContent = 'Reply';
        likeButton.textContent = `${
            element.likes > 0 ? `${element.likes} likes` : "like"
        }`;

        replyButton.addEventListener('click', (e) => {
            const newInput = inputContainer.cloneNode(true);
            newInput.value = "";
            newInput.focus();
            newInput.addEventListener("keydown", (e) => {
                handleEnter(e, element);
            });
            commentContainer.insertBefore(newInput, responseContainer);
        });

        likeButton.addEventListener('click', (e) => {
            element.likes++;
            likeButton.textContent = `${
                element.likes > 0 ? `${element.likes} likes` : "like"
            }`;
        });

        // append
        commentContainer.appendChild(textContainer);
        commentContainer.appendChild(actionsContainer);
        actionsContainer.appendChild(replyButton);
        actionsContainer.appendChild(likeButton);

        commentContainer.appendChild(responseContainer);

        if (element.reponses.length > 0) {
            renderComments(element.reponses, responseContainer);
        }
        parent.appendChild(commentContainer);
    });

    console.log(comments);
}

