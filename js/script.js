function toggleMenu() {
    var links = document.getElementById('nav-links');
    if (links.style.display === "flex" || links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
      links.style.flexDirection = "column";
    }
  }
  
  function addToFavorites() {
    var btn = document.getElementById('favBtn');
    btn.classList.toggle('favorited');
    btn.textContent = btn.classList.contains('favorited') ? "Favorilere Eklendi" : "Favorilere Ekle";
  }
  
  function toggleFavorite(starElement) {
    // Check current source
    var currentSrc = starElement.src;
    
    // Toggle between silver and gold star
    if (currentSrc.includes('silver-star-icon.png')) {
      starElement.src = './src/icons/gold-star-icon.png';
    } else {
      starElement.src = './src/icons/silver-star-icon.png';
    }
  }