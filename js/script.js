
console.log("Pearl's Luxe Lane Boutique JavaScript is connected!");

// PRODUCT SEARCH

const productSearch = document.querySelector("#product-search");
const searchButton = document.querySelector("#search-button");
const searchMessage = document.querySelector("#search-message");
const productCards = document.querySelectorAll(".product-card");

function searchProducts() {
    const searchText = productSearch.value.toLowerCase().trim();
    let numberOfMatches = 0;

    productCards.forEach(function (card) {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const cardMatches = productName.includes(searchText);

        card.hidden = !cardMatches;

        if (cardMatches) {
            numberOfMatches = numberOfMatches + 1;
        }
    });

    if (numberOfMatches === 0) {
        searchMessage.textContent = "No products match your search.";
    } else {
        searchMessage.textContent =
            numberOfMatches + " product category/categories found.";
    }
}

if (productSearch && searchButton && searchMessage && productCards.length > 0) {
    searchButton.addEventListener("click", searchProducts);

    productSearch.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            searchProducts();
        }
    });

    productSearch.addEventListener("input", function () {
        if (productSearch.value.trim() === "") {
            productCards.forEach(function (card) {
                card.hidden = false;
            });

            searchMessage.textContent = "";
        }
    });
}

// PRODUCT IMAGE LIGHTBOX

const productImages = document.querySelectorAll(".product-card img");

if (productImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.id = "product-lightbox";

    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button type="button" id="close-lightbox">Close &times;</button>
            <img id="lightbox-image" src="" alt="">
            <p id="lightbox-caption"></p>
        </div>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("#lightbox-image");
    const lightboxCaption = lightbox.querySelector("#lightbox-caption");
    const closeLightbox = lightbox.querySelector("#close-lightbox");

    productImages.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightboxCaption.textContent = image.alt;
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// ENQUIRY FORM VALIDATION

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
    const enquiryResponse = enquiryForm.querySelector("#enquiry-response");

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const customerName = enquiryForm.querySelector("#name");
        const productName = enquiryForm.querySelector("#product");
        const customerMessage = enquiryForm.querySelector("#message");

        if (!customerName || !productName || !customerMessage) {
            console.error("A required enquiry form field could not be found.");
            return;
        }

        if (
            customerName.value.trim() === "" ||
            productName.value.trim() === "" ||
            customerMessage.value.trim() === ""
        ) {
            if (enquiryResponse) {
                enquiryResponse.textContent =
                    "Please complete all required fields.";
            }
            return;
        }

        if (enquiryResponse) {
            enquiryResponse.textContent =
                "Thank you, " + customerName.value.trim() +
                "! Your enquiry about " + productName.value +
                " has been checked. Please contact the boutique to confirm availability and pricing.";
        }
    });
}

// CLOTHING DETAILS BUTTONS

const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        const extraInformation =
            productCard.querySelector(".product-details");

        extraInformation.hidden = !extraInformation.hidden;

        if (extraInformation.hidden) {
            button.textContent = "Show Details";
            button.setAttribute("aria-expanded", "false");
        } else {
            button.textContent = "Hide Details";
            button.setAttribute("aria-expanded", "true");
        }
    });
});

// HOME PAGE FEATURED STYLE

const specialMessage = document.querySelector("#special-message");
const specialButton = document.querySelector("#special-button");
const specialImage = document.querySelector("#special-image");

if (specialMessage && specialButton && specialImage) {
    specialButton.addEventListener("click", function () {
        specialMessage.textContent =
            "Discover stylish outfits at Pearl's Luxe Lane Boutique. Find a look that expresses your personality!";

        specialImage.hidden = false;

        specialButton.textContent = "Featured Style Viewed";
        specialButton.disabled = true;
    });
}

// CONTACT FORM VALIDATION

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const contactResponse = document.querySelector("#contact-response");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const contactName = document.querySelector("#contact-name");
        const contactEmail = document.querySelector("#contact-email");
        const contactMessage = document.querySelector("#contact-message");

        if (
            !contactName ||
            !contactEmail ||
            !contactMessage
        ) {
            console.error("A contact form field could not be found.");
            return;
        }

        if (
            contactName.value.trim() === "" ||
            contactEmail.value.trim() === "" ||
            contactMessage.value.trim() === ""
        ) {
            if (contactResponse) {
                contactResponse.textContent =
                    "Please complete all the required fields.";
            }
            return;
        }

        if (contactResponse) {
            contactResponse.textContent =
                "Thank you, " + contactName.value.trim() +
                "! Your message has been checked successfully.";
        }

        contactForm.reset();
    });
}

