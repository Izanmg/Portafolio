function copyEmail() {
    const email = "izanmg2706@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const message = document.getElementById("copy-message");
        message.classList.remove("hidden");
        message.classList.add("visible");

        setTimeout(() => {
            message.classList.remove("visible");
            message.classList.add("hidden");
        }, 2000);
    });
}
