import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function UserCard(props) {
  console.log(props);
  return (
    <Col xs={3}>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Card.Body>
          <Card.Title>{props.user.name}</Card.Title>
          <Card.Text>{props.user.email}</Card.Text>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
