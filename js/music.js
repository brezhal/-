export class Music{
  constructor(){
    this.music = wx.createInnerAudioContext()
    this.music.src = "audios/bgm.mp3"
    this.music.loop = true
  }
  play(){
    this.music.play()
  }
}