document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    // Fungsi untuk mengubah status sidebar
    function toggleSidebar() {
        // Kita hanya perlu mengubah class pada sidebar itu sendiri
        sidebar.classList.toggle('collapsed');
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
