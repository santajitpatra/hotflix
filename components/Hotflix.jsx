import React from 'react'
import { Navbar, Header, Row, Footer } from '../components'
import requests from "../requests";

const Hotflix = () => {
  return (
    <div className='bg-gray-950'>
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
      <Footer/>
    </div>
  )
}

export default Hotflix
