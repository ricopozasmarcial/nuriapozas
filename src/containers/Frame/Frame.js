import React from 'react';
import Options from './Options/Options';
import Platos from './Platos/Platos';
import { FrameDiv } from './Frame.style';
class Frame extends React.Component {
    render() {
        return (
            <FrameDiv>
                <div id="plato">
                    <Options></Options>
                </div>
                <div id="opciones">
                    <Platos></Platos>
                </div>
            </FrameDiv>
        );
    }
}

export default Frame;