import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import { App } from "../App";
import { EcoHarvestFilter } from "../ecoHarvestFilter";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/EcoHarvestFilter">
                <EcoHarvestFilter/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews