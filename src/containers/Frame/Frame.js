import React from 'react';
import Options from './Options/Options';
import { FrameDiv } from './Frame.style';
class Frame extends React.Component {
    render() {
        return (
            <FrameDiv>
                <div>
                    <Options></Options>
                </div>
            </FrameDiv>
        );
    }
}

export default Frame;