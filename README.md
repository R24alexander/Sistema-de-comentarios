# **Sistema de comentarios**

Con este programa podemos realizar comentarios y realizar una replica, generar me gusta - (like) según lo sienta.

### Herramientas

- HTML
- CSS
- JAVASCRIPT
- FIGMA
- TRELLO

### Programa - sistema comentarios

![Sistema de comentarios](https://gcdnb.pbrd.co/images/6lzPi8dOfjmh.png?o=1)

### Código

```Js
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
```

_Podemos organizar jerárquicamente este sistema para que la visualización sea agradable al usuario_
