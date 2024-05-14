function toggleBold() {
    let textarea = document.getElementById('postContent');
    if (textarea.style.fontWeight === 'bold') {
        let bold = document.getElementById('b');
        bold.style.backgroundColor = '#fff';

        textarea.style.fontWeight = 'normal';
    } else {
        let bold = document.getElementById('b');
        bold.style.backgroundColor = 'grey'
        bold.style.width = '3%'
        bold.style.fontSize = '20px'
        bold.style.fontWeight = '500'
        textarea.style.fontWeight = 'bold';
    }
}
function toggleItalic() {
    let textarea = document.getElementById('postContent');
    if (textarea.style.fontStyle === 'italic') {
        let italic = document.getElementById('i');
        italic.style.backgroundColor = '#fff';
        textarea.style.fontStyle = 'normal';
    } else {
        let italic = document.getElementById('i');
        italic.style.backgroundColor = '#8080805e'
        italic.style.width = '2%'
        italic.style.fontSize = '20px'
        italic.style.fontWeight = '500'
        textarea.style.fontStyle = 'italic';
    }
}
function toggleUnderline() {
    let textarea = document.getElementById('postContent');
    if (textarea.style.textDecoration === 'underline') {
        let line = document.getElementById('u');
        line.style.backgroundColor = '#fff';
        textarea.style.textDecoration = 'none';
    } else {
        let line = document.getElementById('u');
        line.style.backgroundColor = '#8080805e'
        line.style.width = '3%'
        line.style.fontSize = '20px'
        line.style.fontWeight = '500'
        textarea.style.textDecoration = 'underline';
    }
}

function changeTextColor() {
    let textarea = document.getElementById('postContent');
    let colorValue = event.target.value;
    textarea.style.color = colorValue;
}

