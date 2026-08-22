window.HELP_IMPROVE_VIDEOJS = false;

function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    if (!bibtexElement || !button) return;

    const copyText = button.querySelector('.copy-text');
    const rawText = bibtexElement.textContent;

    function markCopied() {
        button.classList.add('copied');
        if (copyText) copyText.textContent = 'Cop';
        setTimeout(function () {
            button.classList.remove('copied');
            if (copyText) copyText.textContent = 'Copy';
        }, 2000);
    }

    navigator.clipboard.writeText(rawText).then(markCopied).catch(function () {
        const textArea = document.createElement('textarea');
        textArea.value = rawText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        markCopied();
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (!scrollButton) return;
    scrollButton.classList.toggle('visible', window.pageYOffset > 300);
});

function setupTabs(tabSelector, panelSelector, tabDataAttr, panelDataAttr) {
    const tabs = Array.from(document.querySelectorAll(tabSelector));
    const panels = Array.from(document.querySelectorAll(panelSelector));
    if (tabs.length === 0) return;

    function show(name) {
        tabs.forEach((tab) => {
            const isActive = tab.dataset[tabDataAttr] === name;
            tab.classList.toggle('is-active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });
        panels.forEach((panel) => {
            const isActive = panel.dataset[panelDataAttr] === name;
            panel.hidden = !isActive;
            panel.classList.toggle('is-active', isActive);
        });
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => show(tab.dataset[tabDataAttr]));
    });
}

function setupComingSoonLinks() {
    document.querySelectorAll('[data-coming-soon]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const label = link.getAttribute('data-coming-soon') || 'This resource';
            const note = document.getElementById('release-note');
            if (note) {
                note.textContent = `${label} will be released soon.`;
                note.hidden = false;
            }
        });
    });
}

$(document).ready(function () {
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    if (typeof bulmaCarousel !== 'undefined') {
        bulmaCarousel.attach('.carousel', options);
    }
    if (typeof bulmaSlider !== 'undefined') {
        bulmaSlider.attach();
    }

    setupTabs('[data-figure-tab]', '[data-figure-panel]', 'figureTab', 'figurePanel');
    setupTabs('[data-leaderboard-tab]', '[data-leaderboard-panel]', 'leaderboardTab', 'leaderboardPanel');
    setupComingSoonLinks();
});
