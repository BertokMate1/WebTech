document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const nameInput = document.getElementById("name");
    const productRadios = document.getElementsByName("product");
    const nameError = document.getElementById("name-error");
    const radioError = document.getElementById("radio-error");

    orderForm.addEventListener("submit", function (event) {
        let valid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            valid = false;
            showError(nameError, "Kérjük, adja meg a nevét!");
        } else {
            nameError.textContent = "";
        }

        // Validate Product Selection (Radio Buttons)
        let productSelected = false;
            for (let i = 0; i < productRadios.length; i++) {
                if (productRadios[i].checked) {
                    productSelected = true;
                    break;
                    }
                }
            if (!productSelected) {
                valid = false;
                showError(radioError, "Kérjük válasszon!");
            } else {
                radioError.textContent = "";
            }

        // Prevent form submission if not valid
        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(elem, message) {
        elem.textContent = message;
        elem.style.opacity = "0";
        elem.style.transition = "opacity 0.3s";
        setTimeout(() => {
            elem.style.opacity = "1";
        }, 10);
    }
});