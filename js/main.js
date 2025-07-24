document.addEventListener('DOMContentLoaded', function() {
    const desktopToggleBtn = document.getElementById('desktop-toggle-btn');
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    const overlay = document.getElementById('overlay');

    // Fungsi untuk toggle sidebar di DESKTOP
    function toggleDesktopSidebar() {
        sidebar.classList.toggle('collapsed');
        body.classList.toggle('sidebar-collapsed');
    }

    // Fungsi untuk toggle sidebar di MOBILE
    function toggleMobileSidebar() {
        sidebar.classList.toggle('mobile-active');
        overlay.classList.toggle('active');
    }

    // Tambahkan event listener
    if (desktopToggleBtn) {
        desktopToggleBtn.addEventListener('click', toggleDesktopSidebar);
    }
    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', toggleMobileSidebar);
    }
    if (overlay) {
        overlay.addEventListener('click', toggleMobileSidebar); // Tutup saat klik overlay
    }
});
