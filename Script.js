fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('cards-container');

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3 style="color: ${post.corTitulo}">${post.titulo}</h3>
        <p style="color: ${post.corDescricao}">${post.descricao}</p>
        <div class="card-content">${post.detalhes}</div>
      `;

      card.addEventListener('click', () => {
        card.classList.toggle('open');
      });

      container.appendChild(card);
    });
  });
