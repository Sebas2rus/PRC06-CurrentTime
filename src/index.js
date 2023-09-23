import './styles/main.scss'
import moment from "moment";
moment.locale('es');

document.getElementById('time').innerHTML = moment().format('LTS')

setInterval(setTime, 1000);

function setTime() {
    document.getElementById('time').innerHTML = moment().format('LTS')
    console.log(moment.tz("2014-06-01 12:00", "Europe/London").format('LTS'));

}


document.getElementById('date').innerHTML = moment().format('MMMM DD YYYY')