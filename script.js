const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const filePreview = document.getElementById("file-preview");

// Click to open file browser
dropZone.addEventListener("click", () => fileInput.click());

// File selection through input
fileInput.addEventListener("change", handleFiles);

// Drag and Drop Events
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.background = "rgba(255, 255, 255, 0.2)";
});

dropZone.addEventListener("dragleave", () => {
    dropZone.style.background = "transparent";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.background = "transparent";
    handleFiles(e.dataTransfer);
});

// Handle selected or dropped files
function handleFiles(event) {
    const files = event.files || event.target.files;

    filePreview.innerHTML = ""; // Clear previous previews

    Array.from(files).forEach((file) => {
        const fileItem = document.createElement("div");
        fileItem.classList.add("file-item");
        fileItem.innerHTML = `<p>${file.name}</p> <span>${(file.size / 1024).toFixed(2)} KB</span>`;
        filePreview.appendChild(fileItem);
    });
}
