
    document.addEventListener('DOMContentLoaded', function() {
        const orderItems = [];
    let totalPrice = 0;

        // Add to order functionality
        document.querySelectorAll('.add-to-order').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');

            // Visual feedback on button click
            this.classList.add('btn-success');
            this.innerHTML = '<i class="bi bi-check-circle me-2"></i>Added';

            setTimeout(() => {
                this.classList.remove('btn-success');
                this.innerHTML = '<i class="bi bi-plus-circle me-2"></i>Add Order';
            }, 1000);

            // Check if item already exists in order
            const existingItem = orderItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                orderItems.push({
                    id: id,
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            // Update order display
            updateOrderDisplay();
        });
        });

    // Search functionality with debounce
    let searchTimeout;
    document.getElementById('searchMenu').addEventListener('input', function() {
        clearTimeout(searchTimeout);
    const searchTerm = this.value.toLowerCase();

            searchTimeout = setTimeout(() => {
        document.querySelectorAll('.menu-item').forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
            }, 300);
        });

        // Category filter buttons
        document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.btn-outline-primary').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            // You would typically filter by category here
            // This is just a placeholder for the visual effect
        });
        });

        // Payment method selection
        document.querySelectorAll('.payment-method').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.payment-method').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
        });

    // Update order display
    function updateOrderDisplay() {
            const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';
    totalPrice = 0;

    if (orderItems.length === 0) {
                // Show empty cart message
                const emptyMessage = document.createElement('div');
    emptyMessage.id = 'emptyOrderMessage';
    emptyMessage.className = 'text-center py-5';
    emptyMessage.innerHTML = `
    <i class="bi bi-cart text-muted" style="font-size: 3rem;"></i>
    <p class="text-muted mt-3">Your cart is empty</p>
    <small class="text-muted">Add some delicious items from the menu</small>
    `;
    orderItemsContainer.appendChild(emptyMessage);

    // Disable submit button when cart is empty
    document.getElementById('submitOrder').disabled = true;
            } else {
        // Enable submit button when cart has items
        document.getElementById('submitOrder').disabled = false;

                orderItems.forEach(item => {
                    const itemPrice = parseFloat(item.price.replace(/[^0-9]/g, ''));
    const subtotal = itemPrice * item.quantity;
    totalPrice += subtotal;

    const itemElement = document.createElement('div');
    itemElement.className = 'card mb-3 border-0 bg-light order-item-anim';
    itemElement.innerHTML = `
    <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-1 fw-bold">${item.name}</h6>
            <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}">
                <i class="bi bi-trash"></i>
            </button>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
            <div class="input-group input-group-sm" style="width: 120px;">
                <button class="btn btn-outline-secondary decrease-quantity" data-id="${item.id}">
                    <i class="bi bi-dash"></i>
                </button>
                <span class="form-control text-center">${item.quantity}</span>
                <button class="btn btn-outline-secondary increase-quantity" data-id="${item.id}">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
            <div class="text-primary fw-bold">Rp. ${subtotal.toLocaleString()}</div>
        </div>
    </div>
    `;
    orderItemsContainer.appendChild(itemElement);
                });
            }

    document.getElementById('orderTotal').textContent = `Rp. ${totalPrice.toLocaleString()}`;

            // Add event listeners for quantity buttons
            document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const item = orderItems.find(item => item.id === id);
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                const index = orderItems.findIndex(item => item.id === id);
                orderItems.splice(index, 1);
            }

            updateOrderDisplay();
        });
            });

            document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const item = orderItems.find(item => item.id === id);
            item.quantity += 1;
            updateOrderDisplay();
        });
            });

            document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const index = orderItems.findIndex(item => item.id === id);
            orderItems.splice(index, 1);
            updateOrderDisplay();
        });
            });
        }

    // Submit order with loading state
    document.getElementById('submitOrder').addEventListener('click', function() {
            // Show loading state
            const originalText = this.innerHTML;
    this.disabled = true;
    this.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';

            // Simulate processing (you would replace this with actual API call)
            setTimeout(() => {
        // Here you would typically send the order to the server
        alert('Order submitted successfully!');

    // Reset button
    this.innerHTML = originalText;

    // Clear the order
    orderItems.length = 0;
    updateOrderDisplay();
    this.disabled = true;
            }, 1500);
        });
    });