document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('detail-content');

    // 1. Membaca "Surat Undangan" (URL Parameter)
    const params = new URLSearchParams(window.location.search);
    const datasetId = params.get('id');

    // 2. Mencari "Tamu" di "Buku Tamu" (datasets)
    const dataset = window.datasets.find(d => d.id === datasetId);

    // 3. Membangun "Dekorasi Ruangan" (Konten Halaman)
    if (dataset) {
        // Mengubah judul tab browser
        document.title = `${dataset.title} - Paijo Willbig`;
        
        // Membuat tag HTML dari array tags
        const tagsHTML = dataset.tags.map(tag => `<span>${tag}</span>`).join('');
        
        // Membuat galeri gambar jika ada
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

        // Membangun seluruh konten halaman
        contentContainer.innerHTML = `
            <section class="dataset-detail">
                <h1>${dataset.title}</h1>
                <p>${dataset.long_description}</p>
                <div class="tags">${tagsHTML}</div>
                <a href="${dataset.zip_url}" class="btn">Download Full Dataset (.zip)</a>
            </section>
            ${galleryHTML}
        `;

        // 4. Mengaktifkan kembali Lightbox untuk gambar yang baru dibuat
        document.querySelectorAll('.lightbox-image').forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                basicLightbox.create(`<img src="${event.target.src}">`).show();
            });
        });

    } else {
        // Jika "Tamu" tidak ditemukan
        contentContainer.innerHTML = `
            <header class="content-header">
                <h1>Error 404: Dataset Tidak Ditemukan</h1>
                <p>Maaf, dataset yang Anda cari tidak ada. Silakan kembali ke halaman utama.</p>
                <a href="datasets.html" class="btn">Kembali ke Daftar Dataset</a>
            </header>
        `;
    }
});
