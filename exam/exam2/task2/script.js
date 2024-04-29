const ol = document.querySelector("ol");
const submit = document.querySelector('input[type="submit"]');
const input = document.querySelector('input[type="text"]');

submit.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ol.appendChild(li);
  const sil = document.createElement("button");
  sil.textContent = "Delete";
  li.appendChild(sil);
  sil.addEventListener("click", () => {
    li.remove();
  });
  const hazir = document.createElement("button");
  hazir.textContent = "Hazır";
  li.appendChild(hazir);
  hazir.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  input.value = "";
});
