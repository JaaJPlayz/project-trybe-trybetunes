import { useState } from 'react';

export default function MusicCard(musicInfo: any) {
  const { music } = musicInfo;
  const [favorited, setFavourited] = useState(false);
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
        <input type="checkbox" onChange={ () => setFavourited(!favorited) } />
        {favorited ? (
          <img src="/src/images/checked_heart.png" alt="favorite" />
        ) : (
          <img src="/src/images/empty_heart.png" alt="favorite" />
        )}
      </label>
    </div>
  );
}
