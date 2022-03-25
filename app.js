console.log('connected')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const randomInt = (min, max)=>{
    return Math.floor(Math.random()*max)+min
}
const degToRad = (degrees)=>{
    return degrees / 180 * Math.PI
}

const resizeCanvas = (isSymetric)=>{
    const margin = 10
    const wInWidth = window.innerWidth
    const wInHeight = window.innerHeight
    const dimentions = {
        windowX: wInWidth,
        windowY: wInHeight,
        canvasX: wInWidth - margin,
        canvasY: wInHeight - margin,
        midX: (wInWidth - margin) * 0.5, 
        midY: (wInHeight - margin) * 0.5,
        // midX: 0,
        // midY: 0
    }
    if(isSymetric){
        if(dimentions.canvasX < dimentions.canvasY){
            dimentions.canvasY = dimentions.canvasX
            dimentions.midY = dimentions.midX
        }
        else{
            dimentions.canvasX = dimentions.canvasY
            dimentions.midX = dimentions.midY
        }
    }
    canvas.width = dimentions.canvasX
    canvas.height = dimentions.canvasY
    return dimentions
}

let cDim = resizeCanvas(1)  //current dimentions
// console.log(cDim)
const cStick = {
    x: cDim.canvasX * 0.01,
    y: cDim.canvasY * 0.25
}

const cCircle = {
    r: cDim.canvasX * 0.35
}

const sticks = 12

const clearCanvas = ()=>{
    context.fillStyle = 'white' //color of drawing
    context.fillRect(0, 0, cDim.canvasX, cDim.canvasY)
}

clearCanvas()

const randomCircle =()=>{
    context.fillStyle = 'black'
    for(let i=0; i<sticks; i++){
        let angle = 360 / 12
        // let offset = 100
        let stickThick = randomInt(1,10)
        let stickHeight = randomInt(10, 20)
        let offset = randomInt(100,200)
        context.save()
        context.translate(cDim.midX, cDim.midY)
        context.rotate(degToRad(angle * i + randomInt(5,10)))
        // context.scale(randomInt(0.1, 2), randomInt(0.2, 0.5))

        context.beginPath()
        context.rect(stickThick * -0.5, (stickThick * -0.5) + offset, stickThick, stickHeight)
        context.fill()
        context.restore()

        context.save()
        context.translate(cDim.midX, cDim.midY)
        context.rotate(degToRad(angle * i))

        context.lineWidth = randomInt(2,10)

        context.beginPath()
        context.arc(0,0, randomInt(100,200), degToRad(angle - randomInt(5,15)), degToRad(angle + randomInt(5,15)))
        context.stroke()
        context.restore()
    }
}

randomCircle()

window.setInterval(()=>{
    clearCanvas()
    let randomCycle = randomInt(5,12)
    for(let i=0; i<randomCycle; i++){
        randomCircle()
    }
},'10000')
    

    

    // )=>{},'5000')
// for(let i=0; i<10; i++){
//     randomCircle()
// }
// window.addEventListener('resize', ()=>{
//     cDim = resizeCanvas(1)
// })