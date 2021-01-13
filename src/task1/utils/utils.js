import moment from 'moment';

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
    return `${minutes} минут назад`;
  }
 
  const hours = now.diff(datetime, 'hours');
  if (hours < 24) {
    return `${hours} часов назад`;
  }

  const days = now.diff(datetime, 'days');
  return `${days} дней назад`;
}
