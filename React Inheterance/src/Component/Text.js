// inheritance system a eta kora

import Emoji from "./Emoji"
class Text extends Emoji {
    constructor(props) {
        super(props);
    }
    
    render() {
        let text = "ritu";
        const decorated = this.addEmoji(text, "4");
        return(
            super.render(decorated)
        )
    }
}

export default Text;


