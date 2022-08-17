import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Card";
function Cards(props) {
  console.log("Hello in Cards");
  console.log(props.data);
  return (
    <Container>
      <Row gap={2}>
        {props.data.map((user, index) => (
          <Card key={index} user={user} />
        ))}
        ;
      </Row>
    </Container>
  );
}
export default Cards;
