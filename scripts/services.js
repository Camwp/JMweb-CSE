document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            console.log('Clicked tab:', tabId);
            showContent(tabId);
        });
    });

    function showContent(tabId) {
        console.log('Showing content for tab:', tabId);
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.classList.remove('active');
        });

        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        } else {
            console.log('Content not found for tab:', tabId);
        }
    }

    // Show initial content (e.g., first tab)
    showContent(tabs[0].getAttribute('data-tab'));
});
