import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardDeck, CardText, CardImg, CardTitle, CardBody, CardFooter } from 'react-bootstrap'
import $ from "jquery";

const Sam = () => {

    $(document).ready(function () {
        $("#show").click(function () {
            document.getElementById("sec").innerHTML = " $2.49 ";
        });
        $("#show1").click(function () {
            document.getElementById("sec").innerHTML = " $5.99 ";
        });
        $("#show2").click(function () {
            document.getElementById("sec").innerHTML = " $9.99 ";
        });
        $("#show3").click(function () {
            document.getElementById("sec2").innerHTML = " $2.49 ";
        });
        $("#show4").click(function () {
            document.getElementById("sec2").innerHTML = " $5.99 ";
        });
        $("#show5").click(function () {
            document.getElementById("sec2").innerHTML = " $9.99 ";
        });
        $("#show6").click(function () {
            document.getElementById("sec3").innerHTML = " $2.49 ";
        });
        $("#show7").click(function () {
            document.getElementById("sec3").innerHTML = " $5.99 ";
        });
        $("#show8").click(function () {
            document.getElementById("sec3").innerHTML = " $9.99 ";
        });
        $("#show9").click(function () {
            document.getElementById("sec4").innerHTML = " $2.49 ";
        });
        $("#show10").click(function () {
            document.getElementById("sec4").innerHTML = " $5.99 ";
        });
        $("#show11").click(function () {
            document.getElementById("sec4").innerHTML = " $9.99 ";
        });
    })


    return (
        <>

            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <div id="sec1">
                                $2.5
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button id="show" variant="outline-primary">3 Yr.</Button>{' '}
                    <Button id="show1" variant="outline-secondary">1 YR.</Button>{' '}
                    <Button id="show2" variant="outline-success">MONTHLY</Button>{' '}
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <div id="sec1">
                                $2.5
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button id="show3" variant="outline-primary">3 Yr.</Button>{' '}
                    <Button id="show4" variant="outline-secondary">1 YR.</Button>{' '}
                    <Button id="show5" variant="outline-success">MONTHLY</Button>{' '}
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <div id="sec3">
                                $2.5
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button id="show6" variant="outline-primary">3 Yr.</Button>{' '}
                    <Button id="show7" variant="outline-secondary">1 YR.</Button>{' '}
                    <Button id="show8" variant="outline-success">MONTHLY</Button>{' '}
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <div id="sec4">
                                $2.5
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button id="show9" variant="outline-primary">3 Yr.</Button>{' '}
                    <Button id="show10" variant="outline-secondary">1 YR.</Button>{' '}
                    <Button id="show11" variant="outline-success">MONTHLY</Button>{' '}
                </Card>
            </CardDeck>
            <br />
        </>

    )
}

export default Sam;