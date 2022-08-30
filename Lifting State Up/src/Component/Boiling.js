function Boiling({temp = 0}) {
    if(temp >= 100) {
        return<p> Water Would Boil </p>
    } else {
        return <p> Water Would Not Boil </p>
    }
     
}

export default Boiling;