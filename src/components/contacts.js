import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {ListGroup, Card} from 'react-bootstrap';


function Contacts (props) {

  let contacts = [...props.contacts];
  let listItems = contacts.map((item)=>
    <ListGroup.Item key={item.key}>
      <Card className="bg-light">
        <span key={item.key}
          className="text-right"
          onClick={props.closer.bind(null,item.key)}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <h4>{item.FirstName} {item.LastName}</h4>
 
            <h4 >{item.Birthday}</h4>
            <h4 >{item.Telephone}</h4>
          </Card.Body>
        </Card>
    </ListGroup.Item>)
  return listItems;
}

export default Contacts;