document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeBtn = document.getElementById("darkModeToggle");
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Show/Hide Results Table
    const toggleResultsBtn = document.getElementById("toggleResults");
    const resultsTable = document.getElementById("resultsTable");
    toggleResultsBtn.addEventListener("click", function () {
        if (resultsTable.style.display === "none" || resultsTable.style.display === "") {
            resultsTable.style.display = "table";
        } else {
            resultsTable.style.display = "none";
        }
    });

    // Contact Button
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", function () {
        alert("Feel free to reach out via email: garethneville3@gmail.com");
    });
});