document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements
    const sidebar = document.getElementById('sidebar');
    const contentWrapper = document.getElementById('content-wrapper');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('.menu-item');

    // Function to toggle sidebar (minimize/maximize)
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        contentWrapper.classList.toggle('expanded');

        // Change toggle button icon
        const toggleIcon = sidebarToggle.querySelector('i');
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.replace('bi-chevron-left', 'bi-chevron-right');
        } else {
            toggleIcon.classList.replace('bi-chevron-right', 'bi-chevron-left');
        }

        // Save state to localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    }

    // Apply saved state on page load
    function applySavedState() {
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';

        if (isCollapsed) {
            sidebar.classList.add('collapsed');
            contentWrapper.classList.add('expanded');

            // Update toggle icon
            const toggleIcon = sidebarToggle.querySelector('i');
            toggleIcon.classList.replace('bi-chevron-left', 'bi-chevron-right');
        }
    }

    // Toggle sidebar on button click
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // Handle mobile sidebar
    function createMobileToggle() {
        // Check if mobile toggle already exists
        if (!document.getElementById('mobile-toggle')) {
            const mobileBtn = document.createElement('button');
            mobileBtn.id = 'mobile-toggle';
            mobileBtn.className = 'mobile-menu-btn d-lg-none';
            mobileBtn.innerHTML = '<i class="bi bi-list"></i>';
            document.body.appendChild(mobileBtn);

            // Add event listener to new button
            mobileBtn.addEventListener('click', function () {
                sidebar.classList.add('show');
                overlay.classList.add('active');
            });
        }
    }

    // Close mobile sidebar when clicking on overlay
    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.remove('show');
            overlay.classList.remove('active');
        });
    }

    // Add resize listener to handle responsive behavior
    function handleResize() {
        if (window.innerWidth < 992) {
            sidebar.classList.remove('collapsed');
            contentWrapper.classList.remove('expanded');

            // Force mobile layout
            sidebar.classList.remove('show');
            overlay.classList.remove('active');

            // Ensure mobile toggle exists
            createMobileToggle();
        } else {
            // Apply saved state for desktop
            applySavedState();
        }
    }

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Initialize
    createMobileToggle();
    handleResize(); // Apply initial state based on screen size
});