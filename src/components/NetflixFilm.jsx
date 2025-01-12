import { Container, Row } from "react-bootstrap";
import MyFilm from "./MyFilm";

const NetflixFilm = function () {
  return (
    <>
      <Container fluid className="bg-black text-white  " >
        <h2 className="ms-3"> Tending Now</h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <MyFilm FilmKey="Harry Potter " />
        </Row>
        <h2 className="ms-3">Watch it Again</h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <MyFilm FilmKey="lord of the rings  " />
        </Row>
        <h2 className="ms-3">New Releases </h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <MyFilm FilmKey="star wars " />
        </Row>
      </Container>
    </>
  );
};
export default NetflixFilm;