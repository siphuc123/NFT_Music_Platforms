// thay đổi ảnh và lưu tạm để reset trang
const fileInput = document.getElementById("fileInput");
const image = document.getElementById("image");
const resetButton = document.getElementById("resetButton");
const editButton = document.querySelector(".hiden-edit");

function triggerFileInput() {
    fileInput.click();
}

fileInput.addEventListener("change", function() {
    const selectedFile = fileInput.files[0]; 
    if (selectedFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            image.src = event.target.result;
            localStorage.setItem('selectedImage', event.target.result);
        };
        reader.readAsDataURL(selectedFile);
    }
});

resetButton.addEventListener("click", function() {
    localStorage.removeItem('selectedImage');
    image.src = "";
});

editButton.addEventListener("click", function() {
    triggerFileInput();
});

window.addEventListener("load", function() {
    const savedImage = localStorage.getItem('selectedImage');
    if (savedImage) {
        image.src = savedImage;
    }
});



// Phân chia nội dung
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    const selectedPage = document.getElementById(`page${pageNumber}`);
    selectedPage.classList.add('active');

    const listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.classList.remove('active');
    });
    document.querySelector(`li:nth-child(${pageNumber})`).classList.add('active');
}


// scoll trang và dừng khi kết thúc
const scrollableFrame = document.getElementById('scrollable-frame');

    scrollableFrame.addEventListener('scroll', function() {
        if (scrollableFrame.scrollHeight - scrollableFrame.scrollTop === scrollableFrame.clientHeight) {
        window.scrollBy(0, 100); 
        }
    });


