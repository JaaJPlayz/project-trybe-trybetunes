import { useState } from 'react';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

export default function MusicCard(musicInfo: any) {
  const { music } = musicInfo;
  const [favorited, setFavorited] = useState(false);

  const toggleFavorited = (item: any) => {
    if (favorited) {
      setFavorited(false);
      removeSong({
        trackId: item.trackId,
        trackName: item.trackName,
        previewUrl: item.previewUrl,
      });
    } else {
      setFavorited(true);
      addSong({
        trackId: item.trackId,
        trackName: item.trackName,
        previewUrl: item.previewUrl,
      });
    }
  };

  return (
    <div>
      <h1>{music.trackName}</h1>
      <audio data-testid="audio-component" src={ music.previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <label
        data-testid={ `checkbox-music-${music.trackId}` }
      >
        <input
          type="checkbox"
          onChange={ () => setFavorited(!favorited) }
          onClick={ () => { toggleFavorited(music); } }
        />
        {favorited ? (
          <img src="/src/images/checked_heart.png" alt="favorite" />
        ) : (
          <img src="/src/images/empty_heart.png" alt="favorite" />
        )}
      </label>
    </div>
  );
}
