import Cookies from 'js-cookie'

export function setCookie(key: string, value: any) {
  Cookies.set(key, value, { expires: 7 })
}

export function getCookie(key: string) {
  const cookie = Cookies.get(key)
  console.log(cookie)
  return cookie ? cookie : null
}
