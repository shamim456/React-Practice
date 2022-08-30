function Text ({addEmojis, addBrackets}) {
    let Text = "Hi I Am Shamim";
    if ({addEmojis}) {
        Text = addEmojis(Text, "555");
    } else{
        return Text
    }
    if ({addBrackets}) {
        Text = addBrackets(Text);
    } else{
        return Text
    }


    return(
        
        <div>
            {Text}
        </div>
    )

}

export default Text;