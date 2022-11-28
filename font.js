function FONT() {

    const font = document.getElementById('dropbox1').value;
    let x = document.getElementById('movie');                    

    switch(font) {
        case "Arial":
            x.style.fontFamily = 'Arial';
            break;
        case "cursive":
            x.style.fontFamily = 'cursive';
            break;
        case "Georgia":
            x.style.fontFamily = 'Georgia, serif';
            break;
        case "Helvetica":
            x.style.fontFamily = 'Helvetica, sans-serif';
            break;
    }
}

function Size() {

    const size = document.getElementById('dropbox2').value;
    let x = document.getElementById('movie');                    

    switch(size) {
        case "10":
            x.style.fontSize = '10px';
            break;
        case "11":
            x.style.fontSize = '11px';
            break;
        case "12":
            x.style.fontSize = '12px';
            break;
        case "13":
            x.style.fontSize = '13px';
                break;
        case "14":
            x.style.fontSize = '14px';
            break;
        case "15":
            x.style.fontSize = '15px';
            break;
        case "16":
            x.style.fontSize = '16px';
            break;
        case "17":
            x.style.fontSize = '17px';
            break;
        case "18":
            x.style.fontSize = '18px';
            break;
        case "19":
            x.style.fontSize = '19px';
            break;
        case "20":
            x.style.fontSize = '20px';
            break;
    }
}
