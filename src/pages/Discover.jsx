import { Error, Loader, SongCard} from '../components';
import { genres } from '../assets/constants';
// import { useGetAlbumDetailsQuery } from '../redux/services/shazamCore'
import { useEffect, useState } from 'react';

const Discover = () => {

//  const { data, isFetching, error} = useGetAlbumDetailsQuery();   
 const genreTitle = 'Pop';   

 const [music, setMusic] = useState([]);

 const getMusic = async() => {
    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=16&numberOfTopResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c343a4e2a7mshf63011433f1f3cdp1a5ce1jsne13e58cee6bd',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setMusic(result);
	console.log(result);
} catch (error) {
	setMusic(error);
}
 }

 useEffect(()=>{
    getMusic();
 },[])

 const msArray = [1,2,3,4,5,6,7,8,9,10]
 const log = async()=>{ console.log(music?.albums?.data?.items)}
 
//  if(isFetching) return  <Loader title='Loading Songs...'/>;
//  if(error)      return  <Error />


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
            {   music?.users?.items.map((musicData)=>(
                <SongCard  
                 imag = {musicData?.data?.image?.largeImageUrl} 
                 song = {musicData?.data?.displayName}
                
                 />
                 
            ))}
        </div>
    </div>
 )

}
export default Discover;
