import React from "react";
import {
  Card, CardImg, CardText, CardBody, 
  CardTitle
} from 'reactstrap';
import { StarWarsBody, StarWarsDiv, StarWarsName } from "./Styles.js";



const StarWarsCard = (props) => {
  return(
    <div>
      <Card>
        <StarWarsDiv>
          <StarWarsName>Name: {props.name}</StarWarsName>
          <StarWarsBody>Birth Year: {props.birth_year}</StarWarsBody>
          <StarWarsBody>Gender: {props.gender}</StarWarsBody>
          <StarWarsBody>Hair Color: {props.hair_color}</StarWarsBody>
          <StarWarsBody>Height in cm: {props.height}</StarWarsBody>
          <StarWarsBody>Mass in kg: {props.mass}</StarWarsBody>
          <StarWarsBody>Skin color: {props.skin_color}</StarWarsBody>
          <StarWarsBody>Species: {props.species}</StarWarsBody>

          {/* <CardImg className="image" src={props.imgURL} top width="100%" alt="Card image cap" /> */}

        </StarWarsDiv>
      </Card>
    </div>


  //  <div className="NASACard">
  //    <h2>Title: {props.title}</h2>
  //    <img className="NASAIMG" alt="random NASA" src={props.imgURL} />
  //     <p className="explanation"> Explanation: {props.explanation}</p>
  //     <p className="date">Date: {props.date}</p>
  //  </div>
  );
};

export default StarWarsCard;

