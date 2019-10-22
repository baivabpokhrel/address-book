
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Contacts from './components/contacts.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
    "contacts": [
        {
          "key": generate(10),
          "FirstName": "Cathy" ,
          "LastName": "Pierce",
          "Birthday": "9/14/1996",
          "Telephone": "200-910-8132"
      },
      {
          "key": generate(10),
          "FirstName": "Alfonso",
          "LastName": "Cooley",
          "Birthday": "8/10/1973",
          "Telephone": "200-657-9362"
      },
      {
          "key": generate(10),
          "FirstName": "Victor",
          "LastName": "Gordon",
          "Birthday":  "8/3/1970",
          "Telephone": "200-661-9407"
      },
      {
          "key": generate(10),
          "FirstName": "Colleen",
          "LastName": "Wright",
          "Birthday": "10/28/1967",
          "Telephone": "200-250-7949"
      },
      {
          "key": generate(10),
          "FirstName": "James",
          "LastName": "Johnston",
          "Birthday": "5/11/1972",
          "Telephone": "200-645-3176"
      },
      {
          "key": generate(10),
          "FirstName": "Anna",
          "LastName": "Reyes",
          "Birthday": "9/10/1975",
          "Telephone": "200-707-8670"
      }
    ],

    "collapse": false,
    "formFirst": '',
    "formLast": '',
    "formDOB": '',
    "formTel": '',
    "searchVal":'',
  }

  addContactHandler=(event)=>{
    event.preventDefault();
    let newContact = {
      key: generate(10),
      FirstName: this.state.formFirst,
      LastName: this.state.formLast,
      Birthday: this.state.formDOB,
      Telephone: this.state.formTel
    };
    this.setState({contacts:[...this.state.contacts,newContact]});
    this.setState({formFirst:''});
    this.setState({formLast:''});
    this.setState({formDOB:''});
    this.setState({formTel:''});
  }

  closeContactHandler=(key,e)=>{
    let contacts = [...this.state.contacts];
    let deleteIndex = contacts.findIndex((item)=>item.key===key);
    contacts.splice(deleteIndex, 1);
    this.setState({"contacts":contacts});
  }

  searchHandler=(event)=>{
    

   
    let tempContacts=this.state.contacts;
    
    let returnContacts=[];
    for(let i=0; i<tempContacts.length;i++)
    {
    
       
       if (tempContacts[i].FirstName.toUpperCase().includes(this.state.searchVal.toUpperCase()))
       {
        returnContacts.push({
          "key": generate(10),
          "FirstName": tempContacts[i].FirstName,
          "LastName": tempContacts[i].LastName,
          "Birthday": tempContacts[i].Birthday,
          "Telephone": tempContacts[i].Telephone,
        });
         
       }
       else if (tempContacts[i].LastName.toUpperCase().includes(this.state.searchVal.toUpperCase()))
       {
        returnContacts.push({
          "key": generate(10),
          "FirstName": tempContacts[i].FirstName,
          "LastName": tempContacts[i].LastName,
          "Birthday": tempContacts[i].Birthday,
          "Telephone": tempContacts[i].Telephone,
        });
         
       }
       else if (tempContacts[i].Birthday.toUpperCase().includes(this.state.searchVal.toUpperCase()))
       {
        returnContacts.push({
          "key": generate(10),
          "FirstName": tempContacts[i].FirstName,
          "LastName": tempContacts[i].LastName,
          "Birthday": tempContacts[i].Birthday,
          "Telephone": tempContacts[i].Telephone,
        });
         
       }
       else if (tempContacts[i].Telephone.toUpperCase().includes(this.state.searchVal.toUpperCase()))
       {
        returnContacts.push({
          "key": generate(10),
          "FirstName": tempContacts[i].FirstName,
          "LastName": tempContacts[i].LastName,
          "Birthday": tempContacts[i].Birthday,
          "Telephone": tempContacts[i].Telephone,
        });
         
       };
      
      
      
     }

     if(this.state.searchVal===""){
      returnContacts = tempContacts;
     }
     this.setState({"contacts":returnContacts});
     console.log(returnContacts);
      
    
    }
      
    
    
    

  

  render=()=>{
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based Address List </h1>
            <input  
            
            id="searchBox"
            value={this.state.searchVal}
            onChange={(e) => this.setState({searchVal: e.target.value})}
            onKeyUp={this.searchHandler} 
            type="text" placeholder="Search For Contacts"/>
          </header>
          
          <Contacts 
            contacts={this.state.contacts}
            closer={this.closeContactHandler}>
          </Contacts >
          <h2 className='text-left'>Add A Contact</h2>
          <Form className="text-left" onSubmit={this.addContactHandler}>
            <Form.Group controlId="formToDo">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter First Name" 
                value={this.state.formFirst}
                onChange={(e) => this.setState({formFirst: e.target.value})}/>
              
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Last Name" 
                value={this.state.formLast}
                onChange={(e) => this.setState({formLast: e.target.value})}/>

              <Form.Label>DOB</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter DOB (DD-MM-YYYY)" 
                value={this.state.formDOB}
                onChange={(e) => this.setState({formDOB: e.target.value})}/>

              <Form.Label>Telephone</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Telephone (XXX-XXX-XXXX)" 
                value={this.state.formTel}
                onChange={(e) => this.setState({formTel: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add Contact
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
