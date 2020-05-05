import {DataBus} from './databus.js'

let databus = new DataBus()
export class Sealevel{
  constructor(){
    this.img = wx.createImage()
    this.img.src = 'images/sealevel.png'
    this.w = 800
    this.h = 27
  }
  render(){
    databus.ctx.drawImage(this.img,0,databus.canvas.height-this.h,this.w,this.h)
  }
}