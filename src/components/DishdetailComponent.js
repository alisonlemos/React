import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish){
        return dish ? (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
        ): <div></div>
    }

    renderComments(comments){
        return comments ? (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment)=>(
                            <li key={comment.id}>
                               <p>{comment.comment}</p>
                               <p>{`-- ${comment.author}, ${comment.date}`}</p>
                            </li>
                        ))}
                    </ul>
                </div>
        ) : <div></div>
    }

    render() {
        return( 
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish?.comments)}
            </div>
        ) 
    }
}

export default DishDetail;
