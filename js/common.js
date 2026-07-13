/**
 * Common Utilities and Theme Manager
 * Shared functionality across all pages
 */

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupThemeToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeToggleIcon();
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    setupThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    updateThemeToggleIcon() {
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');
        if (sunIcon && moonIcon) {
            if (this.theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }
}

/**
 * Utility Functions
 */

const Utils = {
    /**
     * Clamp value between min and max
     */
    clamp(value, min, max) {
        return Math.max(min, Math.min(value, max));
    },

    /**
     * Linear interpolation
     */
    lerp(a, b, t) {
        return a + (b - a) * t;
    },

    /**
     * Map value from one range to another
     */
    map(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },

    /**
     * Round to decimal places
     */
    round(value, decimals = 2) {
        return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    },

    /**
     * Format number with suffix
     */
    formatNumber(value) {
        if (Math.abs(value) >= 1e6) return (value / 1e6).toFixed(2) + 'M';
        if (Math.abs(value) >= 1e3) return (value / 1e3).toFixed(2) + 'K';
        return value.toFixed(2);
    },

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Request animation frame with fallback
     */
    requestAnimationFrame(callback) {
        return window.requestAnimationFrame(callback) ||
               setTimeout(callback, 1000 / 60);
    }
};

/**
 * Settings Manager
 */
class SettingsManager {
    constructor() {
        this.settings = this.loadSettings();
    }

    loadSettings() {
        const defaults = {
            theme: 'light',
            animationSpeed: 1,
            gridEnabled: true,
            labelsEnabled: true,
            showFormula: true,
            showMeasurements: true
        };

        const saved = localStorage.getItem('settings');
        return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    }

    saveSetting(key, value) {
        this.settings[key] = value;
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }

    getSetting(key) {
        return this.settings[key];
    }

    resetSettings() {
        localStorage.removeItem('settings');
        this.settings = this.loadSettings();
    }
}

/**
 * Keyboard Shortcut Handler
 */
class KeyboardShortcuts {
    constructor() {
        this.shortcuts = new Map();
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    register(key, callback) {
        this.shortcuts.set(key.toUpperCase(), callback);
    }

    handleKeyDown(e) {
        const key = e.key.toUpperCase();
        if (this.shortcuts.has(key) && !this.isInputActive(e.target)) {
            this.shortcuts.get(key)();
            e.preventDefault();
        }
    }

    isInputActive(target) {
        return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
    }
}

/**
 * Canvas Utility
 */
class CanvasUtils {
    static downloadCanvas(canvas, filename = 'simulation.png') {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = filename;
        link.click();
    }

    static clearCanvas(ctx, width, height) {
        ctx.clearRect(0, 0, width, height);
    }

    static drawLine(ctx, x1, y1, x2, y2, color = '#000', width = 1) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    static drawCircle(ctx, x, y, radius, color = '#000', fill = false) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    static drawArrow(ctx, fromX, fromY, toX, toY, color = '#000', size = 8) {
        const headlen = size;
        const angle = Math.atan2(toY - fromY, toX - fromX);

        // Draw line
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Draw arrowhead
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }

    static drawText(ctx, text, x, y, options = {}) {
        const defaults = {
            font: '12px Arial',
            color: '#000',
            align: 'left',
            baseline: 'top'
        };
        const config = { ...defaults, ...options };

        ctx.font = config.font;
        ctx.fillStyle = config.color;
        ctx.textAlign = config.align;
        ctx.textBaseline = config.baseline;
        ctx.fillText(text, x, y);
    }
}

/**
 * Touch Handler for mobile
 */
class TouchHandler {
    constructor(element) {
        this.element = element;
        this.touches = [];
        this.lastDistance = 0;
        this.init();
    }

    init() {
        this.element.addEventListener('touchstart', (e) => this.onTouchStart(e));
        this.element.addEventListener('touchmove', (e) => this.onTouchMove(e));
        this.element.addEventListener('touchend', (e) => this.onTouchEnd(e));
    }

    onTouchStart(e) {
        this.touches = Array.from(e.touches);
    }

    onTouchMove(e) {
        this.touches = Array.from(e.touches);
    }

    onTouchEnd(e) {
        this.touches = Array.from(e.touches);
    }

    getDistance(touch1, touch2) {
        const dx = touch2.clientX - touch1.clientX;
        const dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    isZoom() {
        return this.touches.length === 2;
    }

    getZoomFactor() {
        if (this.touches.length !== 2) return 1;
        const newDistance = this.getDistance(this.touches[0], this.touches[1]);
        const factor = newDistance / this.lastDistance;
        this.lastDistance = newDistance;
        return factor;
    }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    new ThemeManager();

    // Initialize settings manager (globally available)
    window.settingsManager = new SettingsManager();

    // Initialize keyboard shortcuts (globally available)
    window.keyboardShortcuts = new KeyboardShortcuts();

    // Setup mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navbarMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.remove('active');
            });
        });
    }
});
