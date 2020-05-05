import {DataBus} from './databus.js'

let databus = new DataBus()
export class Button{
  constructor(){
    this.img = wx.createImage()
    this.img.src = 'images/start_button.png'
    this.w = 64
    this.h = 64

  }
  render(){
    databus.ctx.drawImage(this.img,(databus.canvas.width-this.w)/2,(databus.canvas.height-this.h)/2,this.w,this.h)
  }
}