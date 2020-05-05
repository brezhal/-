import {DataBus} from './databus.js'

let databus = new DataBus()
console.log(databus.ctx)
export class SeaBed{
  constructor(){
    this.img = wx.createImage()
    this.img.src = 'images/background.png'
    this.x = 0
    this.y = 0
    this.speed = 1
  }
  render(){
    this.x-=this.speed
    if(this.x<-databus.canvas.width){
      this.x=0
    }
    databus.ctx.drawImage(this.img,this.x,this.y,databus.canvas.width,databus.canvas.height)
    databus.ctx.drawImage(this.img,databus.canvas.width+this.x,this.y,databus.canvas.width,databus.canvas.height)
  }
}