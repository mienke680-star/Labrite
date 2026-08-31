(function () {
  'use strict';

  // Header: transparent over the hero, solid once scrolled.
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var updateHeaderState = function () {
      siteHeader.classList.toggle('is-solid', window.scrollY > 24);
    };
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  // Mobile navigation toggle
  var navToggle = document.querySelector('[data-nav-toggle]');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.querySelectorAll('.primary-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Gentle reveal-on-scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Equipment catalogue filters
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var chips = filterBar.querySelectorAll('.filter-chip');
    var items = document.querySelectorAll('[data-category]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        chip.setAttribute('aria-pressed', 'true');
        var target = chip.getAttribute('data-filter');
        items.forEach(function (item) {
          var show = target === 'all' || item.getAttribute('data-category') === target;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Contact form: client-side validation + confirmation state.
  // NOTE: no email/CRM endpoint has been supplied for Labrite yet, so this
  // intentionally stops short of a network submission — wire submitEndpoint
  // up to the real form handler before go-live.
  var forms = document.querySelectorAll('[data-enquiry-form]');
  forms.forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (status) {
        status.textContent = 'Thank you — your enquiry has been prepared. Labrite will be in touch shortly.';
        status.classList.add('is-visible');
      }
      form.reset();
    });
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Cookie consent banner — shown once until accepted, reopenable from the footer.
  // Non-essential embeds (currently just the Contact page's Google Maps) stay
  // out of the DOM until consent is granted, so they never load beforehand.
  var COOKIE_CONSENT_KEY = 'labrite_cookie_consent';

  function hasCookieConsent() {
    try {
      return window.localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
    } catch (e) {
      return false;
    }
  }

  function loadConsentGatedEmbeds() {
    document.querySelectorAll('[data-map-embed]').forEach(function (el) {
      var src = el.getAttribute('data-maps-src');
      if (!src) return;
      var iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = el.getAttribute('data-maps-title') || 'Map';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.style.display = 'block';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      el.innerHTML = '';
      el.appendChild(iframe);
      el.removeAttribute('data-maps-src');
    });
  }

  var cookieBanner = document.querySelector('[data-cookie-banner]');
  var showBanner = function () {
    if (!cookieBanner) return;
    cookieBanner.hidden = false;
    requestAnimationFrame(function () { cookieBanner.classList.add('is-visible'); });
  };
  var hideBanner = function () {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('is-visible');
    window.setTimeout(function () { cookieBanner.hidden = true; }, 250);
  };

  if (hasCookieConsent()) {
    loadConsentGatedEmbeds();
  } else {
    showBanner();
  }

  document.querySelectorAll('[data-cookie-accept]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      try { window.localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted'); } catch (e) {}
      hideBanner();
      loadConsentGatedEmbeds();
    });
  });

  document.querySelectorAll('[data-reopen-cookie-banner]').forEach(function (btn) {
    btn.addEventListener('click', function () { showBanner(); });
  });

  // Live "open now" / "closed now" badge, computed in Labrite's own timezone
  // so it's correct regardless of the visitor's local time.
  document.querySelectorAll('[data-hours-status]').forEach(function (el) {
    try {
      var hours = JSON.parse(el.getAttribute('data-hours') || '[]');
      var timeZone = el.getAttribute('data-timezone');
      var now = new Date();
      var weekday = new Intl.DateTimeFormat('en-US', { timeZone: timeZone, weekday: 'long' }).format(now);
      var hhmm = new Intl.DateTimeFormat('en-GB', {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
      }).format(now);
      var today = hours.find(function (h) { return h.day === weekday; });
      var isOpen = !!today && hhmm >= today.opens && hhmm < today.closes;

      function to12h(hhmmStr) {
        var parts = hhmmStr.split(':');
        var h = parseInt(parts[0], 10);
        var suffix = h >= 12 ? 'PM' : 'AM';
        var h12 = h % 12 || 12;
        return h12 + ':' + parts[1] + ' ' + suffix;
      }

      el.textContent = isOpen
        ? 'Open now — closes ' + to12h(today.closes)
        : today
        ? 'Closed now — opens ' + to12h(today.opens)
        : 'Closed now';
      el.classList.toggle('is-closed', !isOpen);
      el.hidden = false;
    } catch (e) {
      // Leave the element hidden if the schedule can't be parsed.
    }
  });
})();
