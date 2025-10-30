function showToast(title, message, type = 'normal', duration = 4000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    const toastIconContainer = document.getElementById('toast-icon-container');
    const toastCloseButton = document.getElementById('toast-close-button');

    if (!toastComponent) return;

    toastComponent.className = 'fixed bottom-8 right-8 p-4 rounded-xl shadow-xl z-50 opacity-0 transition-all duration-300 transform translate-y-full flex items-start gap-4';

    let bgColor, borderColor, textColor, iconSvg;

    switch (type) {
        case 'success':
            bgColor = 'bg-blue-50';
            borderColor = 'border-blue-400';
            textColor = 'text-blue-800';
            iconSvg = `<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            break;
        case 'error':
            bgColor = 'bg-red-50';
            borderColor = 'border-red-400';
            textColor = 'text-red-800';
            iconSvg = `<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            break;
        default:
            bgColor = 'bg-white';
            borderColor = 'border-gray-300';
            textColor = 'text-gray-800';
            iconSvg = `<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            break;
    }

    toastComponent.classList.add(bgColor, borderColor, textColor);
    toastComponent.style.borderWidth = '1px';
    toastIconContainer.innerHTML = iconSvg;
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toastComponent.classList.remove('opacity-0', 'translate-y-full');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    const hideToast = () => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-full');
    };

    const timeoutId = setTimeout(hideToast, duration);

    toastCloseButton.onclick = () => {
        clearTimeout(timeoutId);
        hideToast();
    };
}