const formatDate = (date = new Date()) => {
    date = new Date(Date.parse(date));
    const gapDate = (new Date() - date) / 1000; // разница в секундах
    let format;

    if (gapDate <= 1) {
        format = "прямо сейчас";
    } else if (gapDate < 60) {
        format = `${Math.floor(gapDate) } сек. назад`;
    } else if (gapDate / 60 < 60) {
        format = `${Math.floor( gapDate / 60)} мин. назад`;
    } else {

        const tD = (num) => {

            num = num.toString();
            (num.length >= 2) ? num = num.substr(-2, 2): num = "0" + num;
            return num;

        };

        format = `${tD(date.getDate())}.${tD((date.getMonth()+1))}.${tD(date.getFullYear())} ${tD(date.getHours())}:${tD(date.getMinutes())}`;
    }

    return format;

};

const pastLastDate = (date) => {
    date = new Date(Date.parse(date));
    const gapDate = (new Date() - date) / 1000 / 60;
    if (gapDate < 60) return false;
    return true;

};

const setAllDatesFormats = () => {
    const dataComments = document.querySelectorAll(".comment__date");
    for (elem of dataComments) {
        elem.innerHTML = formatDate(elem.dataset.date);
    }
    if (pastLastDate(comments[comments.length - 1].date)) inter.stop();
}






//тесты
// alert(formatDate(new Date(new Date - 1)));
// alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
// alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert(formatDate(new Date(new Date - 86400 * 30 * 1000)));