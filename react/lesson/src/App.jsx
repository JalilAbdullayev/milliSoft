import './App.css';
import { Card } from "./Card";
import Collapse from "./Collapse";

const App = () => {
    return (
        <div className="row">
            <Collapse>
                <Card cardTitle='Full Stack'
                      photo='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg'
                      cardContent='Lorem ipsum dolor sit amet.'
                      updateTime='Last updated 3 mins ago'/>
            </Collapse>
            <Collapse>
                <Card cardTitle='Front End'
                      photo='https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg'
                      cardContent='Lorem ipsum dolor sit amet.'
                      updateTime='Last updated 4 mins ago'/>
            </Collapse>
            <Collapse>
                <Card cardTitle='Back End'
                      photo='https://m.media-amazon.com/images/M/MV5BZDMyZGJjOGItYjJkZC00MDVlLWE0Y2YtZGIwMDExYWE3MGQ3XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg'
                      cardContent='Lorem ipsum dolor sit amet.'
                      updateTime='Last updated 5 mins ago'/>
            </Collapse>
        </div>
    );
}

export default App;
