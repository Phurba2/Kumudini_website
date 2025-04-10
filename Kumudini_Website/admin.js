document.addEventListener("DOMContentLoaded", () => {
    const updateForm = document.getElementById("update-form");
    const updatesList = document.getElementById("admin-updates-list");

    const loadUpdates = () => {
        const updates = JSON.parse(localStorage.getItem("updates")) || [];
        updatesList.innerHTML = "";
        updates.forEach((update, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${update.title} (${update.date}) <button onclick="deleteUpdate(${index})">Delete</button>`;
            updatesList.appendChild(li);
        });
    };

    updateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("update-title").value;
        const date = document.getElementById("update-date").value;
        const pictureInput = document.getElementById("update-picture");
        const content = document.getElementById("update-content").value;
        const target = title.toLowerCase().replace(/\s+/g, "-");

        const file = pictureInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const picture = e.target.result; // Base64 string
                const updates = JSON.parse(localStorage.getItem("updates")) || [];
                updates.push({ title, date, picture, content, target });
                localStorage.setItem("updates", JSON.stringify(updates));
                updateForm.reset();
                loadUpdates();
            };
            reader.readAsDataURL(file);
        }
    });

    window.deleteUpdate = (index) => {
        const updates = JSON.parse(localStorage.getItem("updates")) || [];
        updates.splice(index, 1);
        localStorage.setItem("updates", JSON.stringify(updates));
        loadUpdates();
    };

    loadUpdates();
});
