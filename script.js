const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navlinksMobileNav");

mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinksItems = navLinks.querySelectorAll(".navlinMob");
navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});


const AbtCon = document.getElementById("AbtCon");
const MoreCon = document.getElementById("MoreCon");
const DropAbout = document.getElementById("DropAbout");
const DropMore = document.getElementById("DropMore");

AbtCon.addEventListener("click", () => {
    DropAbout.classList.toggle("active");
    DropMore.classList.remove("active");
});

MoreCon.addEventListener("click", () => {
    DropMore.classList.toggle("active");
    DropAbout.classList.remove("active");

});

window.addEventListener("scroll", () => {
    const mainContent = document.getElementById("mainContent");
    const mapFtur = document.getElementById("mapFtur");
    //any screen bigger than 913px width
    if (window.innerWidth >= 913) {
        if (window.scrollY >= 200) {
            mainContent.style.backgroundColor = "#ffffff";
            mapFtur.style.left = "70%";
        } else {
            mainContent.style.backgroundColor = "#466e5aff";
            mapFtur.style.left = "0px";
        }

    } else {
        if (window.scrollY >= 100) {
            mainContent.style.backgroundColor = "#ffffff";
            mapFtur.style.left = "0%";
        } else {
            mainContent.style.backgroundColor = "#466e5aff";
            mapFtur.style.left = "-50%";
        }
    }
});


window.addEventListener("scroll", () => {
    const ARftur = document.getElementById("ARftur");
    if (window.innerWidth >= 913) {
        if (window.scrollY >= 350) {
            ARftur.style.left = "70%";
        } else {
            ARftur.style.left = "0px";
        }
    } else {
        if (window.scrollY >= 200) {
            ARftur.style.left = "0%";
        } else {
            ARftur.style.left = "-50%";
        }
    }
});

window.addEventListener("scroll", () => {
    const Crtftur = document.getElementById("Crtftur");
    if (window.innerWidth >= 913) {
        if (window.scrollY >= 550) {
            Crtftur.style.left = "70%";
        } else {
            Crtftur.style.left = "0px";
        }
    } else {
        if (window.scrollY >= 400) {
            Crtftur.style.left = "0%";
        } else {
            Crtftur.style.left = "-50%";
        }
    }
});

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 913) {
        if (window.scrollY >= 200) {
            document.querySelectorAll('.normal').forEach(el => {
                el.classList.add('animate');
                el.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.normal').forEach(el => {
                el.classList.remove('animate');
                el.classList.add('hidden');
            });
        }
    } else {
        if (window.scrollY >= 100) {
            document.querySelectorAll('.normal').forEach(el => {
                el.classList.add('animate');
                el.classList.remove('hidden');
            });
        } else {
            document.querySelectorAll('.normal').forEach(el => {
                el.classList.remove('animate');
                el.classList.add('hidden');
            });
        }
    }
});


const logo = document.getElementById("Logo");
logo.addEventListener("mouseenter", () => {
    logo.src = "images/logo.svg";
    logo.style.filter = "drop-shadow(-1.5px 1.5px 0px #ffffff)";
});

logo.addEventListener("mouseleave", () => {
    logo.src = "images/logoWhite.svg";
    logo.style.filter = "none";

});

const MiniLogo = document.getElementById("MiniLogo");
MiniLogo.addEventListener("mouseenter", () => {
    MiniLogo.src = "images/LogoAnimated.gif";
});
MiniLogo.addEventListener("mouseleave", () => {
    MiniLogo.src = "images/logo.svg";

});

const Que1 = document.getElementById("Que1-Text");
const Que2 = document.getElementById("Que2-Text");
const Que3 = document.getElementById("Que3-Text");
const Que4 = document.getElementById("Que4-Text");

const Ans1 = document.getElementById("Ans1-Text");
const Ans2 = document.getElementById("Ans2-Text");
const Ans3 = document.getElementById("Ans3-Text");
const Ans4 = document.getElementById("Ans4-Text");


Que1.addEventListener("click", () => {
    if (Ans1.style.display == "none") {
        Ans1.style.display = "flex";
        Ans2.style.display = "none";
        Ans3.style.display = "none";
        Ans4.style.display = "none";

    } else {
        Ans1.style.display = "none";
    }
});

Que2.addEventListener("click", () => {
    if (Ans2.style.display == "none") {
        Ans2.style.display = "flex";
        Ans1.style.display = "none";
        Ans3.style.display = "none";
        Ans4.style.display = "none";

    } else {
        Ans2.style.display = "none";
    }
});

Que3.addEventListener("click", () => {
    if (Ans3.style.display == "none") {
        Ans3.style.display = "flex";
        Ans1.style.display = "none";
        Ans2.style.display = "none";
        Ans4.style.display = "none";

    } else {
        Ans3.style.display = "none";
    }
});

Que4.addEventListener("click", () => {
    if (Ans4.style.display == "none") {
        Ans4.style.display = "flex";
        Ans1.style.display = "none";
        Ans2.style.display = "none";
        Ans3.style.display = "none";
    } else {
        Ans4.style.display = "none";
    }
});

const stopbtn = document.getElementById("stop");
stopbtn.addEventListener("click", () => {
    document.querySelectorAll('.CustomerRevs').forEach(el => {
        if (el.classList.contains('animate')) {
            el.classList.remove('animate');
            el.classList.add('Stop');
            stopbtn.textContent = "▶"
        } else {
            el.classList.remove('Stop');
            el.classList.add('animate');
            stopbtn.textContent = "❚❚"

        }
    });
});
