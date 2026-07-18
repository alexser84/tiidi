/**
 * Tiidi Web Components
 * Reusable Header and Footer for consistency across all pages.
 */

class TiidiHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const root = this.getAttribute('root') || './';
        const activePage = this.getAttribute('active-page') || '';

        this.innerHTML = `
        <style>
            tiidi-header .tiidi-desktop-nav,
            tiidi-header .tiidi-project-cta {
                display: none;
            }

            tiidi-header .tiidi-mobile-toggle {
                display: flex;
            }

            tiidi-header #mobile-menu.hidden {
                display: none;
            }

            @media (min-width: 640px) {
                tiidi-header .tiidi-project-cta {
                    display: flex;
                }
            }

            @media (min-width: 768px) {
                tiidi-header .tiidi-desktop-nav {
                    display: flex;
                }

                tiidi-header .tiidi-mobile-toggle,
                tiidi-header #mobile-menu {
                    display: none !important;
                }
            }

            /* Header scrolled state */
            tiidi-header .tiidi-header-bar {
                background: transparent;
                backdrop-filter: none;
                -webkit-backdrop-filter: none;
                border-bottom: 1px solid transparent;
            }

            tiidi-header .tiidi-header-bar.scrolled {
                background: rgba(11, 17, 20, 0.85);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
        </style>
        <header class="tiidi-header-bar fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 flex justify-center transition-all duration-300">
            <div class="w-full max-w-[1400px] px-2 py-2 flex items-center justify-between relative">
                <div class="flex items-center gap-3 text-white">
                    <a href="${root}index.html" class="flex items-center gap-3">
                        <div class="size-10 text-primary relative flex items-center justify-center">
                            <svg aria-label="Logo Tiidi" class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12H22V38" stroke="#0da6f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" style="filter: drop-shadow(0 0 8px rgba(13,166,242,0.9));"></path>
                                <circle cx="10" cy="12" fill="#0da6f2" r="2.5" style="filter: drop-shadow(0 0 8px rgba(13,166,242,0.9));"></circle>
                                <path d="M38 12H26V38" stroke="#7a2df6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" style="filter: drop-shadow(0 0 8px rgba(122,45,246,0.8));"></path>
                                <circle cx="38" cy="12" fill="#7a2df6" r="2.5" style="filter: drop-shadow(0 0 8px rgba(122,45,246,0.8));"></circle>
                                <path d="M22 24H26" stroke="#fff" stroke-linecap="round" stroke-width="3" style="filter: drop-shadow(0 0 8px rgba(255,255,255,0.9));"></path>
                                <circle cx="24" cy="38" fill="#fff" r="2" style="filter: drop-shadow(0 0 10px rgba(255,255,255,1));"></circle>
                                <circle cx="22" cy="18" fill="#0da6f2" r="1.5"></circle>
                                <circle cx="26" cy="30" fill="#7a2df6" r="1.5"></circle>
                            </svg>
                        </div>
                        <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Tiidi</h2>
                    </a>
                </div>

                <!-- Desktop Nav -->
                <nav class="tiidi-desktop-nav items-center gap-8">
                    <a class="${activePage === 'inicio' ? 'text-primary neon-text' : 'text-gray-300 hover:text-primary hover:neon-text'} text-sm font-medium transition-all relative group" href="${root}index.html">
                        Inicio
                        <span class="absolute bottom-0 left-0 ${activePage === 'inicio' ? 'w-full' : 'w-0'} h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a class="${activePage === 'servicios' ? 'text-primary neon-text' : 'text-gray-300 hover:text-primary hover:neon-text'} text-sm font-medium transition-all relative group" href="${root}servicios/index.html">
                        Servicios
                        <span class="absolute bottom-0 left-0 ${activePage === 'servicios' ? 'w-full' : 'w-0'} h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a class="${activePage === 'industrias' ? 'text-primary neon-text' : 'text-gray-300 hover:text-primary hover:neon-text'} text-sm font-medium transition-all relative group" href="${root}industrias/index.html">
                        Industrias
                        <span class="absolute bottom-0 left-0 ${activePage === 'industrias' ? 'w-full' : 'w-0'} h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a class="${activePage === 'blog' ? 'text-primary neon-text' : 'text-gray-300 hover:text-primary hover:neon-text'} text-sm font-medium transition-all relative group" href="${root}blog/index.html">
                        Blog
                        <span class="absolute bottom-0 left-0 ${activePage === 'blog' ? 'w-full' : 'w-0'} h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a class="${activePage === 'contacto' ? 'text-primary neon-text' : 'text-gray-300 hover:text-primary hover:neon-text'} text-sm font-medium transition-all relative group" href="/contacto/">
                        Contacto
                        <span class="absolute bottom-0 left-0 ${activePage === 'contacto' ? 'w-full' : 'w-0'} h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                </nav>

                <div class="flex items-center gap-2 lg:gap-4">
                    <a href="/contacto/" class="tiidi-project-cta neon-button group items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-white text-white hover:text-primary text-sm font-bold shadow-neon hover:shadow-neon-hover transition-all duration-300 relative overflow-hidden">
                        <span class="truncate relative z-10">Iniciar Proyecto</span>
                        <span class="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform relative z-10">arrow_forward</span>
                    </a>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="tiidi-mobile-toggle size-10 items-center justify-center text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                </div>

                <!-- Mobile Menu Overlay -->
                <div id="mobile-menu" class="hidden absolute top-full left-0 w-full mt-4 bg-background-dark/95 backdrop-blur-sm rounded-3xl p-6 border border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <a class="${activePage === 'inicio' ? 'text-primary' : 'text-gray-300'} py-2 px-4 hover:bg-white/5 rounded-xl transition-all" href="${root}index.html">Inicio</a>
                    <a class="${activePage === 'servicios' ? 'text-primary' : 'text-gray-300'} py-2 px-4 hover:bg-white/5 rounded-xl transition-all" href="${root}servicios/index.html">Servicios</a>
                    <a class="${activePage === 'industrias' ? 'text-primary' : 'text-gray-300'} py-2 px-4 hover:bg-white/5 rounded-xl transition-all" href="${root}industrias/index.html">Industrias</a>
                    <a class="${activePage === 'blog' ? 'text-primary' : 'text-gray-300'} py-2 px-4 hover:bg-white/5 rounded-xl transition-all" href="${root}blog/index.html">Blog</a>
                    <a class="${activePage === 'contacto' ? 'text-primary' : 'text-gray-300'} py-2 px-4 hover:bg-white/5 rounded-xl transition-all" href="/contacto/">Contacto</a>
                    <div class="h-[1px] bg-white/10 my-2"></div>
                    <a href="/contacto/" class="flex items-center justify-center rounded-full h-12 bg-primary text-white text-sm font-bold shadow-neon">
                        Iniciar Proyecto
                    </a>
                </div>
            </div>
        </header>
        `;

        // Scroll Logic - add scrolled class when page is scrolled
        const headerEl = this.querySelector('.tiidi-header-bar');
        if (headerEl) {
            const updateScroll = () => {
                if (window.scrollY > 40) {
                    headerEl.classList.add('scrolled');
                } else {
                    headerEl.classList.remove('scrolled');
                }
            };
            updateScroll();
            window.addEventListener('scroll', updateScroll, { passive: true });
        }

        // Mobile Menu Logic
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        const icon = btn?.querySelector('.material-symbols-outlined');

        if (btn && menu) {
            btn.addEventListener('click', () => {
                const isHidden = menu.classList.contains('hidden');
                if (isHidden) {
                    menu.classList.remove('hidden');
                    if (icon) icon.textContent = 'close';
                } else {
                    menu.classList.add('hidden');
                    if (icon) icon.textContent = 'menu';
                }
            });

            // Close menu on resize
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    menu.classList.add('hidden');
                    if (icon) icon.textContent = 'menu';
                }
            });
        }
    }
}

class TiidiFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const root = this.getAttribute('root') || './';

        this.innerHTML = `
        <style>
            tiidi-footer .tiidi-footer-grid {
                display: grid;
                grid-template-columns: 1fr;
            }

            tiidi-footer .tiidi-footer-bottom {
                display: flex;
                flex-direction: column;
            }

            @media (min-width: 768px) {
                tiidi-footer .tiidi-footer-grid {
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                }

                tiidi-footer .tiidi-footer-bottom {
                    flex-direction: row;
                }
            }
        </style>
        <footer class="border-t border-white/5 bg-[#0B1114] py-20 w-full flex justify-center">
            <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-20">
                <div class="tiidi-footer-grid grid gap-12 text-left">
                    <div class="flex flex-col gap-6 md:col-span-1">
                        <div class="flex items-center gap-3 text-white">
                            <div class="size-10 text-primary relative flex items-center justify-center">
                                <svg aria-label="Logo Tiidi" class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12H22V38" stroke="#0da6f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                    <circle cx="10" cy="12" fill="#0da6f2" r="2.5"></circle>
                                    <path d="M38 12H26V38" stroke="#7a2df6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                    <circle cx="38" cy="12" fill="#7a2df6" r="2.5"></circle>
                                    <path d="M22 24H26" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
                                    <circle cx="24" cy="38" fill="#fff" r="2"></circle>
                                </svg>
                            </div>
                            <h3 class="text-white text-2xl font-black tracking-tighter">Tiidi</h3>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            Soluciones de software a medida para empresas chilenas. Operamos desde Santiago para todo Chile.
                        </p>
                        <div class="flex gap-4">
                            <a href="https://www.linkedin.com/company/tiidi" class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <span class="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a href="https://github.com/tiidi" class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <span class="material-symbols-outlined text-xl">code</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-6">Servicios</h4>
                        <ul class="flex flex-col gap-4 text-sm text-gray-500">
                            <li><a href="${root}servicios/sitios-web-ecommerce.html" class="hover:text-primary transition-colors">Web & E-commerce</a></li>
                            <li><a href="${root}servicios/apps-moviles.html" class="hover:text-primary transition-colors">Apps Móviles</a></li>
                            <li><a href="${root}servicios/software-empresarial.html" class="hover:text-primary transition-colors">Software a Medida</a></li>
                            <li><a href="${root}servicios/automatizacion-ia.html" class="hover:text-primary transition-colors">Automatización IA</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-6">Empresa</h4>
                        <ul class="flex flex-col gap-4 text-sm text-gray-500">
                            <li><a href="${root}nosotros/index.html" class="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="${root}blog/index.html" class="hover:text-primary transition-colors">Blog & Noticias</a></li>
                            <li><a href="/contacto/" class="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-6">Contacto</h4>
                        <ul class="flex flex-col gap-4 text-sm text-gray-500">
                            <li class="flex gap-3">
                                <span class="material-symbols-outlined text-primary text-lg">mail</span>
                                <a href="mailto:contacto@tiidi.cl" class="hover:text-primary transition-colors">contacto@tiidi.cl</a>
                            </li>
                            <li class="flex gap-3">
                                <span class="material-symbols-outlined text-primary text-lg">call</span>
                                <a href="tel:+56949574770" class="hover:text-primary transition-colors">+56 9 4957 4770</a>
                            </li>
                            <li class="flex gap-3">
                                <span>Santiago, Chile</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="tiidi-footer-bottom mt-20 pt-8 border-t border-white/5 justify-between items-center gap-6">
                    <p class="text-xs text-gray-600">© 2026 Tiidi. Todos los derechos reservados.</p>
                    <div class="flex gap-8 text-xs text-gray-600">
                        <a href="${root}privacidad.html" class="hover:text-white transition-colors">Privacidad</a>
                        <a href="${root}terminos.html" class="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('tiidi-header', TiidiHeader);
customElements.define('tiidi-footer', TiidiFooter);

function trackTiidiConversion(eventName, params = {}) {
    if (!window.gtag) return;
    gtag('event', eventName, {
        page_path: window.location.pathname,
        ...params
    });
}

document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);

    if (href === '/contacto/' || href.endsWith('/contacto/')) {
        trackTiidiConversion('cta_click', {
            cta_text: label || 'contacto',
            cta_destination: '/contacto/'
        });
        return;
    }

    if (href.startsWith('https://wa.me/')) {
        trackTiidiConversion('whatsapp_click', {
            cta_text: label || 'WhatsApp'
        });
        return;
    }

    if (href.startsWith('mailto:')) {
        trackTiidiConversion('email_click', {
            cta_text: label || 'email'
        });
        return;
    }

    if (href.startsWith('tel:')) {
        trackTiidiConversion('phone_click', {
            cta_text: label || 'telefono'
        });
    }
});

// === Hero Slider ===
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides.length === 0 || dots.length === 0) return;

    let currentSlide = 0;
    let autoRotate;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
                slide.style.opacity = '1';
            } else {
                slide.style.display = 'none';
                slide.style.opacity = '0';
            }
        });
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('bg-white/20', 'hover:bg-white/40');
                dot.classList.add('bg-primary', 'shadow-neon');
            } else {
                dot.classList.add('bg-white/20', 'hover:bg-white/40');
                dot.classList.remove('bg-primary', 'shadow-neon');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function startAutoRotate() {
        autoRotate = setInterval(nextSlide, 5000);
    }

    function stopAutoRotate() {
        clearInterval(autoRotate);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoRotate();
            showSlide(i);
            startAutoRotate();
        });
    });

    showSlide(0);
    startAutoRotate();

    const slider = document.getElementById('hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoRotate);
        slider.addEventListener('mouseleave', startAutoRotate);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlider);
} else {
    initHeroSlider();
}
