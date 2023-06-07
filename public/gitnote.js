var iniciado = false;

let allNotas = ['La 0', 'La# 0', 'Si 0',
    'Do 1', 'Do# 1', 'Re 1', 'Re# 1', 'Mi 1', 'Fa 1', 'Fa# 1', 'Sol 1', 'Sol# 1', 'La 1', 'La# 1', 'Si 1',
    'Do 2', 'Do# 2', 'Re 2', 'Re# 2', 'Mi 2', 'Fa 2', 'Fa# 2', 'Sol 2', 'Sol# 2', 'La 2', 'La# 2', 'Si 2',
    'Do 3', 'Do# 3', 'Re 3', 'Re# 3', 'Mi 3', 'Fa 3', 'Fa# 3', 'Sol 3', 'Sol# 3', 'La 3', 'La# 3', 'Si 3',
    'Do 4', 'Do# 4', 'Re 4', 'Re# 4', 'Mi 4', 'Fa 4', 'Fa# 4', 'Sol 4', 'Sol# 4', 'La 4', 'La# 4', 'Si 4',
    'Do 5', 'Do# 5', 'Re 5', 'Re# 5', 'Mi 5', 'Fa 5', 'Fa# 5', 'Sol 5', 'Sol# 5', 'La 5', 'La# 5', 'Si 5',
    'Do 6', 'Do# 6', 'Re 6', 'Re# 6', 'Mi 6', 'Fa 6', 'Fa# 6', 'Sol 6', 'Sol# 6', 'La 6', 'La# 6', 'Si 6',
    'Do 7', 'Do# 7', 'Re 7', 'Re# 7', 'Mi 7', 'Fa 7', 'Fa# 7', 'Sol 7', 'Sol# 7', 'La 7', 'La# 7', 'Si 7',
    'Do 8',]

let allNotasAme = ['A 0', 'A# 0', 'B 0',
    'C 1', 'C# 1', 'D 1', 'D# 1', 'E 1', 'F 1', 'F# 1', 'G 1', 'G# 1', 'A 1', 'A# 1', 'B 1',
    'C 2', 'C# 2', 'D 2', 'D# 2', 'E 2', 'F 2', 'F# 2', 'G 2', 'G# 2', 'A 2', 'A# 2', 'B 2',
    'C 3', 'C# 3', 'D 3', 'D# 3', 'E 3', 'F 3', 'F# 3', 'G 3', 'G# 3', 'A 3', 'A# 3', 'B 3',
    'C 4', 'C# 4', 'D 4', 'D# 4', 'E 4', 'F 4', 'F# 4', 'G 4', 'G# 4', 'A 4', 'A# 4', 'B 4',
    'C 5', 'C# 5', 'D 5', 'D# 5', 'E 5', 'F 5', 'F# 5', 'G 5', 'G# 5', 'A 5', 'A# 5', 'B 5',
    'C 6', 'C# 6', 'D 6', 'D# 6', 'E 6', 'F 6', 'F# 6', 'G 6', 'G# 6', 'A 6', 'A# 6', 'B 6',
    'C 7', 'C# 7', 'D 7', 'D# 7', 'E 7', 'F 7', 'F# 7', 'G 7', 'G# 7', 'A 7', 'A# 7', 'B 7',
    'C 8',]

document.addEventListener("keydown", handleKeyPress); // Escucha el evento de tecla presionada

function handleKeyPress(event) {
    if (event.keyCode === 38 || event.code === "ArrowUp" ||
        event.keyCode === 40 || event.code === "ArrowDown" ||
        event.keyCode === 39 || event.code === "ArrowRight" ||
        event.keyCode === 37 || event.code === "ArrowLeft") {
        refrescar();
    }
}

const acordeon = document.getElementsByClassName('contenedor');

for (i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
        this.classList.toggle('activa')
    })
}

function empezar() {
    var notas = document.getElementsByClassName("nota");
    const btnRef = document.getElementById("botonRef");
    if (!iniciado) {
        var correcto = _setNotas();
        if (correcto) {
            iniciado = true;
            document.getElementById("botonIni").innerHTML = "Terminar";
            btnRef.disabled = false;
        }
    } else {
        for (var i = 0; i < notas.length; i++) {
            notas[i].innerText = '';
        }
        iniciado = false;
        document.getElementById("botonIni").innerHTML = "Empezar";
        var notaInicio = document.getElementById("notaInicio");
        var notaFin = document.getElementById("notaFin");
        notaInicio.value = '';
        notaInicio.valueOf = '';
        notaFin.value = '';
        notaFin.valueOf = '';
        btnRef.disabled = true;
    }
}

function refrescar() {
    var notas = document.getElementsByClassName("nota");
    if (!iniciado) {
        return;
    } else {
        _setNotas();
    }
}

function _setNotas() {
    var notas = document.getElementsByClassName("nota");
    var selectNotas = _getSelectNotas();
    if (selectNotas == undefined) {
        return false;
    }
    var numeroAleatorio;
    for (var i = 0; i < notas.length; i++) {
        // Generar número aleatorio entre 0 y el número de notas seleccionadas - 1 
        numeroAleatorio = Math.floor(Math.random() * selectNotas.length);
        notas[i].innerText = selectNotas[numeroAleatorio];
    }
    return true;
}

function _getSelectNotas() {
    var notaInicio = document.getElementById("notaInicio");
    var notaFin = document.getElementById("notaFin");
    var numNotaInicio;
    var numNotaFin;

    var notaInicioValida = false;
    var notaFinValida = false;

    var allNotasSelect = _setNomenclaturaNotas();

    for (var i = 0; i < allNotasSelect.length; i++) {
        if (_cleanStr(allNotasSelect[i]) == _cleanStr(notaInicio.value)) {
            numNotaInicio = i;
            notaInicioValida = true;
        }
        if (_cleanStr(allNotasSelect[i]) == _cleanStr(notaFin.value)) {
            numNotaFin = i + 1;
            notaFinValida = true;
        }
    }

    if (!notaInicioValida) {
        window.alert("Nota inicio no válida: " + notaInicio.value);
        return;
    }

    if (!notaFinValida) {
        window.alert("Nota fin no válida: " + notaFin.value);
        return;
    }

    // Si es mayor la nota inicio que la fin, se lanza un error
    if (numNotaInicio > numNotaFin) {
        window.alert("Nota inicio debe de ser anterior a nota fin");
        return;
    }

    return allNotasSelect.slice(numNotaInicio, numNotaFin);
}

function _setNomenclaturaNotas() {
    var notaInicio = document.getElementById("notaInicio");
    var notaFin = document.getElementById("notaFin");

    if (!document.getElementById("checkBox").checked) {
        if (notaInicio.value == "") {
            notaInicio.value = 'La 0';
            notaInicio.valueOf = 'La 0';
        }

        if (notaFin.value == "") {
            notaFin.value = 'Do 8';
            notaFin.valueOf = 'Do 8';
        }
        return allNotas;
    } else {
        if (notaInicio.value == "") {
            notaInicio.value = 'A 0';
            notaInicio.valueOf = 'A 0';
        }

        if (notaFin.value == "") {
            notaFin.value = 'C 8';
            notaFin.valueOf = 'C 8';
        }
        return allNotasAme;
    }
}

function _cleanStr(str) {
    while (str.indexOf("\t") > -1) {
        str = str.replace("\t", "");
    }
    while (str.indexOf(" ") > -1) {
        str = str.replace(" ", "");
    }
    return str.toUpperCase();
}

function visualizarOpcion(str) {
    switch (str) {
        case 'modo':
            document.getElementById('modoOp').style.display = "block";
            document.getElementById('ayudaOp').style.display = "none";
            document.getElementById('sobreOp').style.display = "none";
            break;
        case 'ayuda':
            document.getElementById('modoOp').style.display = "none";
            document.getElementById('ayudaOp').style.display = "block";
            document.getElementById('sobreOp').style.display = "none";
            break;
        case 'sobre':
            document.getElementById('modoOp').style.display = "none";
            document.getElementById('ayudaOp').style.display = "none";
            document.getElementById('sobreOp').style.display = "block";
            break;

    }
}

function limpiarOp() {
    document.getElementById('modoOp').style.display = "none";
    document.getElementById('ayudaOp').style.display = "none";
    document.getElementById('sobreOp').style.display = "none";
}