// Ini adalah "database" sederhana kita untuk semua dataset
const allDatasets = {
    
    // Dataset untuk Pneumonia
    pneumonia: {
        images: [
            // GANTI DENGAN NAMA FILE ASLI ANDA
            "person100_bacteria_481.jpg",
            "person100_bacteria_480.jpg",
            "person100_bacteria_479.jpg",
            "person100_bacteria_477.jpg",
            "person100_bacteria_475.jpg",
            "person100_bacteria_478.jpg"
        ],
        // Path ke folder di GitHub
        basePath: "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/pneumonia-testing-versi1/"
    },

    // Dataset untuk Batu Ginjal
    kidneyStone: {
        images: [
            // GANTI DENGAN NAMA FILE ASLI ANDA UNTUK BATU GINJAL
            "nama_gambar_batu_ginjal_1.jpg",
            "nama_gambar_batu_ginjal_2.jpg",
            "nama_gambar_batu_ginjal_3.jpg",
            "nama_gambar_batu_ginjal_4.jpg",
            "nama_gambar_batu_ginjal_5.jpg"
        ],
        // Path ke folder di GitHub
        basePath: "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/"
    }

    // Anda bisa menambah dataset lain di sini di masa depan
};
