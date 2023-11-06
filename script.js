document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    const targetDiv = document.getElementById("targetDiv");
    let scrollHandler; 

    scrollButton.addEventListener("click", function() {
        const targetPosition = targetDiv.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        scrollHandler = function() {
            const targetBottom = targetDiv.offsetTop + targetDiv.offsetHeight;

            if (window.scrollY + window.innerHeight >= targetBottom) {
                window.removeEventListener("scroll", scrollHandler); 
            }
        };

        window.addEventListener("scroll", scrollHandler);
    });
});