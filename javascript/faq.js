// Define an array of FAQ objects
const faqs = [
  {
    question: "Apa bahan dasar mukena yang digunakan?",
    answer:
      "Mukena kami dibuat dari bahan berkualitas tinggi seperti katun dan sutra, yang nyaman dan cocok untuk digunakan sehari-hari.",
  },
  {
    question: "Bagaimana cara perawatan mukena?",
    answer:
      "Mukena sebaiknya dicuci dengan tangan menggunakan deterjen yang lembut dan dijemur di tempat yang teduh untuk menjaga kualitas bahan.",
  },
  {
    question: "Apakah tersedia ukuran khusus?",
    answer:
      "Kami menyediakan berbagai ukuran mukena, termasuk ukuran khusus yang dapat dipesan sesuai kebutuhan pelanggan.",
  },
  {
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Waktu pengiriman mukena biasanya memakan waktu 3-5 hari kerja tergantung lokasi pengiriman.",
  },
];

// Function to create FAQ item HTML
function createFaqItem(faq, index) {
  return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq${index + 1}">
          <button
            class="accordion-button ${index === 0 ? "" : "collapsed"}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index + 1}"
            aria-expanded="${index === 0}"
            aria-controls="collapse${index + 1}"
          >
            ${faq.question}
          </button>
        </h2>
        <div
          id="collapse${index + 1}"
          class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
          aria-labelledby="faq${index + 1}"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
}

// Function to render all FAQs
function renderFaqs() {
  const faqContainer = document.getElementById("faqAccordion");
  faqContainer.innerHTML = faqs
    .map((faq, index) => createFaqItem(faq, index))
    .join("");
}

// Call renderFaqs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderFaqs);
