const marked = window.marked;
const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');
const editorWindow = document.querySelector('#editor-wnd');
const previewWindow = document.querySelector('#preview-wnd');
const expandWindow = document.getElementsByClassName('fa-expand-arrows-alt');

let editorHeight = editorWindow.offsetHeight;

editor.addEventListener('keydown', parseTxt)
editor.addEventListener('keyup', parseTxt)

expandWindow[0].addEventListener('click', function () {
    if (previewWindow.style.display != 'none') {
        previewWindow.style.display = 'none'
        editor.style.height = 3 * parseInt(editorHeight) + 'px';
    } else {
        previewWindow.style.display = 'block'
        editor.style.height = editorHeight + 'px'
    }
})

expandWindow[1].addEventListener('click', function () {
    if (editorWindow.style.display != 'none') {
        editorWindow.style.display = 'none'
    } else {
        editorWindow.style.display = 'block'
    }
})

function parseTxt(e) {
    let addTxt = marked(e.target.value)
    uopdatePreview(addTxt)
}

function uopdatePreview(txt) {
    preview.innerHTML = txt
}