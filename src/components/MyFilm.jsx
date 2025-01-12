import { Component } from "react";
import { Col } from "react-bootstrap";

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = 'f73288cd';

class MyFilm extends Component {
  state = {
    ricerca: [],
    error: null, // Stato per gestire eventuali errori
  };

  fetchMovies = async () => {
    try {
      const FilmKey = this.props.FilmKey;
      const url = new URL(BASE_URL);
      url.searchParams.append("apikey", API_KEY);
      url.searchParams.append("s", FilmKey);
      url.searchParams.append("type", "movie");

      const resp = await fetch(url);
      if (resp.ok) {
        const data = await resp.json();
        if (data.Search) {
          const movies = data.Search.slice(0, 6);
          this.setState({ ricerca: movies });
          console.log("Risultati ottenuti: ", movies);
        } else {
          this.setState({ error: "Nessun film trovato per questa ricerca." });
        }
      } else {
        throw new Error("Errore nella risposta dal server.");
      }
    } catch (e) {
      console.error("Errore nella fetch: ", e);
      this.setState({ error: "Impossibile recuperare i dati." });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { ricerca, error } = this.state;

    return (
      <>
        {error && <p className="text-danger">{error}</p>}
        {ricerca.map((film, i) => (
          <Col key={i} className="px-1">
            <img
              className="img-fluid"
              src={film.Poster}
              alt={film.Title}
              style={{ width: "100%", height: "95%" }}
            />
          </Col>
        ))}
      </>
    );
  }
}

export default MyFilm;