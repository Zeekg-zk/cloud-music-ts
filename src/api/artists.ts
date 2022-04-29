import request from "../utils/request";

/**
 * 获取热门歌手
 * @param limit 限制个数
 * @returns 热门歌手信息（数组）API.Artist
 */
export function fetchHotArtists(limit: number = 5) {
  return request<{ artists: API.Artist[] }>({
    url: `/top/artists?limit=${limit}`,
    method: "GET",
  });
}

/**
 * 获得歌手部分信息和热门歌曲
 * @param id 歌手id
 * @returns 歌手部分信息和热门歌曲数据
 */
export function fetchArtist(id: string) {
  return request<{ artist: API.Artist; hotSongs: Array<API.Song> }>({
    url: `/artists?id=${id}`,
    method: "GET",
  });
}
