  // Obtén el formulario y la sección de comentarios
  const commentForm = document.getElementById('commentForm');
  const commentInput = document.getElementById('commentInput');
  const commentsSection = document.getElementById('commentsSection');

  // Función para agregar un comentario
  function addComment(commentText) {
      // Obtener la fecha y hora actual
      const now = new Date();
      const date = now.toLocaleString();

      // Crear un nuevo contenedor de comentario
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');

      // Crear el contenido del comentario
      commentDiv.innerHTML = `
          <p>${commentText}</p>
          <p class="date">Publicado el: ${date}</p>
          <button onclick="deleteComment(this)">Eliminar</button>
      `;

      // Añadir el comentario a la sección de comentarios
      commentsSection.appendChild(commentDiv);
  }

  // Función para eliminar un comentario
  function deleteComment(button) {
      const commentDiv = button.parentElement;
      commentsSection.removeChild(commentDiv);
  }

  // Manejar el evento de envío del formulario
  commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      // Obtener el texto del comentario
      const commentText = commentInput.value.trim();

      // Si el comentario no está vacío, agregarlo
      if (commentText) {
          addComment(commentText);
      }

      // Limpiar el campo de texto
      commentInput.value = '';
  });