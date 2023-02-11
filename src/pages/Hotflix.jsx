import React from 'react'
import { Navbar, Header, Row } from '../components'
import requests from "../requests";

const hotflix = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Header />
      <Row title="HOTFLIX ORIGINAL" fetchUrl={requests.fetchHotflixOriginals} isLargeRow />
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default hotflix
