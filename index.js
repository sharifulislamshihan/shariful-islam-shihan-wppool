const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let index = 0;
const ctx = document.getElementById('myChart').getContext('2d');

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const logoScrolled = document.getElementById('logo-scrolled');
    const share = this.document.getElementById('share');
    const shareScrolled = document.getElementById('share-scrolled');
    const shareBorder = document.getElementById('share-border');
    const btn = document.getElementById('btn');
    const menuButton = document.getElementById('menu-button');

    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-xl');
        logo.classList.add('visible-logo');
        logo.classList.remove('hidden-logo');
        logoScrolled.classList.add('hidden-logo');
        logoScrolled.classList.remove('visible-logo');

        share.classList.add('visible-share');
        share.classList.remove('hidden-share');
        shareScrolled.classList.add('hidden-share');
        shareScrolled.classList.remove('visible-share');

        shareBorder.classList.add('border-green-500');
        shareBorder.classList.remove('border-white');


        btn.classList.remove('text-white', 'bg-blue-800', 'border-white');
        btn.classList.add('text-black', 'bg-white', 'border-black');

        menuButton.classList.remove('text-white');
        menuButton.classList.remove('text-black');
    } else {
        navbar.classList.remove('bg-white', 'shadow-xl');
        logo.classList.add('hidden-logo');
        logo.classList.remove('visible-logo');
        logoScrolled.classList.add('visible-logo');
        logoScrolled.classList.remove('hidden-logo');


        share.classList.add('hidden-share');
        share.classList.remove('visible-share');
        shareScrolled.classList.add('visible-share');
        shareScrolled.classList.remove('hidden-share');

        shareBorder.classList.add('border-white');
        shareBorder.classList.remove('border-green-500');

        btn.classList.remove('text-black', 'bg-white', 'border-black');
        btn.classList.add('text-white', 'bg-blue-800', 'border-white');

        menuButton.classList.remove('text-black');
        menuButton.classList.add('text-white');
    }
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    menu.classList.toggle('hidden');
    menuOpenIcon.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
}


const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'WPPOOL',
                data: [42, 94, 17, 73, 47, 45, 16, 83, 64, 17, 51, 3, 62, 72, 68, 20, 63, 9, 52, 31, 52, 54, 60, 34, 27, 98, 34, 18, 8, 72, 22, 35, 4, 84, 46, 50, 74, 66, 14, 55],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Google',
                data: [72, 24, 13, 25, 56, 35, 6, 81, 82, 74, 20, 17, 16, 90, 25, 99, 59, 10, 33, 57, 0, 95, 43, 66, 24, 47, 82, 34, 6, 20, 90, 52, 94, 9, 7, 2, 55, 76, 85, 48],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                label: 'Microsoft',
                data: [32, 38, 97, 49, 69, 59, 86, 24, 43, 54, 37, 85, 86, 46, 14, 64, 97, 95, 93, 1, 1, 39, 77, 65, 80, 4, 96, 71, 43, 54, 67, 99, 87, 41, 21, 75, 64, 30, 33, 69],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
            {
                label: 'Twitter',
                data: [81, 94, 28, 65, 12, 47, 37, 56, 80, 95, 88, 41, 20, 3, 50, 74, 99, 33, 69, 6, 92, 61, 17, 21, 70, 44, 48, 34, 5, 79, 14, 7, 67, 18, 13, 43, 55, 87, 23, 84],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${index * 40}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 2;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index < 2) ? index + 1 : 0;
    updateCarousel();
});