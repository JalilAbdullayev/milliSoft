import React from "react";
import { GameList } from "./GameList";
import { Search } from "./Search";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddGame } from "./AddGame";

export class Games extends React.Component {
    state = {
        games: [],
        searchWord: ''
    }

    getGames = async() => {
        let url = 'http://localhost:3001/games';
        let response = await axios.get(url);
        this.setState({
            games: response.data
        });
    }

    async componentDidMount() {
        this.getGames();
    }

    deleteGame = async(id) => {
        let url = `http://localhost:3001/games/${id}`;
        await fetch(url, {
            method: 'DELETE'
        });
        this.getGames();
    }

    searchGame = (event) => {
        this.setState({
            searchWord: event.target.value
        });
    }

    addGame = async(newGame) => {
        let url = 'http://localhost:3001/games';
        await axios.post(url, newGame);
        this.getGames();
    }

    render() {
        let filteredGames = this.state.games.filter(game => {
            return game.Name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1;
        });
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<>
                        <Search search={this.searchGame}/>
                        <GameList games={filteredGames} delete={this.deleteGame}/>
                    </>}/>
                    <Route path='/add' element={({history}) => {
                        <AddGame add={game => {
                            this.addGame(game);
                            history.push('/');
                        }}/>
                    }}/>
                </Routes>
            </Router>
        );
    }
}