document.addEventListener('DOMContentLoaded', function() {
    // "DATABASE" MINI KITA
    // Setiap item memiliki 'tags' untuk difilter
    const datasets = [
        {
            title: "Pneumonia Image Dataset (v1)",
            description: "Kumpulan 6 gambar X-Ray dada untuk pengujian awal deteksi pneumonia.",
            link: "pneumonia-details.html",
            tags: ["citra-medis", "x-ray", "pneumonia"]
        },
        {
            title: "Kidney Stone (CT Scan) Dataset",
            description: "Kumpulan gambar dari CT Scan untuk identifikasi dan analisis batu ginjal.",
            link: "batu-ginjal-details.html",
            tags: ["citra-medis", "ct-scan", "batu-ginjal"]
        },
        {
            title: "[PREMIUM] EEG Brain Signal",
            description: "Dataset eksklusif berisi sinyal EEG mentah untuk analisis aktivitas otak. Akses terbatas.",
            link: "login.html",
            tags: ["sinyal-medis", "eeg", "premium"]
        }
        // Tambahkan dataset baru di sini di masa depan
    ];

    const container = document.getElementById('dataset-list-container');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResultsMsg = document.querySelector('.no-results');

    let currentFilter = 'all';

    // Fungsi untuk menampilkan dataset berdasarkan data yang diberikan
    function displayDatasets(items) {
        container.innerHTML = ''; // Kosongkan kontainer
        if (items.length === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'dataset-card';
            
            // Membuat tag HTML dari array tags
            const tagsHTML = item.tags.map(tag => `<span>${tag.replace(/-/g, ' ')}</span>`).join('');

            card.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class="tags">${tagsHTML}</div>
                <a href="${item.link}" class="btn-card">${item.title.includes('[PREMIUM]') ? 'Dapatkan Akses' : 'Lihat Detail & Gambar'}</a>
            `;
            container.appendChild(card);
        });
    }

    // Fungsi untuk memfilter dan mencari
    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        let filteredItems = datasets.filter(item => {
            // Filter berdasarkan kategori
            const categoryMatch = currentFilter === 'all' || item.tags.includes(currentFilter);
            
            // Filter berdasarkan pencarian (mencari di judul atau deskripsi)
            const searchMatch = item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
            
            return categoryMatch && searchMatch;
        });
        
        displayDatasets(filteredItems);
    }

    // Event listener untuk tombol filter
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterAndSearch();
        });
    });

    // Event listener untuk search bar
    searchInput.addEventListener('input', filterAndSearch);

    // Tampilkan semua dataset saat halaman pertama kali dimuat
    displayDatasets(datasets);
});
