type Project = {
  id: string;
  title: string;
  description: string;
};

const titleIp = document.getElementById("title") as HTMLInputElement;
const descriptionIp = document.getElementById(
  "description"
) as HTMLTextAreaElement
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

const leftList = document.getElementById("activeList") as HTMLElement;
const rightList = document.getElementById("completedList") as HTMLElement;

let draggedElement: HTMLElement | null = null;

function createCard(p: Project): HTMLElement {
  const card = document.createElement("div");

  card.className = "project";
  card.id = p.id;
  card.draggable = true;
  card.innerHTML = `<strong>${p.title}</strong><p>${p.description}</p>`;

  card.addEventListener("dragstart", (e) => {
    draggedElement = card;
  });

  return card;
}

addBtn.addEventListener("click" , () => {
  if (!titleIp.value.trim() || !descriptionIp.value.trim() ) {
    return;
  }

  const newProject : Project = {
    id : Date.now().toString(),
    title : titleIp.value.trim(),
    description : descriptionIp.value.trim()
  }

  leftList.appendChild(createCard(newProject))

  titleIp.value = ""
  descriptionIp.value = ""  
})

function DropBox(box: HTMLElement) {
  box.addEventListener("dragover", (e) => e.preventDefault());

  box.addEventListener("drop", () => {
    if (draggedElement) {
      box.appendChild(draggedElement);
      draggedElement = null;
    }
  });
}

DropBox(leftList);
DropBox(rightList);

