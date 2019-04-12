import React, {Component} from 'react';
import{Redirect} from 'react-router-dom';


export default class CreateMovie extends Component{



    constructor(props){
        super(props);

        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);

        this.state = {
            movieName: '',
            genre: '',
        };
    }

    onChangeMovieName(e){
        this.setState({
            movieName: e.target.value
        });
        console.log(this.state.movieName);
    }



    onChangeGenre(e){
        this.setState({
            genre: e.target.value
        });
        console.log(this.state.genre);
    }




    onSubmit(e){
        e.preventDefault();
        console.log('Submited!!!!')

        let data = {
            movieName: this.state.movieName,
            genre: this.state.genre
        };


        return fetch('/movie', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            mode: 'cors',
            body: JSON.stringify(data)

        }).then(res=> res.text()).then(res => console.log(res))


    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>





                </form>
            </div>
        );
    }




}