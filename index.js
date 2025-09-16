var titleIp = document.getElementById("title");
var descriptionIp = document.getElementById("description");
var addBtn = document.getElementById("addBtn");
var leftList = document.getElementById("activeList");
var rightList = document.getElementById("completedList");
var draggedElement = null;
function createCard(p) {
    var card = document.createElement("div");
    card.className = "project";
    card.id = p.id;
    card.draggable = true;
    card.innerHTML = "<strong>".concat(p.title, "</strong><p>").concat(p.description, "</p>");
    card.addEventListener("dragstart", function (e) {
        draggedElement = card;
    });
    return card;
}
addBtn.addEventListener("click", function () {
    if (!titleIp.value.trim() || !descriptionIp.value.trim()) {
        return;
    }
    var newProject = {
        id: Date.now().toString(),
        title: titleIp.value.trim(),
        description: descriptionIp.value.trim()
    };
    leftList.appendChild(createCard(newProject));
    titleIp.value = "";
    descriptionIp.value = "";
});
function DropBox(box) {
    box.addEventListener("dragover", function (e) { return e.preventDefault(); });
    box.addEventListener("drop", function () {
        if (draggedElement) {
            box.appendChild(draggedElement);
            draggedElement = null;
        }
    });
}
DropBox(leftList);
DropBox(rightList);
