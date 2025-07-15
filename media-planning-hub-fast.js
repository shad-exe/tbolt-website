// Fast Media Planning Hub JavaScript - Optimized for Speed

// Simplified initialization - no complex classes
let appReady = false;

// Simple tool URL mapping
const toolUrls = {
    'spots-scheduler': 'Spots Scheduler Enhanced UI.html',
    't-schedule': 'T-sCHED.html',
    'pt-npt-calculator': 'T-pRIME.html',
    'channel-share-analyzer': 'Channel Share Analyzer Enhanced UI.html'
};

const toolUrlsNewTab = {
    'spots-scheduler': 'Spots Scheduler Enhanced UI.html',
    't-schedule': 'T-sCHED.html',
    'pt-npt-calculator': 'T-pRIME.html',
    'channel-share-analyzer': 'backup/Channel Share Analyzer.html'
};

// Fast tool opening functions
window.openToolInSameTab = function(toolType) {
    console.log('Opening tool:', toolType);
    if (toolUrls[toolType]) {
        // Check if iframe container exists (newer hub design)
        const toolContainer = document.getElementById('toolContainer');
        const toolFrame = document.getElementById('toolFrame');
        const mainContent = document.getElementById('mainContent');
        const currentToolTitle = document.getElementById('currentToolTitle');
        
        if (toolContainer && toolFrame && mainContent) {
            // Use iframe functionality
            toolFrame.src = toolUrls[toolType];
            mainContent.style.display = 'none';
            toolContainer.classList.remove('hidden');
            
            // Set tool title
            if (currentToolTitle) {
                const toolNames = {
                    't-schedule': 'T-sCHED',
                    'pt-npt-calculator': 'T-pRIME Calculator',
                    'channel-share-analyzer': 'T-sHARE',
                    'spots-scheduler': 'Spots Scheduler'
                };
                currentToolTitle.textContent = toolNames[toolType] || 'Tool';
            }
        } else {
            // Fallback to direct navigation
            window.location.href = toolUrls[toolType];
        }
    } else {
        console.error('Tool not found:', toolType);
    }
};

window.openToolInNewTab = function(toolType) {
    console.log('Opening tool in new tab:', toolType);
    if (toolUrlsNewTab[toolType]) {
        window.open(toolUrlsNewTab[toolType], '_blank');
    } else {
        console.error('Tool not found:', toolType);
    }
};

// Simple navigation functions
window.scrollToTools = function() {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
};

window.scrollToFeatures = function() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
};

window.goToHome = function(e) {
    if (e) e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
};

window.goToTools = function(e) {
    if (e) e.preventDefault();
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
};

window.goToFeatures = function(e) {
    if (e) e.preventDefault();
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
};

window.goToAbout = function(e) {
    if (e) e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
};

window.goToContact = function(e) {
    if (e) e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};

// Simple initialization
function fastInit() {
    console.log('Fast initialization complete');
    appReady = true;
    
    // Add message listener for iframe communication
    window.addEventListener('message', function(event) {
        if (event.data === 'goBackToHome') {
            goBackToHomeFromTool();
        }
    });
    
    // Add back to home button listener
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', goBackToHomeFromTool);
    }
    
    // Add open in new tab button listener
    const openInNewTabBtn = document.getElementById('openInNewTab');
    if (openInNewTabBtn) {
        openInNewTabBtn.addEventListener('click', function() {
            const toolFrame = document.getElementById('toolFrame');
            if (toolFrame && toolFrame.src) {
                window.open(toolFrame.src, '_blank');
            }
        });
    }
}

// Function to go back to home from tool
function goBackToHomeFromTool() {
    const toolContainer = document.getElementById('toolContainer');
    const mainContent = document.getElementById('mainContent');
    const toolFrame = document.getElementById('toolFrame');
    
    if (toolContainer && mainContent) {
        toolContainer.classList.add('hidden');
        mainContent.style.display = 'block';
        
        // Clear iframe src to stop any running processes
        if (toolFrame) {
            toolFrame.src = '';
        }
        
        // Scroll to home section
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize immediately when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fastInit);
} else {
    fastInit();
}
