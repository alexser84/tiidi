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
        const active = (this.getAttribute('active-page') || '').toLowerCase();

        const items = [
            { key: 'inicio', label: 'Inicio', href: `${root}index.html` },
            { key: 'servicios', label: 'Servicios', href: `${root}servicios/index.html` },
            { key: 'industrias', label: 'Industrias', href: `${root}industrias/index.html` },
            { key: 'blog', label: 'Blog', href: `${root}blog/index.html` },
            { key: 'contacto', label: 'Contacto', href: '/contacto/' },
        ];

        const desktopLink = (it) => {
            const isActive = it.key === active;
            const a = isActive
                ? 'text-primary neon-text text-sm font-medium transition-all relative group'
                : 'text-gray-300 hover:text-primary hover:neon-text text-sm font-medium transition-all relative group';
            const u = isActive
                ? 'absolute bottom-0 left-0 w-full h-0.5 bg-primary group-hover:w-full transition-all duration-300'
                : 'absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300';
            return `<a class="${a}" href="${it.href}">${it.label}<span class="${u}"></span></a>`;
        };

        const mobileLink = (it) => {
            const c = it.key === active
                ? 'text-primary py-2 px-4 hover:bg-white/5 rounded-xl transition-all'
                : 'text-gray-300 py-2 px-4 hover:bg-white/5 rounded-xl transition-all';
            return `<a class="${c}" href="${it.href}">${it.label}</a>`;
        };

        this.innerHTML = `
        <style>
            tiidi-header .tiidi-desktop-nav, tiidi-header .tiidi-project-cta { display: none; }
            tiidi-header .tiidi-mobile-toggle { display: flex; }
            @media (min-width: 640px) { tiidi-header .tiidi-project-cta { display: flex; } }
            @media (min-width: 768px) {
                tiidi-header .tiidi-desktop-nav { display: flex; }
                tiidi-header .tiidi-mobile-toggle, tiidi-header .tiidi-drawer, tiidi-header .tiidi-overlay { display: none !important; }
            }
            tiidi-header .tiidi-header-bar { background: transparent; border-bottom: 1px solid transparent; }
            tiidi-header .tiidi-header-bar.scrolled { background: rgba(11,17,20,0.98); border-bottom: 1px solid rgba(255,255,255,0.08); }
            tiidi-header .tiidi-drawer { transform: translateX(100%); visibility: hidden; transition: transform .3s ease, visibility 0s linear .3s; }
            tiidi-header .tiidi-drawer.is-open { transform: translateX(0); visibility: visible; transition: transform .3s ease, visibility 0s linear 0s; }
            tiidi-header .tiidi-overlay { opacity: 0; visibility: hidden; transition: opacity .3s ease, visibility 0s linear .3s; }
            tiidi-header .tiidi-overlay.is-open { opacity: 1; visibility: visible; transition: opacity .3s ease, visibility 0s linear 0s; }
            @media (prefers-reduced-motion: reduce) {
                tiidi-header .tiidi-drawer, tiidi-header .tiidi-overlay { transition: none; }
            }
        </style>
        <header class="tiidi-header-bar fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-4 flex justify-center">
            <div class="w-full max-w-[1400px] px-2 py-2 flex items-center justify-between relative">
                <div class="flex items-center gap-3 text-white">
                    <a href="${root}index.html" class="flex items-center gap-3">
                        <div class="size-10 text-primary relative flex items-center justify-center">
                            <svg aria-label="Logo Tiidi" class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12H22V38" stroke="#0da6f2" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" style="filter: drop-shadow(0 0 8px rgba(13,166,242,0.9));"></path>
                                <circle cx="10" cy="12" fill="#0da6f2" r="2.5" style="filter: drop-shadow(0 0 8px rgba(13,166,242,0.9));"></circle>
                                <path d="M38 12H26V38" stroke="#7a2df6" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" style="filter: drop-shadow(0 0 8px rgba(122,45,246,0.8));"></path>
                                <circle cx="38" cy="12" fill="#7a2df6" r="2.5" style="filter: drop-shadow(0 0 8px rgba(122,45,246,0.8));"></circle>
                                <circle cx="22" cy="18" fill="#0da6f2" r="1.5"></circle>
                                <circle cx="26" cy="30" fill="#7a2df6" r="1.5"></circle>
                            </svg>
                        </div>
                        <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Tiidi</h2>
                    </a>
                </div>

                <nav class="tiidi-desktop-nav items-center gap-8">
                    ${items.map(desktopLink).join('\n                    ')}
                </nav>

                <div class="flex items-center gap-2 lg:gap-4">
                    <a href="/contacto/" class="tiidi-project-cta neon-button group items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-white text-white hover:text-primary text-sm font-bold shadow-neon hover:shadow-neon-hover transition-all duration-300 relative overflow-hidden">
                        <span class="truncate relative z-10">Iniciar Proyecto</span>
                        <span class="material-symbols-outlined ml-1 text-base group-hover:translate-x-1 transition-transform relative z-10">arrow_forward</span>
                    </a>
                    <button type="button" class="tiidi-mobile-toggle items-center justify-center text-white bg-white/5 rounded-full" style="width: 44px; height: 44px; touch-action: manipulation; -webkit-tap-highlight-color: transparent; cursor: pointer; position: relative; z-index: 110;" aria-label="Abrir menu" aria-expanded="false">
                        <span class="material-symbols-outlined" style="font-size: 24px; pointer-events: none;">menu</span>
                    </button>
                </div>

            </div>
        </header>
        <div class="tiidi-overlay fixed inset-0" style="z-index: 110; background: rgba(0,0,0,0.55);"></div>
        <div class="tiidi-drawer fixed top-0 right-0 h-full flex flex-col p-6 gap-1" style="width: 82%; max-width: 20rem; z-index: 120; background: rgba(11,17,20,0.99); border-left: 1px solid rgba(255,255,255,0.08); box-shadow: -12px 0 40px rgba(0,0,0,0.55);" role="dialog" aria-modal="true" aria-label="Menú de navegación" aria-hidden="true">
            <div class="flex items-center justify-between mb-4">
                <span class="text-white text-base font-bold tracking-tight">Menú</span>
                <button type="button" class="tiidi-drawer-close flex items-center justify-center rounded-full bg-white/5 text-white" style="width: 44px; height: 44px; touch-action: manipulation; -webkit-tap-highlight-color: transparent; cursor: pointer;" aria-label="Cerrar menú">
                    <span class="material-symbols-outlined" style="pointer-events: none;">close</span>
                </button>
            </div>
            ${items.map(mobileLink).join('\n            ')}
            <div class="h-[1px] bg-white/10 my-3"></div>
            <a href="/contacto/" class="flex items-center justify-center rounded-full h-12 bg-primary text-white text-sm font-bold shadow-neon">Iniciar Proyecto</a>
        </div>
        `;

        const btn = this.querySelector('.tiidi-mobile-toggle');
        const menu = this.querySelector('.tiidi-drawer');
        const overlay = this.querySelector('.tiidi-overlay');
        const closeBtn = this.querySelector('.tiidi-drawer-close');
        if (!btn || !menu) return;

        function open() {
            menu.classList.add('is-open');
            if (overlay) overlay.classList.add('is-open');
            menu.setAttribute('aria-hidden', 'false');
            btn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            if (closeBtn) closeBtn.focus();
        }
        function close(returnFocus) {
            menu.classList.remove('is-open');
            if (overlay) overlay.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            if (returnFocus) btn.focus();
        }
        function toggle() {
            if (menu.classList.contains('is-open')) close(true); else open();
        }

        // Respond on pointerdown (earliest touch signal) para respuesta inmediata al toque.
        let pointerHandledAt = 0;
        if (window.PointerEvent) {
            btn.addEventListener('pointerdown', function(e) {
                if (e.isPrimary === false) return;
                if (e.button && e.button !== 0) return;
                pointerHandledAt = Date.now();
                toggle();
            });
        }
        btn.addEventListener('click', function() {
            if (Date.now() - pointerHandledAt < 700) return; // swallow ghost click
            toggle();
        });

        if (closeBtn) closeBtn.addEventListener('click', function() { close(true); });
        if (overlay) overlay.addEventListener('click', function() { close(true); });
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() { close(false); });
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menu.classList.contains('is-open')) close(true);
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) close(false);
        });

        // Scroll state
        const headerEl = this.querySelector('.tiidi-header-bar');
        if (headerEl) {
            const updateScroll = function() {
                if (window.scrollY > 40) headerEl.classList.add('scrolled');
                else headerEl.classList.remove('scrolled');
            };
            updateScroll();
            window.addEventListener('scroll', updateScroll, { passive: true });
        }
    }
}

customElements.define('tiidi-header', TiidiHeader);

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

// === Hero Tabs (propuestas comerciales) ===
function initHeroTabs() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const tablist = hero.querySelector('[role="tablist"]');
    const tabs = Array.from(hero.querySelectorAll('[role="tab"]'));
    const panels = Array.from(hero.querySelectorAll('[role="tabpanel"]'));
    if (!tablist || tabs.length === 0 || panels.length !== tabs.length) return;

    // Activa el comportamiento de pestañas (CSS). Sin JS, los paneles quedan apilados.
    hero.setAttribute('data-enhanced', '');

    let current = 0;
    let autoTimer = null;
    let autoStopped = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setFocusable(panel, on) {
        panel.querySelectorAll('a, button').forEach(el => {
            if (on) el.removeAttribute('tabindex');
            else el.setAttribute('tabindex', '-1');
        });
    }

    function activate(i, opts) {
        opts = opts || {};
        i = (i + tabs.length) % tabs.length;
        const changed = i !== current;
        tabs.forEach((tab, j) => {
            const on = j === i;
            tab.setAttribute('aria-selected', on ? 'true' : 'false');
            tab.tabIndex = on ? 0 : -1;
        });
        if (opts.focusTab) tabs[i].focus();
        panels.forEach((panel, j) => {
            const on = j === i;
            panel.classList.toggle('is-active', on);
            panel.setAttribute('aria-hidden', on ? 'false' : 'true');
            setFocusable(panel, on);
        });
        if (opts.user && changed) {
            trackTiidiConversion('hero_tab_change', { hero_tab: tabs[i].textContent.trim() });
        }
        current = i;
    }

    // Autoplay 8s (no arranca con reduce-motion)
    function nextAuto() { activate(current + 1); }
    function startAuto() { if (reduceMotion || autoStopped) return; stopAuto(); autoTimer = setInterval(nextAuto, 8000); }
    function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
    function stopAutoPermanent() { autoStopped = true; stopAuto(); }

    // Interacción con pestañas (click) -> detiene autoplay y cambia
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => { stopAutoPermanent(); activate(i, { user: true }); });
    });

    // Teclado (patrón WAI-ARIA tabs, activación automática)
    tablist.addEventListener('keydown', (e) => {
        let n = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = current + 1;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = current - 1;
        else if (e.key === 'Home') n = 0;
        else if (e.key === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); stopAutoPermanent(); activate(n, { focusTab: true, user: true }); }
    });

    // Analítica de CTAs del hero
    hero.addEventListener('click', (e) => {
        const link = e.target.closest('[data-hero-event]');
        if (!link) return;
        const label = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
        trackTiidiConversion(link.getAttribute('data-hero-event'), { cta_text: label });
        if (link.hasAttribute('data-hero-wa') || (link.getAttribute('href') || '').startsWith('https://wa.me/')) {
            trackTiidiConversion('hero_whatsapp_click', { cta_text: label });
        }
    });

    // Pausar autoplay en hover / foco; reanudar al salir (si no se detuvo)
    hero.addEventListener('mouseenter', stopAuto);
    hero.addEventListener('mouseleave', startAuto);
    hero.addEventListener('focusin', stopAuto);
    hero.addEventListener('focusout', (e) => { if (!hero.contains(e.relatedTarget)) startAuto(); });

    // Swipe táctil entre paneles
    const panelsWrap = hero.querySelector('.hero-panels');
    if (panelsWrap) {
        let sx = 0, sy = 0, tracking = false;
        panelsWrap.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; tracking = true; }, { passive: true });
        panelsWrap.addEventListener('touchend', (e) => {
            if (!tracking) return; tracking = false;
            const t = e.changedTouches[0]; const dx = t.clientX - sx, dy = t.clientY - sy;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) { stopAutoPermanent(); activate(current + (dx < 0 ? 1 : -1), { user: true }); }
        }, { passive: true });
    }

    // Estado inicial
    activate(0);
    startAuto();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroTabs);
} else {
    initHeroTabs();
}
