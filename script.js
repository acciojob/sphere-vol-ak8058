function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission and page reload

    let radius = parseFloat(document.getElementById('radius').value);
    let volumeField = document.getElementById('volume');

    // Validate input
    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
        return;
    }

    // Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
}

// Ensure the function runs when the form is submitted
window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};

