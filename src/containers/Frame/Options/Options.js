import React from 'react';
import { OptionsDiv } from './Options.style';
class Options extends React.Component {
    render() {
        return (
            <OptionsDiv>
                <ul>
                    <li><button>opcion 1</button></li>
                    <li><button>opcion 2</button></li>
                    <li><button>opcion 3</button></li>
                    <li><button>opcion 4</button></li>
                </ul>
            </OptionsDiv>
        );
    }
}

export default Options;