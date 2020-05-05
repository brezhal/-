import {DataBus} from './databus.js'
import {SeaBed} from './seabed.js'
import {Button} from './button.js'
import {Sealevel} from './sealevel.js'
import {Score} from './score.js'
import {Fish} from './fish.js'
import {Music} from './music.js'
import {Obstacle} from './obstacle.js'
let databus = new DataBus()

console.log(SeaBed)
/**
 * 游戏主函数
 */
export class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext("2d")
    databus.canvas = this.canvas
    databus.ctx = this.ctx
    this.minArea = 20
    this.maxArea = 50
    this.top = (databus.canvas.height/2-406)-this.ranDom(this.minArea,this.maxArea)
    this.down = databus.canvas.height/2+this.ranDom(this.minArea,this.maxArea)
    this.init()
  }
  ranDom(n,m){
    let c = m-n+1
    return Math.floor(Math.random() * c + n);
  }
  init(){
    this.bg = new SeaBed()
    this.btn = new Button()
    this.sealevel = new Sealevel()
    this.score = new Score()
    this.fish = new Fish()
    this.music = new Music()
    this.startGame()
  }
  startGame(){
    if(!databus.game_over){
      this.bg.render()
      this.btn.render()
      this.sealevel.render()
      this.score.render()
      this.fish.render()
      this.music.play()
    }
    requestAnimationFrame(()=>{
      this.startGame()
    })
  }
}
