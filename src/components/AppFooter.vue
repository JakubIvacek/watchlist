<template>
  <div>
    <footer class="app-footer">
      <!-- Dark section: big brand name -->
      <div class="footer-dark-section">
        <div class="footer-brand">WatchList<span class="dot">.</span></div>
      </div>

      <!-- Yellow section: social + logo + links -->
      <div class="footer-yellow-section">
        <div class="footer-cols">
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          </div>

          <div class="footer-center">
            <RouterLink to="/"><img src="/img/kangaroo-128.png" alt="logo" /></RouterLink>
            <p>© Keno 2024</p>
          </div>

          <div class="footer-links">
            <a href="#" class="footer-link">Terms and Conditions</a>
            <button
              class="footer-link"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >Contact us</button>
            <RouterLink to="/about" class="footer-link">About</RouterLink>
          </div>
        </div>
      </div>
    </footer>

    <div class="modal fade pt-5" id="contactModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content contact-modal-content p-4">
          <h2 class="mb-4" style="font-family:'Oswald',sans-serif;font-size:26px;font-weight:600">Contact us</h2>
          <form>
            <div class="mb-3">
              <input type="text" class="input-dark" placeholder="Your name" />
            </div>
            <div class="mb-3">
              <input type="email" class="input-dark" placeholder="Your email" />
            </div>
            <div class="mb-4">
              <textarea rows="5" class="input-dark" placeholder="Your message"></textarea>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn-ghost" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn-accent">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
