import { Error, Loader, SongCard} from '../components';
import { genres } from '../assets/constants';
import { useGetAlbumDetailsQuery } from '../redux/services/shazamCore'

const Discover = () => {

 const { data, isFetching, error} = useGetAlbumDetailsQuery();   
 const genreTitle = 'Pop';   

 console.log(data);
 
 if(isFetching) return  <Loader title='Loading Songs...'/>;
 if(error)      return  <Error />


 return (
    <div className='flex flex-col'>
        <div className="w-full flex flex-between items-center flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
            <select name="" id="" onChange={()=>{}}
                className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5"
            >
                {genres.map((genre)=> <option key={genre.value}>{genre.title}</option>)}
            </select>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
            {   data.map((song,i)=>(
                <SongCard
                 key={song.key}
                 song = {song}
                 i = {i}   
                 data = {data}
                 />
            ))}
        </div>
    </div>
 )

}
export default Discover;
