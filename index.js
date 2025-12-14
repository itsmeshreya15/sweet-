 <script>
    let cartCount = 0;
    let cartItems = [];

    function addToCart(item) {
      cartCount++;
      cartItems.push(item);
      document.getElementById("count").textContent = cartCount;
      renderCart();
    }

    function toggleCart() {
      const modal = document.getElementById("cartModal");
      modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    }

    function renderCart() {
      const list = document.getElementById("cartItems");
      list.innerHTML = "";
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }
  </script>
