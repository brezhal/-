import {DataBus} from './databus.js'

let databus = new DataBus()
export class Fish{
  constructor(){
    this.img = wx.createImage()
    this.img.src = 'images/fish2.png'
    this.x = 10
    this.w = 41
    this.h = 30
  }
  render(){
    databus.ctx.drawImage(this.img,this.x,(databus.canvas.height-this.h)/2,this.w,this.h)
  }
}