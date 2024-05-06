import './App.css';
import { Counter } from "./Counter";
import { ColorPicker } from "./colorPicker";
import { Switch } from "./Switch";
import React from "react";

export class App extends React.Component {
    render() {
        return (
            <>
                <Counter/>
                <ColorPicker/>
                <Switch/>
            </>
        )
    };
}