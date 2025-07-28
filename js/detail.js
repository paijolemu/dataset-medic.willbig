document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('detail-content');

    // 1. Membaca "Surat Undangan" (URL Parameter)
    const params = new URLSearchParams(window.location.search);
    const datasetId = params.get('id');

    // 2. Mencari "Tamu" di "Buku Tamu" (datasets dari file filter.js)
    // Kita panggil langsung dari variabel global 'datasets'
    const dataset = window.datasets.find(d => d.id === datasetId);

    // 3. Membangun "Dekorasi Ruangan" (Konten Halaman)
    if (dataset) {
        document.title = `${dataset.title} - Paijo Willbig`;
        
        const tagsHTML = dataset.tags.map(tag => `<span>${tag}</span>`).join('');
        
        let galleryHTML = '';
        if (dataset.images && dataset.image_path) {
            const imagesHTML = dataset.images.map((img, index) => 
                `<img src="${dataset.image_path}${img}?raw=true" alt="Preview ${index + 1}" class="lightbox-image" oncontextmenu="return false;">`
            ).join('');

            galleryHTML = `
                <section class="image-preview">
                    <h2>Preview Gambar</h2>
                    <div class="preview-grid">${imagesHTML}</div>
                </section>
            `;
        }

        contentContainer.innerHTML = `
            <section class="dataset-detail">
                <h1>${dataset.title}</h1>
                <p>${dataset.long_description}</p>
                <div class="tags">${tagsHTML}</div>
                <a href="${dataset.zip_url}" class="btn">Download Full Dataset (.zip)</a>
            </section>
            ${galleryHTML}
            <footer>
                <div class="footer-content">
                    <p>© 2025 Paijo Willbig. Dibuat dengan semangat untuk memajukan riset kesehatan.</p>
                    <div class="footer-links">
                        <a href="https://github.com/paijolemu/dataset-medic.willbig" target="_blank" title="Kode Sumber di GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </footer>
        `;

        // 4. Mengaktifkan kembali Lightbox
        document.querySelectorAll('.lightbox-image').forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                basicLightbox.create(`<img src="${event.target.src}">`).show();
            });
        });

    } else {
        contentContainer.innerHTML = `
            <header class="content-header">
                <h1>Error 404: Dataset Tidak Ditemukan</h1>
                <p>Maaf, dataset yang Anda cari tidak ada atau ID-nya salah. Silakan kembali ke halaman utama.</p>
                <a href="datasets.html" class="btn">Kembali ke Daftar Dataset</a>
            </header>
        `;
    }
});
