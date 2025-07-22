document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Fungsi untuk mengubah status sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        body.classList.toggle('overlay-active'); // Tambah/hapus class di body
    }

    // Tambahkan event listener ke tombol
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSidebar);
    }
    
    // Mulai dengan sidebar dalam keadaan diciutkan
    if (sidebar) {
        sidebar.classList.add('collapsed');
    }
});
