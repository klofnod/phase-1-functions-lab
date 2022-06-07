function distanceFromHqInBlocks(streetNumber){
    return Math.abs(streetNumber - 42)
}


function distanceFromHqInFeet(feet){
    return Math.abs(feet - 42)*264
}

function distanceTravelledInFeet(start, destination){
    let feet = Math.abs(start - destination)*264
    return feet 
}

function calculatesFarePrice(start, destination){
    let distance = Math.abs(start - destination)*264
    if (distance <= 400)
    return 0
    if (distance <= 2000) 
    return (distance - 400) * 0.02
    if (distance <= 2500)
    return 25
    else if (distance > 2500)
    return 'cannot travel that far'
}