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
            "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/1-3-46-670589-33-1-63700780314615924400001-4656503585389726474_png_jpg.rf.d4e842e4f0d5ca66addcadd37aa3e49d.jpg?raw=true",
            "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/1-3-46-670589-33-1-63703718086101119100001-4867318355234768205_png_jpg.rf.048e7b96df9b04ced19bff02cf2fb7af.jpg?raw=true",
            "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/1-3-46-670589-33-1-63703718086140121300001-4751980723480797909_png_jpg.rf.4613088faec825a93a3e03e97ce46323.jpg?raw=true",
            "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/1-3-46-670589-33-1-63703718086162122600001-5663486194805675763_png_jpg.rf.a4a19de71b774b45786c63f55a9a9016.jpg?raw=true",
            "nama_gambar_batu_ginjal_5.jpg"
        ],
        // Path ke folder di GitHub
        basePath: "https://github.com/paijolemu/dataset-medic.willbig/blob/main/datasets/batu-ginjal-ct-v1/"
    }

    // Anda bisa menambah dataset lain di sini di masa depan
};
