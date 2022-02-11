const checkSpam = (str) => {
    const stopList = ["viagra", "xxx"];
    const validWord = "***";
    str = str.replace(new RegExp(stopList.join("|"), "ig"), validWord);



    return str;
};

const inter = new Interval(setAllDatesFormats, 1000 * 30);
const addDomComment = (comm) => {
    const commElement = document.querySelector("#idTextComment");

    const pDate = document.createElement("p");
    pDate.classList.add("comment__date");
    pDate.dataset.date = comm.date;
    pDate.innerHTML = formatDate(pDate.dataset.date);

    const pComment = document.createElement("p"); //pre
    pComment.classList.add("comment__text");

    pComment.innerHTML = comm.text.replace(/\n/g, "</br>");

    const div = document.createElement("div");
    div.classList.add("comment");
    div.appendChild(pDate);
    div.appendChild(pComment);

    commElement.parentNode.insertBefore(div, commElement);

    // обновлен
    if (!pastLastDate(comments[comments.length - 1].date)) {
        if (!inter.isRunning()) inter.start();
    } else {
        inter.stop();
    }



}

let comments;
const getArrComments = () => {

    (localStorage.getItem("comments")) ? comments = JSON.parse(localStorage.getItem("comments")): comments = [];

}



const viewComments = () => {
    getArrComments();

    // вывести комментарии
    for (comm of comments) {
        addDomComment(comm);
    }


}
document.addEventListener("DOMContentLoaded", viewComments);




const addComment = (e) => {

    //добавить комментарий в массив

    const commElement = document.querySelector("#idTextComment");
    const comm = {
        text: checkSpam(commElement.value),
        date: new Date()
    };
    comments.push(comm);
    //обновить localstorage
    localStorage.setItem("comments", JSON.stringify(comments));
    addDomComment(comm);
    commElement.value = "";






};


function Interval(fn, time) {
    let timer = false;
    this.start = function () {
        if (!this.isRunning()) {
            console.log("Таймер запущен");
            timer = setInterval(fn, time);
        }
    };
    this.stop = function () {
        console.log("Таймер остановлен");
        clearInterval(timer);
        timer = false;
    };
    this.isRunning = function () {
        return timer !== false;
    };
}


// if (pastLastDate(comments[comments.length - 1].date)){
//     if (!inter.isRunning) inter.start();
// }
// else{
//     inter.stop();
// }









document.querySelector("#idAddComment").addEventListener("click", addComment);