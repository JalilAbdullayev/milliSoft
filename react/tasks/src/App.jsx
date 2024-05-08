import { Counter } from "./Counter";
import { ColorPicker } from "./colorPicker";
import { Switch } from "./Switch";
import React from "react";
import { EcoHarvestFilter } from "./ecoHarvestFilter";

export class App extends React.Component {
    render() {
        return (
            <>
                <Counter/>
                <ColorPicker/>
                <Switch/>
                <EcoHarvestFilter/>
            </>
        )
    };
}