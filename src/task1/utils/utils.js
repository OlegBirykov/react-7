import moment from 'moment';

const minuteStrings = ['минуту', 'минуты', 'минут'];  
const hourStrings = ['час', 'часа', 'часов'];   
const dayStrings = ['день', 'дня', 'дней'];   

function getTimeString(value, strings) {
  let result = value + ' ';
  
  switch(value % 100) {
    case 11:
    case 12:
    case 13:
    case 14:
      return result + strings[2];
    default:
  }
  
  switch(value % 10) {
    case 1:
      return result + strings[0];    
    case 2:
    case 3:
    case 4:
      return result + strings[1]; 
    default:
      return result + strings[2]; 
  }
}

export function timeToAgo(date) {

  const datetime = moment(date);
  const now = moment();

  if (!datetime.isValid()) {
    return '';
  }

  const minutes = now.diff(datetime, 'minutes');
  if (minutes < 1) {
    return '';
  }
  if (minutes < 60) {
    return `${getTimeString(minutes, minuteStrings)} назад`;
  }
 
  const hours = now.diff(datetime, 'hours');
  if (hours < 24) {
    return `${getTimeString(hours, hourStrings)} назад`;
  }

  const days = now.diff(datetime, 'days');
  return `${getTimeString(days, dayStrings)} назад`;
}
