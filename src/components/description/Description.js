import { Button } from "react-bootstrap";
import React from "react";
import { Link, useParams } from "react-router-dom";

const Description = ({moviesData}) => {
  const { Id } = useParams();
  return (
    <div>{moviesData.filter((el)=>el.id==Id).map((el,key)=>
      <div className="cellphone-container1">  
      <iframe src={el.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
      <div className="mr-grid1 summary-row1">
          <div className="col2">
          <h3>Description</h3>
          </div>
      </div>
      <div className="mr-grid1">
          <div className="col1">
          <h4 className="movie-description">{el.description}</h4>
          </div>
      </div>
      </div>
      <Link to='/'>
      <Button>Back </Button>
      </Link>
      </div>
    
    
    
    
    )}
    </div>
  );
};

export default Description;
