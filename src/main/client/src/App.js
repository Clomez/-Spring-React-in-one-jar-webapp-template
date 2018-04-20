import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  './bootstrap.css';
import  './main.css';


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            greeting: "Projects",
            title2: "Work & School"
        }
    }
    componentDidMount() {
        fetch("/greet").then(function(response) {
            return response.text();
        }).then((text) => {
            this.setState({greeting: text})
        });
        fetch("/title2").then(function(response) {
            return response.text();
        }).then((text) => {
            this.setState({title2: text})
        });
    }
    render() {
    return (
        <div role="main" className="container">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossOrigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                        crossOrigin="anonymous" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossOrigin="anonymous" />
            <script type="text/javascript" src="./jquery.js"></script>
            <script type="text/javascript" src="./bootstrap.js"></script>
            <script type="text/javascript" src="./scrollify.js"></script>
            <script type="text/javascript" src="./aos.js"></script>
            <script type="text/javascript" src="./chartlist.js"></script>
            <section className="section" id="Home">
                <div className="jumbotron">
                    <div className="col-md-8 col-md-offset-2 content">
                        <h1>Home</h1>
                    </div>
                    <div className="row">
                        <p>{this.state.title2}</p>

                    </div>
                </div>
            </section>

            <section className="section" id="Projects">
                <div className="row">
                    <div className="jumbotron">
                        <div className="col-md-8 col-md-offset-2 content">
                            <h1>{this.state.greeting}</h1>
                        </div>
                        <div className="row">
                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" />
                                    <p className="card-text">Code for ERC20 ethereum token and ICO crowdsale in ethereum
                                        network.</p>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" data-aos="fade-up" />
                                    <p className="card-text">JavaEE8 based webapp to make and answer surveys in browser.
                                        MySQL MAven Spring Thymeleaf</p>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" data-aos="fade-up" />
                                    <p className="card-text">Blockchain datastorage, can be mined to store data, has
                                        validity check after every block.</p>
                            </div>

                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" data-aos="fade-up" />
                                    <p className="card-text">Node based, full browser gui port scanner with user
                                        authentication and logs</p>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" data-aos="fade-up" />
                                    <p className="card-text">Prototype voting advice appliation, made with nodejs and
                                        JSON, mvp demo.</p>
                            </div>
                            <div className="card" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-easing="ease-in-sine">
                                <img src="http://via.placeholder.com/356x240" alt="Card image cap" data-aos="fade-up" />
                                    <p className="card-text">Complete email sending system, for sending stylish HTML
                                        emails to multiple receivers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
  }
}

export default App;
