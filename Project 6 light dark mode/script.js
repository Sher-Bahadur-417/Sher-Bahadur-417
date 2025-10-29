 // Dark/Light Mode
        const modeToggle = document.getElementById("mode-toggle");
        modeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });

