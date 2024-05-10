import React from "react";
import { GameList } from "./GameList";
import { Search } from "./Search";

export class Games extends React.Component {
    state = {
        games: [
            {
                "id": 1,
                "Name": "Call of Duty",
                "Year": 2003,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty_(video_game)",
                "Image": "https://upload.wikimedia.org/wikipedia/en/7/7c/Call_Of_Duty_%282003%29%2CCover%2CUpdated.jpg"
            },
            {
                "id": 2,
                "Name": "Call of Duty 2",
                "Year": 2005,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty_2",
                "Image": "https://m.media-amazon.com/images/M/MV5BZGQ2MTNjNmEtZjNlMS00MWFjLTg2ZmItYzBhZGNmOWUyYjM3XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg"
            },
            {
                "id": 3,
                "Name": "Call of Duty 4: Modern Warfare",
                "Year": 2007,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty_4:_Modern_Warfare",
                "Image": "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg"
            },
            {
                "id": 4,
                "Name": "Call of Duty: Black Ops IIII",
                "Year": 2018,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_IIII",
                "Image": "https://image.api.playstation.com/vulcan/img/cfn/113073miFl8n5KuJvbUODdSI8QAHJwVxQEnl2RAiJczrztnMIS-g3T2CyOvhthnE5hHJ7sRZ55W76sk30gfZWILvL0UAkzbT.png"
            },
            {
                "id": 5,
                "Name": "Call of Duty: Modern Warfare 2",
                "Year": 2009,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_2",
                "Image": "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png"
            },
            {
                "id": 6,
                "Name": "Call of Duty: Modern Warfare 3",
                "Year": 2011,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_3",
                "Image": "https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png"
            },
            {
                "id": 7,
                "Name": "Call of Duty: United Offensive",
                "Year": 2004,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty:_United_Offensive",
                "Image": "https://upload.wikimedia.org/wikipedia/en/9/95/Coduobox2.jpg"
            },
            {
                "id": 8,
                "Name": "Call of Duty: World at War",
                "Year": 2008,
                "Link": "https://en.wikipedia.org/wiki/Call_of_Duty:_World_at_War",
                "Image": "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg"
            }
        ],
        searchWord: ''
    }

    deleteGame = (id) => {
        let newGameList = this.state.games.filter(game => {
            return game.id !== id
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
            return game.Name.toLowerCase().indexOf(this.state.searchWord.toLowerCase()) !== -1
        });
        return (
            <>
                <Search search={this.searchGame}/>
                <GameList games={filteredGames} delete={this.deleteGame}/>
            </>
        );
    }
}