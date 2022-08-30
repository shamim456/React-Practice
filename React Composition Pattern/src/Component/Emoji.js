import React from "react";


class Emoji extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let addEmoji = (addEmojiS, Text, Bracket) => `${Bracket}  ${addEmojiS} ${Text} ${addEmojiS} ${Bracket}`;
        let addEmoji = (Text, Emoji) => ` ${Emoji} ${Text} ${Emoji}`;
        return(
            this.props.children({addEmojis : addEmoji})
        )
    }
}

export default Emoji;