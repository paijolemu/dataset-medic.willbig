document.addEventListener('DOMContentLoaded', function() {
    // "DATABASE" UTAMA KITA - SEKARANG LEBIH LENGKAP
    const datasets = [
        {
            id: "pneumonia-v1", // ID unik untuk URL
            title: "Pneumonia Image Dataset (v1)",
            description: "Kumpulan gambar X-Ray dada untuk deteksi pneumonia.",
            long_description: "Dataset awal kami untuk deteksi pneumonia, berisi 6 gambar X-Ray dada. Dataset ini sangat cocok untuk pengujian model awal atau untuk tujuan edukasi. Gambar telah dianonimkan dan siap digunakan.",
            link: "detail.html?id=pneumonia-v1", // Link baru ke template
            category: "citra-medis", // Kategori untuk filter
            tags: ["Citra Medis", "X-Ray", "Pneumonia"],
            zip_url: "https://raw.githack.com/paijolemu/dataset-medic.willbig/main/datasets/pneumonia-testing-versi1/testing.zip",
            images: [
                "person100_bacteria_481.jpg", "person100_bacteria_480.jpg", "person100_bacteria_479.jpg",
                "person100_bacteria_477.jpg", "person100_bacteria_475.jpg", "person100_bacteria_478.jpg"
            ],
            image_path: "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/pneumonia-testing-versi1/"
        },
        {
            id: "kidney-stone-v1",
            title: "Kidney Stone (CT Scan) Dataset",
            description: "Kumpulan gambar dari CT Scan untuk identifikasi dan analisis batu ginjal.",
            long_description: "Dataset ini berisi kumpulan gambar CT Scan untuk deteksi batu ginjal. Sangat berguna untuk melatih model klasifikasi atau segmentasi dalam pencitraan medis.",
            link: "detail.html?id=kidney-stone-v1",
            category: "citra-medis",
            tags: ["Citra Medis", "CT Scan", "Batu Ginjal", "Urologi"],
            zip_url: "https://raw.githack.com/paijolemu/dataset-medic.willbig/main/datasets/batu-ginjal-ct-v1/data%20batu%20ginjal.zip",
            images: [ // GANTI DENGAN NAMA FILE ANDA YANG BENAR
                "1-3-46-670589-33-1-63700780314615924400001-465650393585309726474_png_jpg.rf.d4e842e4f0d5ca66addcadd37aa3e49d.jpg",
                "1-3-46-670589-33-1-63703718086101119100001-4867318355234768205_png_jpg.rf.048e7b96df9b04ced19bff02cf2fb7af.jpg",
                "1-3-46-670589-33-1-63703718086140121300001-4751980723480797909_png_jpg.rf.4613088faec825a93a3e03e97ce46323.jpg",
                "1-3-46-670589-33-1-63703718086162122600001-5663486194805675763_png_jpg.rf.a4a19de71b774b45786c63f55a9a9016.jpg"
            ],
            image_path: "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/"
        },
        {
            id: "eeg-premium-v1",
            title: "[PREMIUM] EEG Brain Signal",
            description: "Dataset eksklusif berisi sinyal EEG mentah untuk analisis aktivitas otak. Akses terbatas.",
            link: "login.html", // Link premium tetap ke halaman login
            category: "sinyal-medis",
            tags: ["Sinyal Medis", "EEG", "Premium"]
        }
    ];

    // Sisa kode di bawah ini 99% sama, hanya ada sedikit perubahan pada pembuatan link
    const container = document.getElementById('dataset-list-container');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResultsMsg = document.querySelector('.no-results');

    let currentFilter = 'all';

    function displayDatasets(items) {
        if (!container) return; // Keluar jika bukan di halaman datasets
        container.innerHTML = ''; 
        if (items.length === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'dataset-card animated-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            const tagsHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');

            card.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <div class="tags">${tagsHTML}</div>
                <a href="${item.link}" class="btn-card">${item.title.includes('[PREMIUM]') ? 'Dapatkan Akses' : 'Lihat Detail'}</a>
            `;
            container.appendChild(card);
        });
    }

    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        let filteredItems = datasets.filter(item => {
            const categoryMatch = currentFilter === 'all' || item.category === currentFilter;
            const searchMatch = item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
            return categoryMatch && searchMatch;
        });
        
        displayDatasets(filteredItems);
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                filterAndSearch();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterAndSearch);
    }

    // Tampilkan semua dataset saat halaman dimuat
    displayDatasets(datasets);
});
