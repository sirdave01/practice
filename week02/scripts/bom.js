// creating the necessary elements for the list

const input = document.querySelector("favchap");

const button = document.querySelector("button");

const list = document.querySelector("list");

//creating elements

const li = document.createElement("li");

const deleteButton = document.createElement("button");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

        // to populate the list with the input value

        li.textContent = input.value;

        //populate the delete button with text
        deleteButton.textContent = "❌";

        // to append the delete button to the list item

        li.append(deleteButton);

        // append the li element to the unordered list in HTML
        list.append(li);
    }
}
);

deleteButton.addEventListener("click", function () {
    // to remove the list item when the delete button is clicked
    list.removeChild(li);
    input.focus(); // to keep the focus on the input field
});

input.value = ""; // clear the input field after adding to the list
input.focus(); // set focus back to the input field for convenience