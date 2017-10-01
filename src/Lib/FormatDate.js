import moment from 'moment'
import 'moment/locale/fr'

moment.locale('fr', {
  calendar: {
    sameDay: '[Aujourd\'hui]',
    nextDay: '[Demain]',
    sameElse: 'dddd DD MMM',

    lastWeek: 'dddd DD MMM',
    nextWeek: 'dddd DD MMM'
  }
})

export const formatCurrentDate = (format = 'DD MMM YYYY') => {
  return moment().format(format)
}

export const formatDate = (date, format = 'DD MMM YYYY') => {
  return moment(date).format(format)
}

export const formatStringCalendar = (date, format) => {
  format = format || 'YYYY/MM/DD'
  return moment(date, format).calendar()
}

export const removeSecondes = (formatedHours) => {
  return formatedHours.split(':')[0] + ':' + formatedHours.split(':')[1]
}

export const getTomorrow = (date, format = 'DD MMM YYYY') => {
  return moment(date).add(1, 'days').format(format)
}
export const getYesturday = (date, format = 'DD MMM YYYY') => {
  return moment(date).add(-1, 'days').format(format)
}
