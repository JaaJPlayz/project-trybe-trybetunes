import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Loading from '../../components/loading';

export default function Search() {
  const [disabled, setDisabled] = useState(true);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [gotResults, setGotResults] = useState(false);
  const [albums, setAlbums] = useState([] as any);
  const [searched, setSearched] = useState('');

  const callSearchArtist = async () => {
    setLoading(true);
    setSearched(search);
    const response = await searchAlbumsAPI(search);
    setSearch('');
    setAlbums(response);
    setGotResults(true);
    setLoading(false);
  };

  const verifySearchSize = () => {
    const MIN_SIZE = 1;
    if (search.length >= MIN_SIZE) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    verifySearchSize();
  };

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <label>
            <input
              type="text"
              placeholder="Search"
              data-testid="search-artist-input"
              value={ search }
              onChange={ (e) => handleInputChange(e) }
            />
          </label>
          <button
            data-testid="search-artist-button"
            disabled={ disabled }
            onClick={ () => {
              callSearchArtist();
            } }
            type="button"
          >
            Procurar
          </button>
        </>
      )}

      {gotResults === true ? (
        <>
          <h1>
            Resultado de álbuns de:
            {' '}
            {searched}
          </h1>
          {albums.length === 0 ? <p>Nenhum álbum foi encontrado</p>
            : (
              <ul>
                {albums.map((album: any) => (
                  <li key={ album.collectionId }>
                    <Link
                      to={ `/album/${album.collectionId}` }
                      data-testid={ `link-to-album-${album.collectionId}` }
                    >
                      <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                      <p>{album.collectionName}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
        </>
      ) : null}
    </div>
  );
}
