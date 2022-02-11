document.querySelector("#idSelectFile").addEventListener("change", (e) => {
    const image = e.target.files[0];

    const reader = new FileReader();
    const bannerImage = document.querySelector(".ava");
    reader.onload = (e) => {
        bannerImage.src = e.target.result;
        localStorage.setItem("image-base64", e.target.result);
    };
    reader.readAsDataURL(image);

});


document.addEventListener("DOMContentLoaded", () => {

    const dataImage = localStorage.getItem('image-base64');
    if (dataImage) {
        let bannerImg = document.querySelector(".ava");
        // bannerImg.src = dataImage;
        bannerImg.src = dataImage;
    }




});