// import React from 'react'
// import Row from '../Row/Row'
// const Rowlist = () => {
//   return (
//     <>
//       <Row/>
//       <Row/>
//       <Row/>
//       <Row/>
//       <Row/>

//     </>
//   )
// }

// export default Rowlist

import Row from "../Row/Row";
import requests from "../../../utils/requests";

const rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default rowlist;
