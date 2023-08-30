export default function MusicCard(musicInfo: any) {
  const { music } = musicInfo;
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
    </div>
  );
}
