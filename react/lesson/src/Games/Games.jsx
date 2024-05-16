import React from "react";
import { GameList } from "./GameList";
import { Search } from "./Search";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AddGame } from "./AddGame";
import { EditGame } from "./EditGame";

export class Games extends React.Component {
    state = {
        games: [],
        searchWord: '',
        showModal: false,
        selectedGame: ''
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

    openModal = (game) => {
        this.setState({
            showModal: true,
            selectedGame: game
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    editGame = async(game) => {
        let url = `http://localhost:3001/games/${this.state.selectedGame.id}`;
        await axios.put(url, game)
        this.getGames();
    }

    render() {
        let filteredGames = this.state.games.filter(game => {
            return game.Name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1;
        });
        return (
            <Router>
                <Route path='/' exact>
                    <Search search={this.searchGame}/>
                    <GameList games={filteredGames} delete={this.deleteGame} openModal={this.openModal}/>
                    {this.state.showModal ? (
                        <EditGame closeModal={this.closeModal} game={this.state.selectedGame}
                                  edit={(game) => this.editGame(game)}/>
                    ) : null}
                </Route>
                <Route path='/add' render={({history}) => {
                    return <AddGame add={newGame => {
                        this.addGame(newGame);
                        history.push('/');
                    }}/>
                }}/>
            </Router>
        );
    }
}