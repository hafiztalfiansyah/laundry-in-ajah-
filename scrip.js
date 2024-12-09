<script>
    // Function to calculate price based on the selected service and quantity
    function calculatePrice() {
        const service = document.getElementById('service').value;
        const quantity = document.getElementById('quantity').value;
        let price = 0;

        // Set prices based on service type
        switch (service) {
            case 'cuci kering dan setrika':
                price = 5000;
                break;
            case 'setrika saja':
                price = 4000;
                break;
            case 'cuci selimut kecil':
                price = 10000;
                break;
            case 'cuci selimut sedang':
                price = 13000;
                break;
            case 'cuci selimut besar':
                price = 18000;
                break;
            case 'cuci selimut jumbo':
                price = 28000;
                break;
            case 'cuci baju anak kecil & bayi':
                price = 4000;
                break;
            case 'cuci baju balita':
                price = 7000;
                break;
            case 'cuci bed cover kecil':
                price = 18000;
                break;
            case 'cuci bed cover sedang':
                price = 23000;
                break;
            case 'cuci bed cover besar':
                price = 25000;
                break;
            case 'cuci bed cover jumbo':
                price = 30000;
                break;
            case 'cuci karpet':
                price = 20000;
                break;
            case 'cuci tas kecil':
                price = 20000;
                break;
            case 'cuci tas besar':
                price = 30000;
                break;
            case 'cuci tas kulit':
                price = 55000;
                break;
            case 'cuci boneka kecil':
                price = 10000;
                break;
            case 'cuci boneka sedang':
                price = 20000;
                break;
            case 'cuci boneka besar':
                price = 25000;
                break;
            case 'cuci boneka jumbo':
                price = 30000;
                break;
            case 'cuci hordeng':
                price = 20000;
                break;
            case 'cuci kasur palembang besar':
                price = 80000;
                break;
            case 'cuci kasur palembang kecil':
                price = 70000;
                break;
            case 'cuci kasur lipat':
                price = 50000;
                break;
            case 'cuci bantal/guling reguler':
                price = 10000;
                break;
            case 'cuci bantal/guling jumbo':
                price = 15000;
                break;
            case 'cuci totebag/godie bag':
                price = 15000;
                break;
            default:
                price = 0;
        }

        // Calculate total price based on quantity
        const totalPrice = price * quantity;

        // Display total price in the form
        document.getElementById('totalPrice').textContent = `Total: Rp. ${totalPrice.toLocaleString()}`;
    }

    // Form validation before submitting
    function validateForm(event) {
        // Check if name and quantity are provided
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        if (!name || !quantity) {
            alert("Please fill in all required fields.");
            event.preventDefault();  // Prevent form submission
        }
    }

    // Add event listener to the form submission
    document.querySelector('form').addEventListener('submit', validateForm);

    // Add event listener to update price whenever the service or quantity changes
    document.getElementById('service').addEventListener('change', calculatePrice);
    document.getElementById('quantity').addEventListener('input', calculatePrice);
</script>
