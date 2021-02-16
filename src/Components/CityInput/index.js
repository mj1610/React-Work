import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function CityInput({city, setCity, fetchCityWeather}) {
    
    const [error, setError]= React.useState("");

    const handleInputChange = (event) =>{
        setCity(event.target.value);
    }
    const handleSubmit = ()=>{
        if(!city)
        setError("Field is Empty");
        else{
            setError("")
            fetchCityWeather();
        }
    }
    return (
        <div>
            <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter City Name</Form.Label>
                    <Form.Control 
                    value={city} 
                    type="text" 
                    placeholder="Enter City" 
                    onChange={handleInputChange}/>
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Search
                </Button>
            </Form>
            </Container>
        </div>
    );
};

export default CityInput
