// // import React, { useEffect, useState } from 'react'
// // import Navbar from './components/navbar/Navbar'
// // import MovieCard from './components/movieCard/MovieCard'
// // import SearchBar from './components/searchBar/SearchBar'

// // function App() {
// //   const [allMovieData, setAllMovieData] = useState([]);
// //   const [searchMovie, setSearchMovie] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const fetchMovieData = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
// //       const data = await res.json();
// //       setAllMovieData(data.Search);
// //       setLoading(false)
// //     } catch (error) {
// //       console.log(error)
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="bg ">
// //         <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
// //         <MovieCard allMovieData={allMovieData} loading={loading} />
// //       </div>
// //     </div>
// //   )
// // }

// // export default App


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [options, setOptions] = useState([]);
//   const [to, setTo] = useState('en');
//   const [from, setFrom] = useState('en');
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');

//   const translate = async () => {
//     // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   
//     const params = new URLSearchParams();
//     params.append('q', input);
//     params.append('source', from);
//     params.append('target', to);
//     params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

//     // axios.post('https://libretranslate.de/translate',params, {
//     //   headers: {
//         // 'accept': 'application/json',
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     //   },
//     // }).then(res=>{
//       // console.log(res.data)
//       // setOutput(res.data.translatedText)
//     // })
//     const options = await fetch('https://libretranslate.de/translate',params,{
//       methods: 'POST',
//       headers:{
//         'accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       }
//     })
//     console.log(options.data)
//     setOutput(options.data.translatedText)

//   };

//   const outputs = async () =>{
//     const res = await fetch('https://libretranslate.de/languages',{
//       method: 'GET',
//       headers: { accept: 'application/json' },
//     })
//     console.log(res)
//   }

//   useEffect(() => {
//     // axios
//     //   .get('https://libretranslate.de/languages', {
//     //     headers: { accept: 'application/json' },
//     //   })
//     //   .then((res) => {
//     //     console.log(res.data);
//     //     setOptions(res.data);
//     //   });
//     outputs()
    
//   }, []);
//   return (
//     <div>
//       <button onClick={translate}>ok</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Calculator from './components/Calculator'

function App() {
  return (
    <div>
      <Calculator/>
    </div>
  )
}

export default App