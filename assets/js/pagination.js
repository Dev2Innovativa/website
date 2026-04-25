const totalPages = 6;

let currentPage = 1;
const path = window.location.pathname;

if (path.includes("blog-page")) {
  currentPage = parseInt(path.match(/blog-page(\d+)/)[1]);
}

function createPagination() {
  const ul = document.getElementById("pagination");
  if (!ul) return; // safety check

  ul.innerHTML = "";

  ul.innerHTML += `
    <li>
      <a href="${currentPage > 1 ? getPageLink(currentPage - 1) : '#'}"
         class="${currentPage === 1 ? 'disabled' : ''}">
        <i class="bi bi-chevron-left"></i>
      </a>
    </li>
  `;

  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, currentPage + 1);

  if (start > 1) {
    ul.innerHTML += `<li><a href="blog.html">1</a></li>`;
    if (start > 2) {
      ul.innerHTML += `<li><span>...</span></li>`;
    }
  }

  for (let i = start; i <= end; i++) {
    ul.innerHTML += `
      <li>
        <a href="${getPageLink(i)}"
           class="${i === currentPage ? 'active' : ''}">
          ${i}
        </a>
      </li>
    `;
  }

  if (end < totalPages) {
    if (end < totalPages - 1) {
      ul.innerHTML += `<li><span>...</span></li>`;
    }
    ul.innerHTML += `<li><a href="${getPageLink(totalPages)}">${totalPages}</a></li>`;
  }

  ul.innerHTML += `
    <li>
      <a href="${currentPage < totalPages ? getPageLink(currentPage + 1) : '#'}"
         class="${currentPage === totalPages ? 'disabled' : ''}">
        <i class="bi bi-chevron-right"></i>
      </a>
    </li>
  `;
}

function getPageLink(page) {
  return page === 1 ? "blog.html" : `blog-page${page}.html`;
}

//  Important: run after page loads
document.addEventListener("DOMContentLoaded", createPagination);