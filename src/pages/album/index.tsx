import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/loading';
import MusicCard from '../../components/music-card';

export default function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState<any>([]);

  const callGetMusics = async (itemID: any) => {
    setLoading(true);
    try {
      const response = await getMusics(itemID);
      setApiResponse(response);
    } catch (error: any) {
      console.log(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    callGetMusics(id);
  }, [id]);

  return (
    <div>
      {loading ? <Loading /> : (
        <div>
          <h1 data-testid="artist-name">{apiResponse[0].artistName}</h1>
          <h1 data-testid="album-name">{apiResponse[0].collectionName}</h1>
          {
            apiResponse.map((music: any, index: number) => (
              index > 0 ? <MusicCard key={ music.trackId } music={ music } /> : null
            ))
          }
        </div>
      )}
    </div>
  );
}
