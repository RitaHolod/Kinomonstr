const checkPoint = 600;
let nav_bg = 'transparent';
let opacity = 1;


window.addEventListener("scroll", () =>{
    
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkPoint) {
        nav_bg = 'transparent';
        opacity = 1 - currentScroll / checkPoint;
    }
    else {
        nav_bg = 'rgba(0, 0, 0, 0.6)';
        opacity = 0;
    }

    document.querySelector(".header-nav").style.background = nav_bg;
});

const menu = document.querySelector('.humburger');
const submenu = document.querySelector('.second-menu-mobile');
let is_open = 0;

menu.addEventListener('click', () => {
    if(!is_open) {
    submenu.style.display = 'block';
    is_open = 1;
    } else {
    submenu.style.display = 'none';
    is_open = 0;
    }
});

// Tabs
const tabs_titles = document.querySelectorAll('.tabs-titels>li');
const tabs = document.querySelectorAll('.tabs>div');
let active_tab = 0;

if (tabs_titles.length > 0){
const resetTabs = () => {
    tabs_titles.forEach((tab_t, index) => {
        tabs[index].style.display = 'none';
        tab_t.removeAttribute('class');
    });
};

resetTabs();
tabs[active_tab].style.display = 'block';
tabs_titles[active_tab].className = 'active';


tabs_titles.forEach((tab_t, index) => {
    tab_t.addEventListener('click', () => {
        active_tab = index;
        resetTabs();
        tabs[index].style.display = 'block';
        tab_t.className = 'active';
    });
});
}