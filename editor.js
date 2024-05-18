window.onload = function() {
    // Get the textarea element
    var editor = document.getElementById("editor-area");

    // Check if localStorage has any saved content
    if(localStorage.getItem("editorContent")) {
        editor.value = localStorage.getItem("editorContent");
    }

    // Add event listener for input events
    editor.addEventListener("input", function() {
        // Save content to localStorage
        localStorage.setItem("editorContent", editor.value);
    });
};
