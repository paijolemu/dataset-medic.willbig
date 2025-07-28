// ======================================================
//              DATABASE UTAMA PROYEK ANDA
// ======================================================
// Untuk menambah dataset baru, cukup tambahkan satu objek baru di dalam array ini.

const datasets = [
    {
        id: "pneumonia-v1",
        title: "Pneumonia Image Dataset (v1)",
        description: "Kumpulan gambar X-Ray dada untuk deteksi pneumonia.",
        long_description: "Dataset awal kami untuk deteksi pneumonia, berisi 6 gambar X-Ray dada. Sangat cocok untuk pengujian model awal atau tujuan edukasi. Gambar telah dianonimkan dan siap digunakan.",
        category: "citra-medis",
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
        long_description: "Dataset ini berisi kumpulan gambar CT Scan untuk deteksi batu ginjal. Berguna untuk melatih model klasifikasi atau segmentasi dalam pencitraan medis.",
        category: "citra-medis",
        tags: ["Citra Medis", "CT Scan", "Batu Ginjal", "Urologi"],
        zip_url: "https://raw.githack.com/paijolemu/dataset-medic.willbig/main/datasets/batu-ginjal-ct-v1/data%20batu%20ginjal.zip",
        images: [
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
        link_special: "login.html", // Link khusus, bukan ke halaman detail
        category: "sinyal-medis",
        tags: ["Sinyal Medis", "EEG", "Premium"]
    }
];
