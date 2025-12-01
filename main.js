// main.js

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".nav-tab");

    function activateTabByURL() {
        const path = window.location.pathname;
        
        if (path.includes("overview")) {
            setActive("nav-overview");
        } 
        else if (path.includes("talent-calc")) {
            setActive("nav-talentcalc");
        }
        else if (path.includes("database")) {
            setActive("nav-database");
        }
    }

    function setActive(tabName) {
        tabs.forEach(tab => {
            if (tab.dataset.tab === tabName) {
                tab.classList.add("text-yellow-400", "font-semibold", "border-b-2", "border-yellow-400");
            } else {
                tab.classList.remove("text-yellow-400", "font-semibold", "border-b-2", "border-yellow-400");
                tab.classList.add("text-gray-300");
            }
        });
    }

    activateTabByURL();
});
