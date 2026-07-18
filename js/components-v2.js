/**
 * Tiidi Web Components
 * Reusable Header and Footer for consistency across all pages.
 */



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

customElements.define('tiidi-footer', TiidiFooter);

function trackTiidiConversion(eventName, params = {}) {
    if (!window.gtag) return;
    gtag('event', eventName, {
        page_path: window.location.pathname,
        ...params
    });
}

// Tracking - capture phase, sincrono, no bloquea clicks
document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
    if (href === '/contacto/' || href.endsWith('/contacto/')) trackTiidiConversion('cta_click', { cta_text: label || 'contacto', cta_destination: '/contacto/' });
    else if (href.startsWith('https://wa.me/')) trackTiidiConversion('whatsapp_click', { cta_text: label || 'WhatsApp' });
    else if (href.startsWith('mailto:')) trackTiidiConversion('email_click', { cta_text: label || 'email' });
    else if (href.startsWith('tel:')) trackTiidiConversion('phone_click', { cta_text: label || 'telefono' });
}, true);

// === Hero Slider ===
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    if (slides.length === 0) return;

    let currentSlide = 0;
    let autoRotate;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
            } else {
                slide.classList.add('opacity-0');
                slide.classList.remove('opacity-100');
            }
        });
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('bg-white/40', 'hover:bg-white/70');
                dot.classList.add('bg-primary', 'shadow-[0_0_10px_rgba(13,166,242,0.8)]');
            } else {
                dot.classList.add('bg-white/40', 'hover:bg-white/70');
                dot.classList.remove('bg-primary', 'shadow-[0_0_10px_rgba(13,166,242,0.8)]');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startAutoRotate() {
        autoRotate = setInterval(nextSlide, 5000);
    }

    function stopAutoRotate() {
        clearInterval(autoRotate);
    }

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoRotate();
            showSlide(i);
            startAutoRotate();
        });
    });

    // Arrow navigation
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoRotate(); prevSlide(); startAutoRotate(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoRotate(); nextSlide(); startAutoRotate(); });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { stopAutoRotate(); prevSlide(); startAutoRotate(); }
        if (e.key === 'ArrowRight') { stopAutoRotate(); nextSlide(); startAutoRotate(); }
    });

    // Start
    showSlide(0);
    startAutoRotate();

    // Pause on hover
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
