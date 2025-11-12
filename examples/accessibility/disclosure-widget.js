(function() {
    'use strict';

    function initDisclosures() {
        const disclosureButtons = document.querySelectorAll('.disclosure-button');
        
        disclosureButtons.forEach(button => {
            button.addEventListener('click', toggleDisclosure);
        });
    }

    function toggleDisclosure(event) {
        const button = event.currentTarget;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isExpanded);
        
        const content = findAssociatedContent(button);
        if (content) {
            if (isExpanded) {
                content.setAttribute('hidden', '');
            } else {
                content.removeAttribute('hidden');
            }
        }
    }

    function findAssociatedContent(button) {
        const controlsId = button.getAttribute('aria-controls');
        if (controlsId) {
            return document.getElementById(controlsId);
        }
        return null;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDisclosures);
    } else {
        initDisclosures();
    }

})();
