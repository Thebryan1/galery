function uploadPhoto() {
    const fileInput = document.getElementById('fileUpload');
    const gallery = document.getElementById('gallery');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
