document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('dataset-list-container');
    if (!container) return; // Hanya jalankan jika kita di halaman datasets.html
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResultsMsg = document.querySelector('.no-results');
    let currentFilter = 'all';

    function displayDatasets(items) {
        container.innerHTML = '';
        noResultsMsg.style.display = items.length === 0 ? 'block' : 'none';
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'dataset-card animated-card';
            card.style.animationDelay = `${index * 0.1}s`;
            const tagsHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
            
            // Tentukan link dan teks tombol berdasarkan item
            const link = item.link_special ? item.link_special : `detail.html?id=${item.id}`;
            const buttonText = item.tags.includes('Premium') ? 'Dapatkan Akses' : 'Lihat Detail';

            card.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class.
