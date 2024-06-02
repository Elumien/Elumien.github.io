document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('pokemoncenterImage').addEventListener('click', function() {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = 'media/PokemonCenter.jpg';  // Path to your full-sized image
    modalImage.alt = "The Pokémon Center with a giant pop-art style Pikachu statue";
    document.getElementById('imageModalLabel').innerText = this.alt;
  });

  document.getElementById('personalImage').addEventListener('click', function() {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = 'media/Personal.jpg';  // Path to your full-sized image
    modalImage.alt = "My personal collection including the first generation GameBoy games, two special edition Pikachu GameBoys and a Pikachu and Eevee plushie";
    document.getElementById('imageModalLabel').innerText = this.alt;
  });
});