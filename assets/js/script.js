// Modal js
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.modal-close')

function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// Mobile menu js
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

mobileMenu.onclick = function () {
    var isClosed = header.clientHeight == headerHeight
    // console.log(isClosed)
    if (isClosed) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

// Tự động đóng menu khi click thẻ a
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault()
        }else{
            header.style.height = null
        }
    }
}

