document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Fungsi untuk mengubah status sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        body.classList.toggle('sidebar-collapsed');
    }

    // Tambahkan event listener ke tombol
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleSidebar);
    }
});
