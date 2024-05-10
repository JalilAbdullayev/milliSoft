import React from "react";
import { GameList } from "./GameList";
import { Search } from "./Search";

export class Games extends React.Component {
    state = {
        games: [],
        searchWord: ''
    }

    async componentDidMount() {
        let url = 'http://localhost:3001/games';
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            games: data
        });
    }

    deleteGame = async(id) => {
        let url = `http://localhost:3001/games/${id}`;
        await fetch(url, {
            method: 'DELETE'
        });
        let newGameList = this.state.games.filter(game => {
            return game.id !== id;
        });
        this.setState({
            games: newGameList
        });
    }

    searchGame = (event) => {
        this.setState({
            searchWord: event.target.value
        });
    }

    render() {
        let filteredGames = this.state.games.filter(game => {
            return game.Name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1;
        });
        return (
            <>
                <Search search={this.searchGame}/>
                <GameList games={filteredGames} delete={this.deleteGame}/>
            </>
        );
    }
}