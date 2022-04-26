import Cookies from "js-cookie";

/**
 * 设置 Cookie
 */
export function setCookie(str: string) {
  const cookies = str.split(";;");
  cookies.forEach((cookie: string) => {
    const cookieKeyValue = cookie.split(";")[0].split("=");
    Cookies.set(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1]);
    localStorage.setItem(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1]);
  });
}

/**
 * 获取 Cookie 信息
 */
export function getCookie(key: string) {
  return Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`);
}

/**
 * 移除 Cookie
 */
export function removeCookie(key: string): void {
  Cookies.remove(key);
  localStorage.removeItem(key);
}

/**
 * 是否登录
 * true 则登录，否则未登录
 */
export function isLogined() {
  return !!getCookie("MUSIC_U");
}