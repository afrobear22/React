import React from 'react';
import { MovieList } from './components/MovieList'

let listMovies = [{
  name: "The Joker",
  date: "2019",
  genre: "Drama/Crime",
  plot: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
  imdbLink: "https://www.imdb.com/title/tt7286456/",
  imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTcvL4wc0fbBjm1h5CRiFEZ2TnNKtu8KtoPSxTsj6mkedHeWl"
},
{
  name: "Inception",
  date: "2010",
  genre: "Action/Sci-Fi",
  plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  imdbLink: "https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5Q94KNMHRYES7P2YFP8T&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_13",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_FMjpg_UX1000_.jpg"
},
{
  name: "The Intouuchables",
  date: "2011",
  genre: "Biography/Comedy/Drama",
  plot: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
  imdbLink: "https://www.imdb.com/title/tt1675434/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5Q94KNMHRYES7P2YFP8T&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_44",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BODY0MDM1MDE2OV5BMl5BanBnXkFtZTcwMzEyMjkyNw@@._V1_.jpg"
},
{
  name: "Spider-Man: Into the Spider-Verse",
  date: "2018",
  genre: "Animation/Action",
  plot: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
  imdbLink: "https://www.imdb.com/title/tt4633694/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5Q94KNMHRYES7P2YFP8T&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_69",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg"
},
{
  name: "Fight Club",
  date: "1999",
  genre: "Drama",
  plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  imdbLink: "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5Q94KNMHRYES7P2YFP8T&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_12",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"
},
];

export function App() {
  return (
    <div id="App">
      <MovieList listOfMovies={listMovies} />
    </div>
  );
}

