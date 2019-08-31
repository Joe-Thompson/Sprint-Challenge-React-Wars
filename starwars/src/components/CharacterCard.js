import React from "react"
import '/home/joe/Lambda/React/reactSprint/Sprint-Challenge-React-Wars/starwars/src/components/StarWars.css';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';





const CharacterCards = ({ data }) => {

    return (
        <div className='cardLayout'>
            <Card className='cardDisplay'>
                <CardImg topwidth='100%' height='100px' width='100px' src='https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200'/><CardBody>
                <CardTitle><span>  {data.name}</span></CardTitle>
            <CardText><strong>Gender</strong>  {data.gender}</CardText>
            <CardText><strong>Hair Color</strong>  {data.hair_color}</CardText>
            <CardText><strong>Eye Color</strong>  {data.eye_color}</CardText>
            <CardText><strong>Height</strong>  {data.height}</CardText>
            <CardText><strong>Skin Color</strong>  {data.skin_color}</CardText>
            <CardText><strong>Date of Birth</strong>  {data.birth_year}</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default CharacterCards;