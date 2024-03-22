import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c343a4e2a7mshf63011433f1f3cdp1a5ce1jsne13e58cee6bd',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
}

fetch('https://spotify23.p.rapidapi.com/albums',options)
.then((response)=> response.json())
.then((response)=>console.log(response)).catch((err)=>{console.error(err)});

export const shazamCore = createApi({
   reducerPath: 'shazamCore', // Redux Toolkit uses this to automatically generate the slice name for you
  baseQuery: fetchBaseQuery({baseUrl: 'https://spotify23.p.rapidapi.com/', 
   prepareHeaders: (headers)=>{
     headers.set('X-RapidAPI-Key', 'c343a4e2a7mshf63011433f1f3cdp1a5ce1jsne13e58cee6bd');

     return headers;
   },
}),
endpoints: (builder) => ({
    getAlbumDetails: builder.query({ query: ()=> 'album_tracks?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=30'}),
}),

});

export const{
   useGetAlbumDetailsQuery,
} = shazamCore;

