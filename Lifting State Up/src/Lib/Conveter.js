export function toCelcious(fahenhite) {
    return (fahenhite - 32) * 5 / 9;
}

export function toFahrenhite(celcious) {
    return(
        (celcious * 5/9) + 32
    )
}

export function conveter(tempareture, convertTo) {
    let input = Number(tempareture);
    if(Number.isNaN(input)) {
        return "Please Input Valied Temperature";
    }
    let output = convertTo(input);
    let rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

