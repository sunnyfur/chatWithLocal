const parseFIO = (str) => {
    str = str.replace(/[^а-яА-Яa-zA-Z\s]/g, "");
    let fio = str.match(/[а-яА-Яa-zA-Z]{1,}/g);
    (fio) ? "" : fio = [];

    const toUpperFirst = (str) => {

        return str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

    }


    document.querySelector("#idName").value = fio[1] ? toUpperFirst(fio[1]) : "";
    document.querySelector("#idSurname").value = fio[0] ? toUpperFirst(fio[0]) : "";
    document.querySelector("#idSecondName").value = fio[2] ? toUpperFirst(fio[2]) : "";
    return str;
}

const setFIO = (e) => {
    e.target.value = parseFIO(e.target.value);


};

document.querySelector("#idFIO").addEventListener("input", setFIO);
document.querySelector("#idFIO").addEventListener("change", (e) => {
    e.target.value = `${document.querySelector("#idSurname").value} ${document.querySelector("#idName").value} ${document.querySelector("#idSecondName").value}`;
    localStorage.setItem("userFIO", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#idFIO").value = parseFIO(localStorage.getItem("userFIO"));


});