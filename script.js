let progress = 0;

function updateSpinner() {
    const spinner = document.querySelector(".spinner");
    const percentage = document.querySelector(".spinner-container .percentage");
    spinner.style.borderTopColor = "#3498db";
    percentage.textContent = `${progress}%`;

    if (progress >= 100) {
        clearInterval(spinnerInterval);
        spinner.style.borderTopColor = "transparent";
    }
}

let spinnerInterval;

function startProgress() {
    progress = 0;
    updateSpinner();

    spinnerInterval = setInterval(() => {
        progress += 1;
        updateSpinner();
    }, 50);
}
