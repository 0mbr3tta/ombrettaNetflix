import { Component } from "react";
import { Col } from "react-bootstrap";
const URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=f73288cd&s=hunger%20games&type=movie' ;

class MyFilm extends Component {
  state = {
    ricerca: [],
  };

  fetchMovies = () => {
    const FilmKey = this.props.FilmKey;
    fetch(URL + FilmKey)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata ");
        }
      })
      .then((data) => {
        const Movies = data.Search.slice(0, 6);
        this.setState({ ricerca: Movies });
        console.log(" risposta json dal server ", Movies);
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {this.state.ricerca.map((film, i) => {
          return (
            <Col key={i} className="px-1 ">
              <img
                className="img-fluid "
                src={film.Poster}
                alt={film.Title}
                style={{ width: "100%", height: "95%" }}
              />
            </Col>
          );
        })}
      </>
    );
  }
}
export default MyFilm;