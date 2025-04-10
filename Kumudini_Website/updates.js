document.addEventListener("DOMContentLoaded", () => {
    const updateDetails = document.getElementById("update-details");
    const detailTitle = document.getElementById("detail-title");
    const detailContent = document.getElementById("detail-content");
    const updatesGrid = document.querySelector(".updates-grid");

    const loadUpdates = () => {
        let updates = JSON.parse(localStorage.getItem("updates")) || [];
        
        const defaultUpdates = [
            { title: "Update 1", date: "2025-03-01", picture: "https://via.placeholder.com/150", content: "Full content for Update 1...", target: "update-1" },
            { title: "Update 2", date: "2025-03-02", picture: "https://via.placeholder.com/150", content: "Full content for Update 2...", target: "update-2" },
            { title: "Update 3", date: "2025-03-03", picture: "https://via.placeholder.com/150", content: "Full content for Update 3...", target: "update-3" },
            { title: "Update 4", date: "2025-03-04", picture: "https://via.placeholder.com/150", content: "Full content for Update 4...", target: "update-4" },
            { title: "Update 5", date: "2025-03-05", picture: "https://via.placeholder.com/150", content: "Full content for Update 5...", target: "update-5" },
            { title: "Update 6", date: "2025-03-06", picture: "https://via.placeholder.com/150", content: "Full content for Update 6...", target: "update-6" },
            { title: "Update 7", date: "2025-03-07", picture: "https://via.placeholder.com/150", content: "Full content for Update 7...", target: "update-7" },
            { title: "Update 8", date: "2025-03-08", picture: "https://via.placeholder.com/150", content: "Full content for Update 8...", target: "update-8" },
            { title: "Update 9", date: "2025-03-09", picture: "https://via.placeholder.com/150", content: "Full content for Update 9...", target: "update-9" },
            { title: "Update 10", date: "2025-03-10", picture: "https://via.placeholder.com/150", content: "Full content for Update 10...", target: "update-10" },
            { title: "Update 11", date: "2025-03-11", picture: "https://via.placeholder.com/150", content: "Full content for Update 11...", target: "update-11" },
            { title: "Update 12", date: "2025-03-12", picture: "https://via.placeholder.com/150", content: "Full content for Update 12...", target: "update-12" }
        ];

        if (updates.length < 12) {
            updates = [...updates, ...defaultUpdates.slice(updates.length, 12)];
        } else {
            updates = updates.slice(0, 12);
        }

        updates.sort((a, b) => new Date(b.date) - new Date(a.date));
        updatesGrid.innerHTML = "";

        updates.forEach(update => {
            const div = document.createElement("div");
            div.className = "update-item";
            div.innerHTML = `
                <img src="${update.picture}" alt="${update.title}">
                <h3>${update.title}</h3>
                <p class="date">${update.date}</p>
                <p class="preview">${update.content.substring(0, 50)}...</p>
            `;
            div.dataset.target = update.target;
            updatesGrid.appendChild(div);
        });

        const hash = window.location.hash.substring(1);
        if (hash) {
            const update = updates.find(u => u.target === hash);
            if (update) {
                showFullDetails(update);
            }
        }

        document.querySelectorAll(".update-item").forEach(item => {
            item.addEventListener("click", () => {
                const target = item.dataset.target;
                const update = updates.find(u => u.target === target);
                if (update) {
                    showFullDetails(update);
                    window.location.hash = target;
                }
            });
        });
    };

    const showFullDetails = (update) => {
        detailTitle.innerHTML = `
            <h2>${update.title}</h2>
            <p><em>Posted on: ${update.date}</em></p>
        `;
        detailContent.innerHTML = `
            <img src="${update.picture}" alt="${update.title}">
            <p>${update.content}</p>
        `;
        updateDetails.style.display = "flex";
    };

    loadUpdates();
});

function closeDetails() {
    const updateDetails = document.getElementById("update-details");
    updateDetails.style.display = "none";
    window.location.hash = "";
}