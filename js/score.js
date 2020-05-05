import {DataBus} from './databus.js'

let databus = new DataBus()
export class Score{
  constructor(){
    this.text = "COUNT"
  }
  render(){
    console.log(databus.ctx)
    databus.ctx.font = "30px 华文彩云"
    databus.ctx.strokeStyle="#ffffff"
    databus.ctx.lineWidth=2
    databus.ctx.strokeText(this.text,10,100)
  }
}