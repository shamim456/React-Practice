// inheritance system a eta kora



import React from "react";

class Emoji extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    addEmoji = (text, emoji) => {
        
        return(
            `${emoji} ${text} ${emoji} `
        )
    }

    render(decorated) {
        let text = "shamim"
        if(decorated) {
            text = decorated;
        }
        return(
            <div>
                {text}
            </div>
        )
    }
}
export default Emoji;




