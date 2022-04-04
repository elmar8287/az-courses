import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card} from "react-bootstrap";
import "./API.css";
import Loading from "../Loading/Loading";

class API extends Component {

    // Constructor
    constructor (props) {

        super(props);

        this.state = {
            "items": [],
            "DataisLoaded": false
        };

    }

    /*
     * ComponentDidMount is used to
     * Execute the code
     */

    componentDidMount () {

        fetch("https://api.linkedin.com/v2/people/{profile_id}").
            then((res) => res.json()).
            then((json) => {

                this.setState({
                    "items": json,
                    "DataisLoaded": true
                });

            });

    }

    render () {

        const {DataisLoaded, items} = this.state;
        if (!DataisLoaded) {

            return (
                <div>
                    <Loading />
                </div>
            );

        }
        return (
            <div className="courses">
                <h1>
                    Available courses
                </h1>

                <div className="items-courses">
                    {
                        items.map((items) => (<Card
style={{width: "18rem" }}
                                className="item"
                                key={items.id}
                            >
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

                                <Card.Body>
                    <Card.Title>
                                        { items.firstName }
                                    </Card.Title>

                                    <Card.Text>
                      { items.headline }
                  </Card.Text>

                                    <Button
variant="primary"
                      className="cardButton"
                  >
Go to course
                  </Button>
                </Card.Body>
                            </Card>))
                    }
                </div>
            </div>
        );

    }

}

export default API;
