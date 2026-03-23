// Waiting for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Creating the main modal wrapper
  var modal = document.createElement("section");
  modal.className = "modal fade";
  modal.id = "taskModal";
  modal.setAttribute("tabindex", "-1");

  // Creating the modal dialog and content containers
  var dialog = document.createElement("section");
  dialog.className = "modal-dialog";

  var content = document.createElement("section");
  content.className = "modal-content";

  // Building the modal header with title and close button
  var header = document.createElement("header");
  header.className = "modal-header";

  var title = document.createElement("h5");
  title.className = "modal-title";
  title.innerText = "Create Task";

  var closeBtn = document.createElement("button");
  closeBtn.className = "btn-close";
  closeBtn.setAttribute("data-bs-dismiss", "modal");

  header.appendChild(title);
  header.appendChild(closeBtn);

  // Building the modal body with task name input and priority dropdown
  var body = document.createElement("section");
  body.className = "modal-body";

  var label1 = document.createElement("label");
  label1.className = "form-label";
  label1.innerText = "Task name";

  var input = document.createElement("input");
  input.className = "form-control";
  input.placeholder = "Enter task";

  var label2 = document.createElement("label");
  label2.className = "form-label mt-3";
  label2.innerText = "Priority";

  var select = document.createElement("select");
  select.className = "form-select";

  var option1 = document.createElement("option");
  option1.innerText = "Normal";

  var option2 = document.createElement("option");
  option2.innerText = "Urgent";

  select.appendChild(option1);
  select.appendChild(option2);

  body.appendChild(label1);
  body.appendChild(input);
  body.appendChild(label2);
  body.appendChild(select);

  // Building the modal footer with Cancel and Save buttons
  var footer = document.createElement("footer");
  footer.className = "modal-footer";

  var cancelBtn = document.createElement("button");
  cancelBtn.className = "btn btn-secondary";
  cancelBtn.setAttribute("data-bs-dismiss", "modal");
  cancelBtn.innerText = "Cancel";

  var saveBtn = document.createElement("button");
  saveBtn.className = "btn btn-primary";
  saveBtn.innerText = "Save";

  footer.appendChild(cancelBtn);
  footer.appendChild(saveBtn);

  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);

  dialog.appendChild(content);
  modal.appendChild(dialog);

  document.body.appendChild(modal);

  // Bootstrap modal
  var modalElement = document.getElementById("taskModal");
  new bootstrap.Modal(modalElement);
});
