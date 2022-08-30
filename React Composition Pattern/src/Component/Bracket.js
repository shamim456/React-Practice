import React from "react";


class Bracket extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let addEmoji = (addEmojiS, Text, Bracket) => `${Bracket}  ${addEmojiS} ${Text} ${addEmojiS} ${Bracket}`;
        let addBracket = (Text) => ` [ ${Text} ]`;
        return(
            this.props.children({addBrackets : addBracket})
        )
    }
}

export default Bracket;