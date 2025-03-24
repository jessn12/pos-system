
        $(document).ready(function () {
            // Enable tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });

        // Setup form validation
        (function () {
            'use strict'
                var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
            })();

        // Image preview for add form
        $('#imageFile').change(function() {
            readURL(this, '#imagePreview', '#imagePreviewContainer');
            });

        // Image preview for edit form
        $('#editImageFile').change(function() {
            readURL(this, '#currentImage');
            });

        // Search functionality
        $("#searchInventory").on("keyup", function() {
                var value = $(this).val().toLowerCase();
        $("#inventoryTable tr.item-row").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
            });

        // Sorting functionality
        $("#sortName").click(function() {
            sortTable(1, 'text');
        toggleSortIcon(this);
            });

        $("#sortPrice").click(function() {
            sortTable(2, 'price');
        toggleSortIcon(this);
            });

        // Setup edit modal data
        $('#editItemModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
        var id = button.data('id');
        var name = button.data('name');
        var price = button.data('price');
        var description = button.data('description');
        var image = button.data('image');

        $('#editId').val(id);
        $('#editName').val(name);
        $('#editPrice').val(price);
        $('#editDescription').val(description);
        $('#currentImage').attr('src', image);

        // Adding animation
        $('#currentImage').hide().fadeIn(500);
            });

        // Setup delete confirmation
        window.confirmDelete = function(id) {
            $('#deleteItemId').val(id);
        $('#deleteConfirmModal').modal('show');
            };

        // Row hover effect
        $("tr.item-row").hover(
        function() {
            $(this).addClass('bg-light');
                },
        function() {
            $(this).removeClass('bg-light');
                }
        );

        // Animation for buttons
        $(".edit-btn, .delete-btn").hover(
        function() {
            $(this).addClass('shadow-sm');
                },
        function() {
            $(this).removeClass('shadow-sm');
                }
        );

        // Success toast after form submission (simulated)
        var successToast = new bootstrap.Toast(document.getElementById('successToast'), {
            delay: 3000
            });

        // Helper function for image preview
        function readURL(input, previewId, containerId) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

        reader.onload = function(e) {
            $(previewId).attr('src', e.target.result);
        if(containerId) {
            $(containerId).fadeIn(500);
                        }
                    }

        reader.readAsDataURL(input.files[0]);
                }
            }

        // Table sorting function
        function sortTable(n, type) {
                var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("inventoryTable");
        switching = true;
        dir = "asc";

        while (switching) {
            switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
                            if (type === 'text') {
                                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
        break;
                                }
                            } else if (type === 'price') {
                                var xPrice = parseInt(x.innerHTML.replace(/\D/g,''));
        var yPrice = parseInt(y.innerHTML.replace(/\D/g,''));
                                if (xPrice > yPrice) {
            shouldSwitch = true;
        break;
                                }
                            }
                        } else if (dir == "desc") {
                            if (type === 'text') {
                                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
        break;
                                }
                            } else if (type === 'price') {
                                var xPrice = parseInt(x.innerHTML.replace(/\D/g,''));
        var yPrice = parseInt(y.innerHTML.replace(/\D/g,''));
        if (xPrice < yPrice) {
            shouldSwitch = true;
        break;
                                }
                            }
                        }
                    }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
                    } else {
                        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
        switching = true;
                        }
                    }
                }
            }

        // Toggle sort icon
        function toggleSortIcon(element) {
                var icon = $(element).find('i');
        if (icon.hasClass('fa-sort-alpha-down') || icon.hasClass('fa-sort-numeric-down')) {
            icon.removeClass('fa-sort-alpha-down fa-sort-numeric-down')
                .addClass('fa-sort-alpha-up fa-sort-numeric-up');
                } else {
            icon.removeClass('fa-sort-alpha-up fa-sort-numeric-up')
                .addClass('fa-sort-alpha-down fa-sort-numeric-down');
                }
            }
        });
