import dayjs from 'dayjs'

export function formatStandard(timeStamp: number) {
  return dayjs(timeStamp).format('YYYY-MM-DD HH:mm:ss')
}
