import { Song } from './song/song';
export interface Playlist {
  id?: string
  title: string
  authorId: string
  songs: Song[]
}
