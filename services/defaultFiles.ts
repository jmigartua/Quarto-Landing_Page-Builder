export const DEFAULT_QUARTO_YAML = `project:
  type: website
  output-dir: _site

website:
  title: ##WEBSITE_TITLE_PLACEHOLDER##
  description: ""
  site-url: ""
  repo-url: ""
##NAVBAR_BLOCK_PLACEHOLDER##
  page-navigation: true
  search: true
  back-to-top-navigation: true
##FOOTER_BLOCK_PLACEHOLDER##
format:
  html:
    ##THEME_BLOCK_PLACEHOLDER##
    css:
      - styles/custom.scss
      - styles/custom-ocean.scss
    toc: true
    toc-depth: 5
    smooth-scroll: true
    code-copy: true
    anchor-sections: true
    page-layout: full
    grid:
      body-width: 1100px
      sidebar-width: 260px
      margin-width: 280px
`;

export const DEFAULT_CUSTOM_SCSS = `/*-- scss:defaults --*/

// Color palette inspired by devpu.sh
$primary: #6366f1;
$secondary: #8b5cf6;
$dark: #0f172a;
$gray-900: #0f172a;
$gray-800: #1e293b;
$gray-700: #334155;
$gray-600: #475569;
$gray-500: #64748b;
$gray-400: #94a3b8;
$gray-300: #cbd5e1;
$gray-200: #e2e8f0;
$gray-100: #f1f5f9;
$gray-50: #f8fafc;

$body-bg: #ffffff;
$body-color: $gray-700;
$link-color: $primary;
$headings-color: $gray-900;

// Typography
$font-family-sans-serif: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.6;
$headings-font-weight: 700;

/*-- scss:rules --*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: $font-family-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.feature-card-hoverable {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.feature-card-hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

// Navbar customization
.navbar {
  background-color: #ffffff !important;
  border-bottom: 1px solid $gray-200;
  box-shadow: none;
  padding: 0.75rem 0;
  
  .container-fluid {
    gap: 1rem;
  }
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.15rem;
    color: $gray-900 !important;
    letter-spacing: -0.01em;
  }
  
  .nav-link {
    color: $gray-700 !important;
    font-weight: 500;
    padding: 0.5rem 0.9rem;
    border-radius: 0.75rem;
    margin: 0 0.25rem;
    text-transform: none;
    transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    
    &:hover,
    &:focus {
      background-color: $gray-100;
      color: $gray-900 !important;
    }
    
    &.active {
      background-color: $gray-100;
      color: $gray-900 !important;
    }
  }
  
  // Style the "Sign In" button (last item on the right)
  .navbar-nav:last-child .nav-item:last-child .nav-link {
    border: 1px solid $gray-200;
    background: #ffffff;
    color: $gray-900 !important;
    padding: 0.5rem 1.1rem;
    border-radius: 0.9rem;
    font-weight: 600;
    box-shadow: none;
    
    &:hover,
    &:focus {
      border-color: $primary;
      color: $primary !important;
      box-shadow: 0 2px 6px rgba(99, 102, 241, 0.12);
    }
  }
  
  .dropdown-menu {
    border: 1px solid $gray-200;
    border-radius: 0.75rem;
    padding: 0.5rem;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
    min-width: 12rem;
  }

  .dropdown-item {
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    color: $gray-700;
    text-transform: none;
    
    &:hover,
    &:focus,
    &.active {
      background-color: $gray-100;
      color: $gray-900;
    }
  }

  .quarto-navbar-tools .quarto-navigation-tool {
    color: $gray-700 !important;

    &:hover,
    &:focus {
      color: $gray-900 !important;
    }
  }

  .quarto-color-scheme-toggle .bi::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22rgba%2871%2C%2085%2C%20105%2C%201%29%22%20class%3D%22bi%20bi-toggle-off%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M11%204a4%204%200%200%201%200%208H8a4.992%204.992%200%200%200%202-4%204.992%204.992%200%200%200-2-4h3zm-6%208a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM0%208a5%205%200%200%200%205%205h6a5%205%200%200%200%200-10H5a5%205%200%200%200-5%205z%22/%3E%3C/svg%3E") !important;
  }

  .quarto-color-scheme-toggle.alternate .bi::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22rgba%2871%2C%2085%2C%20105%2C%201%29%22%20class%3D%22bi%20bi-toggle-on%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M5%203a5%205%200%200%200%200%2010h6a5%205%200%200%200%200-10H5zm6%209a4%204%200%201%201%200-8%204%204%200%200%201%200%208z%22/%3E%3C/svg%3E") !important;
  }
}

// Hero section
.hero {
  text-align: center;
  padding: 8rem 1.5rem 6rem;
  background: transparent;
  
  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, $gray-900 0%, $primary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    font-size: 1.25rem;
    color: $gray-600;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}

// Button styles
.btn-cta-dark,
.btn-cta-ghost {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;
}

.btn-cta-dark {
  background: $gray-900;
  color: white;
  
  &:hover {
    background: $gray-800;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    color: white;
  }
}

.btn-cta-ghost {
  background: transparent;
  color: $gray-900;
  border: 2px solid $gray-300;
  
  &:hover {
    border-color: $primary;
    color: $primary;
    transform: translateY(-2px);
  }
}

// Section styling
.section {
  padding: 5rem 0;
}

:is(h1, h2, h3, h4, h5, h6).section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  
  &.gradient-text {
    background: linear-gradient(135deg, $primary 0%, $secondary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

// Features list
.features-list {
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: $gray-900;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: $primary;
        font-weight: bold;
      }
      
      strong {
        color: $gray-900;
        font-weight: 600;
      }
    }
  }
}

// Features carousel
#features-gallery {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  position: relative;
}

#features-gallery .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#features-gallery .carousel-caption {
  background: rgba(15, 23, 42, 0.6);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  text-align: left;
}

#features-gallery .carousel-caption strong,
#features-gallery .carousel-caption b,
#features-gallery .carousel-caption em {
  color: #ffffff;
}

#features-gallery .carousel-caption p,
#features-gallery .carousel-caption strong,
#features-gallery .carousel-caption b {
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

#features-gallery .carousel-indicators {
  margin-bottom: 0.75rem;
}

#features-gallery .carousel-indicators button {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0.35rem;
}

#features-gallery .carousel-indicators .active,
#features-gallery .carousel-indicators button:hover {
  background-color: $primary;
}

// Index grids (testimonials & cta blocks)
.index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: stretch;
}

.index-grid .index-g-col-4 {
  display: flex;
  align-items: stretch;
}

.index-grid .card {
  width: 100%;
  height: 100%;
  padding: 1rem 1.35rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: white;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}

.get-started-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  max-width: 880px;
  margin: 1.5rem auto 0;
  padding: 0 1rem;
}

.get-started-card {
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.get-started-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(99, 102, 241, 0.15);
  border-color: $primary;
}

.get-started-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
}

.get-started-card .btn {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.65rem;
  font-weight: 600;
}

.btn-block {
  width: 100%;
}

.index-grid-cta .index-g-col-4 {
  display: flex;
}

.index-grid-cta .btn {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
}

.index-grid-testimonials .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
}

.index-grid-testimonials .card-text {
  font-size: 0.95rem;
  line-height: 1.45;
  color: $gray-700;
  margin: 0 auto;
  max-width: 18rem;
}

.index-grid-testimonials .blockquote-footer {
  color: $gray-500;
  font-weight: 600;
}

.index-grid-cta {
  margin-top: 1.75rem;
}

.back-to-top {
  margin-top: 2rem;
}

.back-to-top .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

// Capabilities grid
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.capability-card {
  background: transparent;
  border: 1px solid $gray-200;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
    border-color: $primary;
    
    .card-content h3 {
      color: $primary;
    }
  }
  
  .card-content {
    flex: 1;
    
    h3 {
      font-size: 1.125rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      transition: color 0.2s;
    }
    
    p {
      color: $gray-600;
      font-size: 0.875rem;
      margin: 0;
    }
  }
  
  .card-illustration {
    margin-top: 1.5rem;
    padding: 1rem;
    background: transparent;
    border-radius: 0.5rem;
    font-size: 0.75rem;
  }
}

// Card illustration styles
.card-illustration-logs {
  .log-line {
    margin-bottom: 0.25rem;
    font-family: 'Courier New', monospace;
  }
  
  .log-time {
    color: $gray-500;
  }
  
  .log-event {
    color: $gray-700;
  }
  
  .log-success {
    color: #10b981;
    font-weight: 600;
  }
}

.card-illustration-menu {
  .menu-trigger {
    background: white;
    border: 1px solid $gray-300;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .trigger-dot {
    color: #10b981;
  }
  
  .menu-surface {
    background: white;
    border: 1px solid $gray-200;
    border-radius: 0.375rem;
    padding: 0.25rem;
  }
  
  .menu-item {
    display: block;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    
    &:hover {
      background: $gray-100;
    }
  }
}

.card-illustration-form {
  .form-field {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .field-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: $gray-700;
    margin-bottom: 0.25rem;
  }
  
  .pill {
    display: inline-block;
    background: white;
    border: 1px solid $gray-300;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
  }
}

.card-illustration-secrets {
  .secret-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: white;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .secret-key {
    font-family: 'Courier New', monospace;
    font-weight: 600;
  }
  
  .secret-value {
    color: $gray-500;
  }
  
  .secret-row-add {
    border: 1px dashed $gray-300;
    cursor: pointer;
    
    &:hover {
      border-color: $primary;
      background: $gray-50;
    }
  }
  
  .plus {
    color: $primary;
    font-weight: bold;
    margin-right: 0.5rem;
  }
}

.card-illustration-links {
  .link-row {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .link-label {
    display: block;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $gray-500;
    margin-bottom: 0.25rem;
  }
  
  .link-value {
    display: block;
    color: $primary;
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
  }
}

.card-illustration-select {
  .select-pill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: 1px solid $gray-300;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;
  }
  
  .select-menu {
    background: white;
    border: 1px solid $gray-200;
    border-radius: 0.375rem;
    padding: 0.25rem;
  }
  
  .select-item {
    display: block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    
    &.select-item-active {
      background: $primary;
      color: white;
    }
  }
}

.card-illustration-domains {
  .domain-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: white;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .domain-name {
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
  }
  
  .domain-status {
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $gray-500;
    
    &.domain-status-live {
      color: #10b981;
    }
  }
}

.card-illustration-avatars {
  .avatar-stack {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  .avatar-circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: $primary;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.625rem;
    font-weight: 700;
    
    &.avatar-circle-muted {
      background: $gray-300;
      color: $gray-600;
    }
  }
  
  .team-roles {
    font-size: 0.75rem;
    color: $gray-600;
  }
}

.card-illustration-oss {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  
  .oss-badge {
    display: inline-block;
    background: white;
    border: 1px solid $gray-300;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
}

// Marquee animation
.marquee {
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
}

.marquee-track {
  display: flex;
  gap: 1rem;
  animation: marquee 30s linear infinite;
  width: max-content;
  
  .pill-card {
    background: white;
    border: 1px solid $gray-200;
    border-radius: 1rem;
    padding: 1.5rem;
    min-width: 300px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    flex-shrink: 0;
    
    &:hover {
      border-color: $primary;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(99, 102, 241, 0.1);
    }
    
    strong {
      display: block;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $gray-900;
    }
    
    span {
      font-size: 0.875rem;
      color: $gray-600;
    }
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

// FAQ styling
.faq-wrap {
  max-width: 800px;
  margin: 0 auto;
}

.faq-accordion {
  .faq-item {
    margin-bottom: 1rem;
    
    details {
      background: white;
      border: 1px solid $gray-200;
      border-radius: 0.75rem;
      overflow: hidden;
      
      &[open] summary {
        border-bottom: 1px solid $gray-200;
      }
    }
    
    summary {
      padding: 1.25rem 1.5rem;
      font-weight: 600;
      font-size: 1.125rem;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s;
      
      &:hover {
        background: $gray-50;
        color: $primary;
      }
      
      &::after {
        content: "+";
        font-size: 1.5rem;
        color: $primary;
        transition: transform 0.2s;
      }
      
      &::-webkit-details-marker {
        display: none;
      }
    }
    
    details[open] summary::after {
      transform: rotate(45deg);
    }
    
    details > *:not(summary) {
      padding: 1rem 1.5rem 1.25rem;
      color: $gray-600;
      line-height: 1.6;
    }
  }
}

// Footer
.page-footer {
  background: $gray-50;
  color: $gray-600;
  padding: 1.75rem 0;
  border-top: 1px solid $gray-200;
  font-size: 0.95rem;
}

.page-footer .nav-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.page-footer .nav-footer-left,
.page-footer .nav-footer-center,
.page-footer .nav-footer-right {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.page-footer .nav-footer-left {
  font-weight: 500;
  color: $gray-700;
}

.page-footer .nav-footer-center,
.page-footer .nav-footer-right {
  color: $gray-600;
}

.page-footer a {
  color: $gray-600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover,
  &:focus {
    color: $gray-900;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 3rem;
  }
  
  .section {
    padding: 3rem 0;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .index-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .page-footer .nav-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

// Utilities
.container-xxl {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.shadow-lg {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.rounded {
  border-radius: 0.75rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}


/* Tabs */
.instats-tabs .nav-tabs { border-bottom: 1px solid var(--bs-border-color); }
.instats-tabs .nav-link { font-weight: 600; border: 0; border-bottom: 2px solid transparent; opacity: .85; }
.instats-tabs .nav-link:hover { opacity: 1; }
.instats-tabs .nav-link.active { color: var(--bs-primary); border-color: var(--bs-primary); }

/* Seminar cards */
.instats-seminars .card { box-shadow: 0 6px 18px rgba(0,0,0,.06); }
.instats-seminars .card:hover { box-shadow: 0 12px 28px rgba(0,0,0,.10); transform: translateY(-2px); transition: all .12s ease; }
.instats-seminars .card .h4 { font-weight: 800; letter-spacing: -.01em; }
.instats-seminars .badge { border-radius: 999px; }


/* --- Main Template Container --- */
/* This is the "namespace" for the entire template. All other rules depend on it. */
.presentation-page-template {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
}

/* --- Layout & Column Styling --- */
.presentation-page-template .left-column {
  padding-right: 2rem; 
}
.presentation-page-template .right-column {
  padding-left: 2rem; 
  border-left: 1px solid #dee2e6;
}


/* --- Left Column Specific Styling --- */
.presentation-page-template .instructor-img {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
}
.presentation-page-template .instructor-info h4 {
  font-weight: 700;
  font-size: 1.75rem;
  margin: 0 0 0.25rem 0;
}
.presentation-page-template .instructor-info p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}
/* This custom badge style will ONLY apply to badges inside our template */
.presentation-page-template .tp-badge {
  display: inline-block;
  font-size: 0.9rem;
  padding: 0.4em 0.9em !important;
  border: 1px solid #ced4da;
  border-radius: 20px;
  background-color: #f8f9fa !important;
  margin-right: 0.5rem;
  font-weight: 500;
  color: #333 !important;
  text-decoration: none;
}
.presentation-page-template .dates-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
}
.presentation-page-template .dates-box table {
  width: 100%;
  border: none;
}
.presentation-page-template .dates-box th, .presentation-page-template .dates-box td {
  border: none; padding: 0.75rem 0; font-size: 1.05rem;
}
.presentation-page-template .dates-box td { text-align: right; }
.presentation-page-template .fees-table table {
  width: 100%; border: none;
}
.presentation-page-template .fees-table th, .presentation-page-template .fees-table td {
  border-top: 1px solid #dee2e6;
  padding: 0.75rem;
  text-align: right;
  font-weight: bold;
}
.presentation-page-template .fees-table thead th {
  border-top: none; font-weight: 500; color: #6c757d;
}
.presentation-page-template .fees-table tbody th {
  text-align: left;
}
.presentation-page-template .tp-ects-badge {
  background-color: #e9ecef !important;
  border-color: #e9ecef !important;
  font-size: 1rem;
}

/* --- Right Column Specific Styling --- */
.presentation-page-template .features-grid .card {
    text-align: center;
    border: 1px solid #eee;
    box-shadow: none;
    padding: 1.5em 1em;
    background-color: #fff;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
}
.presentation-page-template .features-grid .card-body {
    padding: 0;
}
.presentation-page-template .features-grid h5 {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 0;
}

/* --- Tab Panel Styling --- */
/* This rule will only apply to tabsets inside our template */
.presentation-page-template .panel-tabset .tab-content {
  min-height: 450px; /* Adjust this value as needed for your content */
  padding-top: 1rem;
}
`;

export const DEFAULT_CUSTOM_OCEAN_SCSS = `/*-- scss:defaults --*/

// Ocean Pro Theme - Professional Corporate Palette
// Deep navy blues with teal accents - trust, stability, enterprise

$primary: #0ea5e9;        // Sky blue (brighter for interaction)
$secondary: #06b6d4;      // Cyan/Teal
$dark: #0c4a6e;           // Deep ocean blue
$gray-900: #0c4a6e;       // Deep ocean
$gray-800: #164e63;       // Dark teal-slate
$gray-700: #334155;       // Cool slate
$gray-600: #475569;
$gray-500: #64748b;
$gray-400: #94a3b8;
$gray-300: #cbd5e1;
$gray-200: #e2e8f0;
$gray-100: #f1f5f9;
$gray-50: #f8fafc;

$body-bg: #ffffff;
$body-color: $gray-700;
$link-color: $primary;
$headings-color: $gray-900;

// Typography
$font-family-sans-serif: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.6;
$headings-font-weight: 700;

/*-- scss:rules --*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: $font-family-sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Navbar customization
.navbar {
  background-color: #ffffff !important;
  border-bottom: 1px solid $gray-200;
  box-shadow: none;
  padding: 0.75rem 0;
  
  .container-fluid {
    gap: 1rem;
  }
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.15rem;
    color: $gray-900 !important;
    letter-spacing: -0.01em;
  }
  
  .nav-link {
    color: $gray-700 !important;
    font-weight: 500;
    padding: 0.5rem 0.9rem;
    border-radius: 0.75rem;
    margin: 0 0.25rem;
    text-transform: none;
    transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    
    &:hover,
    &:focus {
      background-color: $gray-100;
      color: $gray-900 !important;
    }
    
    &.active {
      background-color: $gray-100;
      color: $gray-900 !important;
    }
  }
  
  // Style the "Sign In" button (last item on the right)
  .navbar-nav:last-child .nav-item:last-child .nav-link {
    border: 1px solid $gray-200;
    background: #ffffff;
    color: $gray-900 !important;
    padding: 0.5rem 1.1rem;
    border-radius: 0.9rem;
    font-weight: 600;
    box-shadow: none;
    
    &:hover,
    &:focus {
      border-color: $primary;
      color: $primary !important;
      box-shadow: 0 2px 6px rgba(14, 165, 233, 0.12);
    }
  }
  
  .dropdown-menu {
    border: 1px solid $gray-200;
    border-radius: 0.75rem;
    padding: 0.5rem;
    box-shadow: 0 20px 40px rgba(12, 74, 110, 0.1);
    min-width: 12rem;
  }

  .dropdown-item {
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    color: $gray-700;
    text-transform: none;
    
    &:hover,
    &:focus,
    &.active {
      background-color: $gray-100;
      color: $gray-900;
    }
  }

  .quarto-navbar-tools .quarto-navigation-tool {
    color: $gray-700 !important;

    &:hover,
    &:focus {
      color: $gray-900 !important;
    }
  }

  .quarto-color-scheme-toggle .bi::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22rgba%2871%2C%2085%2C%20105%2C%201%29%22%20class%3D%22bi%20bi-toggle-off%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M11%204a4%204%200%200%201%200%208H8a4.992%204.992%200%200%200%202-4%204.992%204.992%200%200%200-2-4h3zm-6%208a4%204%200%201%201%200-8%204%204%200%200%201%200%208zM0%208a5%205%200%200%200%205%205h6a5%205%200%200%200%200-10H5a5%205%200%200%200-5%205z%22/%3E%3C/svg%3E") !important;
  }

  .quarto-color-scheme-toggle.alternate .bi::before {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22rgba%2871%2C%2085%2C%20105%2C%201%29%22%20class%3D%22bi%20bi-toggle-on%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M5%203a5%205%200%200%200%200%2010h6a5%205%200%200%200%200-10H5zm6%209a4%204%200%201%201%200-8%204%204%200%200%201%200%208z%22/%3E%3C/svg%3E") !important;
  }
}

// Hero section
.hero {
  text-align: center;
  padding: 8rem 1.5rem 6rem;
  background: transparent;
  
  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, $gray-900 0%, $primary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    font-size: 1.25rem;
    color: $gray-600;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}

// Button styles
.btn-cta-dark,
.btn-cta-ghost {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;
}

.btn-cta-dark {
  background: $gray-900;
  color: white;
  
  &:hover {
    background: $gray-800;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    color: white;
  }
}

.btn-cta-ghost {
  background: transparent;
  color: $gray-900;
  border: 2px solid $gray-300;
  
  &:hover {
    border-color: $primary;
    color: $primary;
    transform: translateY(-2px);
  }
}

// Section styling
.section {
  padding: 5rem 0;
}

:is(h1, h2, h3, h4, h5, h6).section-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  
  &.gradient-text {
    background: linear-gradient(135deg, $primary 0%, $secondary 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

// Features list
.features-list {
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: $gray-900;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: $primary;
        font-weight: bold;
      }
      
      strong {
        color: $gray-900;
        font-weight: 600;
      }
    }
  }
}

// Features carousel
#features-gallery {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(12, 74, 110, 0.08);
  position: relative;
}

#features-gallery .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#features-gallery .carousel-caption {
  background: rgba(12, 74, 110, 0.75);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  text-align: left;
}

#features-gallery .carousel-caption strong,
#features-gallery .carousel-caption b,
#features-gallery .carousel-caption em {
  color: #ffffff;
}

#features-gallery .carousel-caption p,
#features-gallery .carousel-caption strong,
#features-gallery .carousel-caption b {
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

#features-gallery .carousel-indicators {
  margin-bottom: 0.75rem;
}

#features-gallery .carousel-indicators button {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 0.35rem;
}

#features-gallery .carousel-indicators .active,
#features-gallery .carousel-indicators button:hover {
  background-color: $primary;
}

// Index grids (testimonials & cta blocks)
.index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  align-items: stretch;
}

.index-grid .index-g-col-4 {
  display: flex;
  align-items: stretch;
}

.index-grid .card {
  width: 100%;
  height: 100%;
  padding: 1rem 1.35rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(12, 74, 110, 0.08);
  background: white;
  box-shadow: 0 2px 6px rgba(12, 74, 110, 0.04);
}

.get-started-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  max-width: 880px;
  margin: 1.5rem auto 0;
  padding: 0 1rem;
}

.get-started-card {
  background: white;
  border: 1px solid rgba(12, 74, 110, 0.08);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(12, 74, 110, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.get-started-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(14, 165, 233, 0.15);
  border-color: $primary;
}

.get-started-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
}

.get-started-card .btn {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 0.65rem;
  font-weight: 600;
}

.btn-block {
  width: 100%;
}

.index-grid-cta .index-g-col-4 {
  display: flex;
}

.index-grid-cta .btn {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
}

.index-grid-testimonials .card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
}

.index-grid-testimonials .card-text {
  font-size: 0.95rem;
  line-height: 1.45;
  color: $gray-700;
  margin: 0 auto;
  max-width: 18rem;
}

.index-grid-testimonials .blockquote-footer {
  color: $gray-500;
  font-weight: 600;
}

.index-grid-cta {
  margin-top: 1.75rem;
}

.back-to-top {
  margin-top: 2rem;
}

.back-to-top .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

// Capabilities grid
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.capability-card {
  background: transparent;
  border: 1px solid $gray-200;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.15);
    border-color: $primary;
    
    .card-icon {
      background: $primary;
      color: white;
    }
  }
  
  .card-icon {
    width: 3rem;
    height: 3rem;
    background: $gray-100;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: $gray-900;
  }
  
  p {
    color: $gray-600;
    margin: 0;
    flex-grow: 1;
  }
}

// Card illustrations
.card-illustration {
  background: $gray-50;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.card-illustration-deploy {
  .deploy-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .deploy-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 0.375rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
  
  .deploy-info {
    flex: 1;
  }
  
  .deploy-label {
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $gray-500;
  }
  
  .deploy-value {
    font-size: 0.75rem;
    font-weight: 600;
    color: $gray-900;
  }
  
  .deploy-status {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    
    &.deploy-status-success {
      background: #dcfce7;
      color: #16a34a;
    }
    
    &.deploy-status-building {
      background: #fef3c7;
      color: #d97706;
    }
  }
}

.card-illustration-env {
  .form-field {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .field-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: $gray-700;
    margin-bottom: 0.25rem;
  }
  
  .pill {
    display: inline-block;
    background: white;
    border: 1px solid $gray-300;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
  }
}

.card-illustration-secrets {
  .secret-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: white;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .secret-key {
    font-family: 'Courier New', monospace;
    font-weight: 600;
  }
  
  .secret-value {
    color: $gray-500;
  }
  
  .secret-row-add {
    border: 1px dashed $gray-300;
    cursor: pointer;
    
    &:hover {
      border-color: $primary;
      background: $gray-50;
    }
  }
  
  .plus {
    color: $primary;
    font-weight: bold;
    margin-right: 0.5rem;
  }
}

.card-illustration-links {
  .link-row {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .link-label {
    display: block;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $gray-500;
    margin-bottom: 0.25rem;
  }
  
  .link-value {
    display: block;
    color: $primary;
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
  }
}

.card-illustration-select {
  .select-pill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: 1px solid $gray-300;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.5rem;
  }
  
  .select-menu {
    background: white;
    border: 1px solid $gray-200;
    border-radius: 0.375rem;
    padding: 0.25rem;
  }
  
  .select-item {
    display: block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    
    &.select-item-active {
      background: $primary;
      color: white;
    }
  }
}

.card-illustration-domains {
  .domain-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: white;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .domain-name {
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
  }
  
  .domain-status {
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 600;
    color: $gray-500;
    
    &.domain-status-live {
      color: #10b981;
    }
  }
}

.card-illustration-avatars {
  .avatar-stack {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  .avatar-circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: $primary;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.625rem;
    font-weight: 700;
    
    &.avatar-circle-muted {
      background: $gray-300;
      color: $gray-600;
    }
  }
  
  .team-roles {
    font-size: 0.75rem;
    color: $gray-600;
  }
}

.card-illustration-oss {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  
  .oss-badge {
    display: inline-block;
    background: white;
    border: 1px solid $gray-300;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
  }
}

// Marquee animation
.marquee {
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 2;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
}

.marquee-track {
  display: flex;
  gap: 1rem;
  animation: marquee 30s linear infinite;
  width: max-content;
  
  .pill-card {
    background: white;
    border: 1px solid $gray-200;
    border-radius: 1rem;
    padding: 1.5rem;
    min-width: 300px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    flex-shrink: 0;
    
    &:hover {
      border-color: $primary;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(14, 165, 233, 0.1);
    }
    
    strong {
      display: block;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: $gray-900;
    }
    
    span {
      font-size: 0.875rem;
      color: $gray-600;
    }
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

// FAQ styling
.faq-wrap {
  max-width: 800px;
  margin: 0 auto;
}

.faq-accordion {
  .faq-item {
    margin-bottom: 1rem;
    
    details {
      background: white;
      border: 1px solid $gray-200;
      border-radius: 0.75rem;
      overflow: hidden;
      
      &[open] summary {
        border-bottom: 1px solid $gray-200;
      }
    }
    
    summary {
      padding: 1.25rem 1.5rem;
      font-weight: 600;
      font-size: 1.125rem;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s;
      
      &:hover {
        background: $gray-50;
        color: $primary;
      }
      
      &::after {
        content: "+";
        font-size: 1.5rem;
        color: $primary;
        transition: transform 0.2s;
      }
      
      &::-webkit-details-marker {
        display: none;
      }
    }
    
    details[open] summary::after {
      transform: rotate(45deg);
    }
    
    details > *:not(summary) {
      padding: 1rem 1.5rem 1.25rem;
      color: $gray-600;
      line-height: 1.6;
    }
  }
}

// Footer
.page-footer {
  background: $gray-50;
  color: $gray-600;
  padding: 1.75rem 0;
  border-top: 1px solid $gray-200;
  font-size: 0.95rem;
}

.page-footer .nav-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.page-footer .nav-footer-left,
.page-footer .nav-footer-center,
.page-footer .nav-footer-right {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.page-footer .nav-footer-left {
  font-weight: 500;
  color: $gray-700;
}

.page-footer .nav-footer-center,
.page-footer .nav-footer-right {
  color: $gray-600;
}

.page-footer a {
  color: $gray-600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover,
  &:focus {
    color: $gray-900;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 3rem;
  }
  
  .section {
    padding: 3rem 0;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .index-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  
  .page-footer .nav-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

// Utilities
.container-xxl {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.shadow-lg {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.rounded {
  border-radius: 0.75rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
`;
