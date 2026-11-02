/**
 * ==========================================================================
 * AK CHENDAMELAM & EVENT MANAGEMENT - MAIN JAVASCRIPT
 * Vanilla JS logic for links, mobile navigation, hero slideshow,
 * count-up animations, FAQ accordion, gallery filters, and lightbox.
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Gallery Dataset (Single easy-to-edit array for gallery.html)
  // --------------------------------------------------------------------------
  const GALLERY_ITEMS = [
    {
      id: 1,
      src: "images/gallery1.jpg",
      category: "weddings",
      type: "image",
      title: "Wedding Reception Entry",
      caption: "Grand groom and bride reception chendamelam entry performance in Chennai."
    },
    {
      id: 2,
      src: "images/gallery2.jpg",
      category: "weddings",
      type: "image",
      title: "Traditional Welcome Melam",
      caption: "Traditional Mangala Isai welcoming the bridegroom family in Madurai."
    },
    {
      id: 3,
      src: "images/gallery3.jpg",
      category: "weddings",
      type: "image",
      title: "Muhurtham Chendamelam Rhythms",
      caption: "Auspicious wedding ceremony beats combined with Naadaswaram and Thavil."
    },
    {
      id: 4,
      src: "images/gallery4.jpg",
      category: "weddings",
      type: "image",
      title: "Kasi Yatra Procession",
      caption: "Lively Chendamelam procession during Kasi Yatra celebrations in Coimbatore."
    },
    {
      id: 5,
      src: "images/gallery5.jpg",
      category: "temple",
      type: "image",
      title: "Mariamman Temple Festival",
      caption: "Arulmigu Mariamman Temple Panguni Thiruvizha grand chendamelam performance."
    },
    {
      id: 6,
      src: "images/gallery6.jpg",
      category: "temple",
      type: "image",
      title: "Maha Kumbhabhishekam",
      caption: "Sacred Chendamelam beats during Kumbhabhishekam and temple tower sanctification."
    },
    {
      id: 7,
      src: "images/gallery7.jpg",
      category: "temple",
      type: "image",
      title: "Aadi Utsavam Drumming",
      caption: "High-energy temple festival rhythms during Aadi perukku and special poojas."
    },
    {
      id: 8,
      src: "images/gallery8.jpg",
      category: "temple",
      type: "image",
      title: "Karthigai Deepam Melam",
      caption: "Evening festive beats during Karthigai Deepam temple courtyard gathering."
    },
    {
      id: 9,
      src: "images/gallery9.jpg",
      category: "processions",
      type: "image",
      title: "Thiruveethi Ula Procession",
      caption: "Sacred deity street procession (திருவீதி உலா) led by our 15-drummer troupe in Trichy."
    },
    {
      id: 10,
      src: "images/gallery10.jpg",
      category: "processions",
      type: "image",
      title: "Village Thiruvizha Ooravalam",
      caption: "Traditional community festival rally with Ilathalam, Kurumkuzhal, and Chenda melam."
    },
    {
      id: 11,
      src: "videos/sample1.mp4",
      poster: "videos/sample1_poster.jpg",
      category: "videos",
      type: "video",
      title: "Live Temple Festival Video",
      caption: "Watch live high-speed chendamelam rhythm acceleration during local temple festival."
    },
    {
      id: 12,
      src: "videos/sample2.mp4",
      poster: "videos/sample2_poster.jpg",
      category: "videos",
      type: "video",
      title: "Wedding Grand Entry Video",
      caption: "Energetic wedding entrance beats performed by AK Chendamelam artists."
    },
    {
      id: 13,
      src: "images/stage-decoration.jpg",
      category: "decor",
      type: "image",
      title: "Designer Floral Stage Decoration",
      caption: "Grand floral arches, royal couch setup, and elegant event lighting for wedding and reception."
    },
    {
      id: 14,
      src: "images/popcorn-stall.jpg",
      category: "decor",
      type: "image",
      title: "Live Fresh Popcorn Machine Stall",
      caption: "Hot, buttery fresh popcorn popped live on-site with vintage cinema stall presentation."
    },
    {
      id: 15,
      src: "images/cotton-candy.jpg",
      category: "decor",
      type: "image",
      title: "Sweet Fluffy Cotton Candy Cart",
      caption: "Pastel carnival wagon spinning fresh colorful cotton candy treats for wedding guests and kids."
    },
    {
      id: 16,
      src: "images/mascot-costume-1.jpg",
      category: "decor",
      type: "image",
      title: "Tom & Jerry Mascot Characters",
      caption: "Exciting walk-around cartoon mascot suits to entertain families, kids, and guests."
    },
    {
      id: 17,
      src: "images/mascot-costume-2.jpg",
      category: "decor",
      type: "image",
      title: "Giant Panda & Gorilla Mascot Costumes",
      caption: "Friendly giant Panda and Kong Gorilla mascots creating high-energy interactive fun."
    }
  ];

  // Expose gallery items globally for flexibility
  window.GALLERY_ITEMS = GALLERY_ITEMS;

  // --------------------------------------------------------------------------
  // 2. Helper Functions
  // --------------------------------------------------------------------------
  function buildWhatsAppUrl(customMessage) {
    const config = window.SITE_CONFIG || {};
    const number = (config.WHATSAPP_NUMBER || "919884682102").replace(/\D/g, "");
    const msg = customMessage || config.WHATSAPP_MESSAGE || "Hi, I am interested in your event management services.";
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }

  // --------------------------------------------------------------------------
  // 3. Populate Dynamic Links from config.js
  // --------------------------------------------------------------------------
  function applyConfigLinks() {
    const config = window.SITE_CONFIG;
    if (!config) return;

    // Direct WhatsApp Buttons with default text
    document.querySelectorAll('[data-link="whatsapp"]').forEach(el => {
      el.href = buildWhatsAppUrl();
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Package WhatsApp Buttons with package-specific message
    document.querySelectorAll('[data-package-name]').forEach(el => {
      const packageName = el.getAttribute('data-package-name');
      const customMsg = `Hi, I am interested in the ${packageName} package from AK Chendamelam. Please share more details and availability.`;
      el.href = buildWhatsAppUrl(customMsg);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Social Links
    document.querySelectorAll('[data-link="instagram"]').forEach(el => {
      el.href = config.INSTAGRAM_URL || "https://www.instagram.com/ak_kalasamithi";
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    document.querySelectorAll('[data-link="youtube"]').forEach(el => {
      el.href = config.YOUTUBE_URL || "#";
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    document.querySelectorAll('[data-link="facebook"]').forEach(el => {
      el.href = config.FACEBOOK_URL || "#";
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Phone / Call Links
    document.querySelectorAll('[data-link="tel"]').forEach(el => {
      el.href = `tel:${config.PHONE_TEL || config.PHONE_NUMBER || ""}`;
    });

    // Email Links
    document.querySelectorAll('[data-link="email"]').forEach(el => {
      el.href = `mailto:${config.EMAIL_ADDRESS || ""}`;
    });

    // Text Placeholders
    document.querySelectorAll('[data-text="instagram-handle"]').forEach(el => {
      el.textContent = config.INSTAGRAM_HANDLE || "@ak_kalasamithi";
    });

    document.querySelectorAll('[data-text="phone-number"]').forEach(el => {
      el.textContent = config.PHONE_NUMBER || "+91 98846 82102";
    });

    document.querySelectorAll('[data-text="email-address"]').forEach(el => {
      el.textContent = config.EMAIL_ADDRESS || "akchendamelam@gmail.com";
    });

    document.querySelectorAll('[data-text="address-line"]').forEach(el => {
      el.textContent = config.ADDRESS_LINE || "Madurai / Chennai, Tamil Nadu, India";
    });

    document.querySelectorAll('[data-text="service-locations"]').forEach(el => {
      el.textContent = config.SERVICE_LOCATIONS || "Serving all districts across Tamil Nadu";
    });
  }

  // --------------------------------------------------------------------------
  // 4. Mobile Hamburger Menu Toggle
  // --------------------------------------------------------------------------
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    if (!toggleBtn || !drawer) return;

    function openMenu() {
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      if (backdrop) backdrop.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      if (backdrop) backdrop.classList.remove('is-visible');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    // Close when clicking any nav link inside drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 5. Active Nav Link Highlighter
  // --------------------------------------------------------------------------
  function highlightActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item-link, .mobile-nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Hero Slideshow with Crossfade & Content Sync (index.html)
  // --------------------------------------------------------------------------
  function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const contentSlides = document.querySelectorAll('.hero-slide-content');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    if (slides.length === 0) return;

    let currentIndex = 0;
    let slideInterval = null;

    function goToSlide(index) {
      slides[currentIndex].classList.remove('is-active');
      if (contentSlides[currentIndex]) contentSlides[currentIndex].classList.remove('is-active');
      if (dots[currentIndex]) dots[currentIndex].classList.remove('is-active');

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex].classList.add('is-active');
      if (contentSlides[currentIndex]) contentSlides[currentIndex].classList.add('is-active');
      if (dots[currentIndex]) dots[currentIndex].classList.add('is-active');
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function resetTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000);
    }

    // Start auto slideshow every 6 seconds
    slideInterval = setInterval(nextSlide, 6000);

    // Indicator click handlers
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetTimer();
      });
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 7. Count-Up Stats Animation on Scroll (index.html)
  // --------------------------------------------------------------------------
  function initCountUpStats() {
    const statElements = document.querySelectorAll('[data-counter-target]');
    if (statElements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const duration = 1800; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            el.textContent = currentVal;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    statElements.forEach(el => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // 8. Scroll Fade-Up Observer
  // --------------------------------------------------------------------------
  function initScrollFadeUp() {
    const elements = document.querySelectorAll('.fade-up-element');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // 9. FAQ Accordion (packages.html)
  // --------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      if (!trigger || !content) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle clicked item
        if (isOpen) {
          item.classList.remove('is-active');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('is-active');
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Gallery Renderer, Filtering & Lightbox (gallery.html)
  // --------------------------------------------------------------------------
  function initGalleryPage() {
    const galleryContainer = document.getElementById('galleryContainer');
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    if (!galleryContainer) return;

    let activeFilter = 'all';
    let currentLightboxIndex = 0;
    let filteredItems = [...GALLERY_ITEMS];

    // Render cards into container
    function renderGallery(itemsToRender) {
      filteredItems = itemsToRender;
      galleryContainer.innerHTML = '';

      if (itemsToRender.length === 0) {
        galleryContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
            No items found for this category.
          </div>
        `;
        return;
      }

      itemsToRender.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-up-element is-visible';
        card.setAttribute('data-category', item.category);

        const isVideo = item.type === 'video';
        const displaySrc = isVideo ? (item.poster || 'images/gallery1.jpg') : item.src;
        const badgeLabel = isVideo ? 'Video' : item.category.toUpperCase();

        card.innerHTML = `
          <div class="gallery-card-badge-top">${badgeLabel}</div>
          ${isVideo ? `
            <div class="video-play-indicator" aria-label="Play Video">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          ` : ''}
          <div class="media-frame" data-placeholder="${displaySrc}">
            <img src="${displaySrc}" alt="${item.title}" loading="lazy" onerror="this.classList.add('is-hidden')">
            <div class="media-fallback-layer">
              <svg class="media-fallback-drum" viewBox="0 0 60 40">
                <ellipse cx="30" cy="10" rx="24" ry="7"/>
                <ellipse cx="30" cy="30" rx="24" ry="7"/>
                <line x1="6" y1="10" x2="6" y2="30"/>
                <line x1="54" y1="10" x2="54" y2="30"/>
              </svg>
              <span class="media-filename-tag">${displaySrc}</span>
            </div>
          </div>
          <div class="gallery-card-overlay">
            <span class="gallery-card-badge">${badgeLabel}</span>
            <h4 class="gallery-card-title">${item.title}</h4>
          </div>
        `;

        card.addEventListener('click', () => {
          openLightbox(index);
        });

        galleryContainer.appendChild(card);
      });
    }

    // Filter Navigation Handler
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeFilter = btn.getAttribute('data-filter');

        if (activeFilter === 'all') {
          renderGallery(GALLERY_ITEMS);
        } else if (activeFilter === 'videos') {
          renderGallery(GALLERY_ITEMS.filter(it => it.type === 'video'));
        } else {
          renderGallery(GALLERY_ITEMS.filter(it => it.category === activeFilter));
        }
      });
    });

    // Initial render
    renderGallery(GALLERY_ITEMS);

    // Lightbox Functionality
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxMedia = document.getElementById('lightboxMedia');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    if (!lightboxModal) return;

    function openLightbox(index) {
      currentLightboxIndex = index;
      updateLightboxContent();
      lightboxModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightboxModal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (lightboxMedia) {
        // Pause any playing video
        const vid = lightboxMedia.querySelector('video');
        if (vid) vid.pause();
        lightboxMedia.innerHTML = '';
      }
    }

    function updateLightboxContent() {
      const item = filteredItems[currentLightboxIndex];
      if (!item) return;

      lightboxMedia.innerHTML = '';
      if (item.type === 'video') {
        const videoEl = document.createElement('video');
        videoEl.src = item.src;
        videoEl.poster = item.poster || '';
        videoEl.controls = true;
        videoEl.autoplay = true;
        videoEl.playsInline = true;
        lightboxMedia.appendChild(videoEl);
      } else {
        const imgEl = document.createElement('img');
        imgEl.src = item.src;
        imgEl.alt = item.title;
        lightboxMedia.appendChild(imgEl);
      }

      if (lightboxCaption) {
        lightboxCaption.innerHTML = `<strong>${item.title}</strong> — ${item.caption}`;
      }
    }

    function showPrev() {
      currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      updateLightboxContent();
    }

    function showNext() {
      currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
      updateLightboxContent();
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
    if (lightboxNext) lightboxNext.addEventListener('click', showNext);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  // --------------------------------------------------------------------------
  // 11. Interactive Contact Enquiry Form to WhatsApp (contact.html)
  // --------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('enquiryForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || 'Not specified';
      const phone = document.getElementById('formPhone')?.value.trim() || 'Not specified';
      const eventType = document.getElementById('formEventType')?.value || 'General Enquiry';
      const eventDate = document.getElementById('formDate')?.value || 'To be decided';
      const location = document.getElementById('formLocation')?.value.trim() || 'Tamil Nadu';
      const message = document.getElementById('formMessage')?.value.trim() || 'None';

      const formattedMessage =
        `வணக்கம் ஏ.கே. செண்டை மேளம் (AK Chendamelam),\n\n` +
        `நான் புதிய நிகழ்வு முன்பதிவு பற்றிய விவரங்களை அறிய விரும்புகிறேன்:\n\n` +
        `*பெயர் (Name):* ${name}\n` +
        `*தொலைபேசி (Phone):* ${phone}\n` +
        `*நிகழ்வு வகை (Event):* ${eventType}\n` +
        `*தேதி (Date):* ${eventDate}\n` +
        `*இடம் / ஊர் (Location):* ${location}\n` +
        `*கூடுதல் விவரங்கள் (Message):* ${message}\n\n` +
        `தயவுசெய்து கட்டணம் மற்றும் கிடைக்கும் விவரங்களை தெரிவிக்கவும். நன்றி!`;

      const whatsappUrl = buildWhatsAppUrl(formattedMessage);
      window.open(whatsappUrl, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 12. Global Image Fallback Handler for Missing Files
  // --------------------------------------------------------------------------
  function initImageFallbacks() {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function () {
        this.classList.add('is-hidden');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 13. DOM Ready Initialization
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    applyConfigLinks();
    initMobileMenu();
    highlightActiveNavLink();
    initHeroSlideshow();
    initCountUpStats();
    initScrollFadeUp();
    initFaqAccordion();
    initGalleryPage();
    initContactForm();
    initImageFallbacks();
  });

})();
