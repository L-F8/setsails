/**
 * Xu ly cac su kien trang Home (index.html)
 */

// ======= Xu ly phan hover vao select chon ngon ngu cua .home-header =========
const selectionGroupLi = document.querySelectorAll('.selection-group ul li')
selectionGroupLi.forEach((li) => {
    const dropdown = li.querySelector('.transition-default')

    if (!dropdown) return

    li.addEventListener("mouseenter", () => {
        dropdown.classList.add('transition-hover')
    })

    li.addEventListener('mouseleave', () => {
        dropdown.classList.remove('transition-hover')
    })
})


// ======= Xu ly dong/mo overlay phan user cua .home-header ============
const accountLi = document.querySelectorAll('.selection-group>ul>li')
const accOverlay = document.querySelector('.account-overlay')

accountLi[1].addEventListener('click', () => {
    accOverlay.classList.add('visible')
})

document.addEventListener('click', e => {
    if (accOverlay.contains(e.target)) {
        accOverlay.classList.remove('visible')
    }
})


// =============== Xu ly select and search group duoi phan banner ================= //
const homeGroupEqualSelect = document.querySelectorAll('.default-select-div')
homeGroupEqualSelect.forEach((select) => {
    const homeSelectDropdown = select.nextElementSibling

    if (!homeGroupEqualSelect) return

    select.addEventListener('click', (e) => {
        e.stopPropagation()
        homeGroupEqualSelect.forEach((otherSelect) => {
            const otherDropdown = otherSelect.nextElementSibling

            if (otherDropdown !== homeSelectDropdown) {
                otherDropdown.style.display = 'none'
            }
        })

        homeSelectDropdown.style.display = homeSelectDropdown.style.display === 'block' ? 'none' : 'block';
    })


    document.addEventListener('click', (e) => {
        if (!select.contains(e.target) && !homeSelectDropdown.contains(e.target)) {
            homeSelectDropdown.style.display = 'none'
        }
    })

    window.addEventListener('scroll', () => {
        if (homeSelectDropdown.style.display === 'block') {
            const rect = select.getBoundingClientRect()
            const vpHeight = window.innerHeight

            if (rect.bottom + homeSelectDropdown.offsetHeight > vpHeight) {
                homeSelectDropdown.style.top = 'auto'
                homeSelectDropdown.style.bottom = '100%'
            } else {
                homeSelectDropdown.style.bottom = 'auto';
                homeSelectDropdown.style.top = '100%';
            }
        }
    })
})


// ================ Xu ly phan tem sliding Pack Up and Go ================== //
const items = document.querySelectorAll('.tem-item')

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        clearHoverState()

        const active = document.querySelector('.swiper-slide-active.tem-item')

        if (item.classList.contains('swiper-slide-prev')) {
            item.classList.add('is-hover-prev')
            active?.classList.add('is-force-hide')
        }

        if (item.classList.contains('swiper-slide-next')) {
            item.classList.add('is-hover-next')
            active?.classList.add('is-force-hide')
        }
    })

    item.addEventListener('mouseleave', () => {
        clearHoverState()
    })
})

function clearHoverState() {
    document.querySelectorAll('.tem-item').forEach(el => {
        el.classList.remove('is-hover-prev', 'is-hover-next', 'is-force-hide')
    })
}



/**
 * Xy ly phan overlay login/register
 */

// const 
