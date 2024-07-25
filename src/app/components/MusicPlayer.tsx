
'use client'

import { invoke } from "@tauri-apps/api";
import { title } from "process";
import { useEffect, useState } from "react";

interface Song {
  title: string;
}

const MusicPlayer: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  useEffect(() => {
    async function fetchSong() {
      const songList : Song[] = await invoke('get_songs');
      setSongs(songList);
    }
    fetchSong();
  }, []);

  const playSong = async(song: Song) => {
    await invoke('play_song', {title: song.title});
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = async () => {
    await invoke('pause_song');
    setIsPlaying(false);
    // https://www.youtube.com/watch?v=ct-2-GIgL1s
  }
}