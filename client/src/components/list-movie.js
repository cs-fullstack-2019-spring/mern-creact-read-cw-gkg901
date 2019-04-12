import React, { Component } from 'react';



//Helper
const Movie = props =>(
    <tr>
        <td>{props.movieName}</td>
        <td>{props.genre}</td>
    </tr>
);




//constructor
export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state = {movies: []};
    }




    // Fetch all movies from mongoDB
    componentDidMount() {
        fetch('/movie')
            .then(data=>data.json())
            .then(returnedData => this.setState({movies: returnedData}));
        console.log(this.state.movies)
    }



    // Iterates thru list and places objects in Movie helper
    movieList(){
        return(
            this.state.movies && this.state.movies.map(function(currentMovie,index){
                return <Movie movie={currentMovie} key={index}/>;
            })
        )
    }




    // Render Content
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                    </tr>
                    </thead>
                    <tbody>{this.movieList()}</tbody>
                </table>
            </div>
        );
    }
}

