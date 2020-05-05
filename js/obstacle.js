import {DataBus} from './databus.js'

let databus = new DataBus()
export class Obstacle{
  constructor(y,src){
    this.img = wx.createImage()
    this.img.src =src
    this.w = 84
    this.h = 406
    this.y = y
    this.x = databus.canvas.width/2
    this.speed = 1
  }
  
  render(){
    
  }
}