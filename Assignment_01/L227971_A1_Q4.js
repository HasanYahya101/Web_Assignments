document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const addButton = document.getElementById("addButton");
    const nameList = document.getElementById("nameList");

    addButton.addEventListener("click", function () {
        const name = nameInput.value.trim();

        if (name !== "") {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
            nameInput.value = "";
        } else {
            alert("Please enter a valid name.");
        }
    });
});
