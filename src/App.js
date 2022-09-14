import "./App.css";
import Header from "./parts/Header";
import MainHeaderText from "./parts/MainHeaderText";
import MainHeaderFilter from "./parts/MainHeaderFilter";
import Container from "react-bootstrap/Container";
import Card from "./components/Card";
import Reviews from "./parts/Reviews";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#DCE9FD", paddingBottom: "3.5rem" }}>
        <Container fluid className="mainContainer">
          <Header />
          <div className="responsiveHeaderText">
            <MainHeaderText />
          </div>
          <MainHeaderFilter />
        </Container>
      </div>
      <Reviews
        main="Top-rated primary care doctors"
        percent="90%"
        details=" of patients gave these primary care doctors 5 stars"
        link="See more highly-recommended doctors"
      />

      {/* 
      <Card
        name="test name"
        type="Primary Care"
        location="Brooklyn, NY"
        rating="4.92"
        review="221"
        tag="Highly Recommended"
        desc="This was a great experience. Love the office space as large health systems feel very impersonal. I liked the interaction and"
      /> */}
    </>
  );
}

export default App;
