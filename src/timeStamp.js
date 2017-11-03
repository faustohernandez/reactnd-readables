import moment from 'moment'

export const formattedDate = time => {
  return moment(time).format('dddd, MMMM Do YYYY')
}

export const commentDate = time => {
  return moment(time).format('DD MMMM')
}