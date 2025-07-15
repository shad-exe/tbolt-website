// T-sHARE Step Workflow Logic
// Handles badges, file uploads, processing, column selection, dashboard, and swipe arrows

document.addEventListener('DOMContentLoaded', function() {
    // Step badges
    const badge1 = document.getElementById('badge1');
    const badge2 = document.getElementById('badge2');
    const badge3 = document.getElementById('badge3');
    const badge4 = document.getElementById('badge4');

    // Step buttons
    const processLookupBtn = document.getElementById('processLookupBtn');
    const processDumpBtn = document.getElementById('processDumpBtn');
    const viewDashboardBtn = document.getElementById('viewDashboardBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    // File inputs
    const genreLookupInput = document.getElementById('genreLookupInput');
    const barcDumpInput = document.getElementById('barcDumpInput');

    // Swipe arrows
    const swipeLeft = document.getElementById('swipeLeft');
    const swipeRight = document.getElementById('swipeRight');
    const workflowContainer = document.getElementById('workflowContainer');

    // Step state
    let genreProcessed = false;
    let dumpProcessed = false;

    // Swipe logic
    swipeLeft.addEventListener('click', function() {
        workflowContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });
    swipeRight.addEventListener('click', function() {
        workflowContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });

    // Step 1: Process Genre Lookup
    processLookupBtn.addEventListener('click', function() {
        if (!genreLookupInput.files.length) {
            alert('Please upload a Genre Lookup file first.');
            return;
        }
        // Simulate processing
        badge1.style.background = '#22c55e'; // green
        badge1.textContent = '1';
        genreProcessed = true;
        processLookupBtn.classList.add('btn-success');
        processLookupBtn.classList.remove('btn-primary');
        processLookupBtn.textContent = 'Processed';
        processLookupBtn.disabled = true;
    });

    // Step 2: Process BARC Dump
    processDumpBtn.addEventListener('click', function() {
        if (!barcDumpInput.files.length) {
            alert('Please upload a BARC Channel Share Dump first.');
            return;
        }
        if (!genreProcessed) {
            alert('Please process Genre Lookup first.');
            return;
        }
        // Simulate processing
        badge2.style.background = '#22c55e'; // green
        badge2.textContent = '2';
        dumpProcessed = true;
        processDumpBtn.classList.add('btn-success');
        processDumpBtn.classList.remove('btn-primary');
        processDumpBtn.textContent = 'Processed';
        processDumpBtn.disabled = true;
    });

    // Step 3: Column selection (no badge change, but can add logic)
    // Step 4: Dashboard & Download
    viewDashboardBtn.addEventListener('click', function() {
        if (!genreProcessed || !dumpProcessed) {
            alert('Please process previous steps first.');
            return;
        }
        badge4.style.background = '#22c55e';
        badge4.textContent = '4';
        // Simulate dashboard view
        alert('Dashboard will show top 5 channels by region.');
    });
    downloadBtn.addEventListener('click', function() {
        if (!genreProcessed || !dumpProcessed) {
            alert('Please process previous steps first.');
            return;
        }
        // Simulate download
        alert('Processed Channel Share file will be downloaded.');
    });
});
