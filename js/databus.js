let instance

/**
 * 全局状态管理器
 */
export class DataBus {
  constructor() {
    if (instance) return instance
    
     instance = this
     this.game_over = false
     this.canvas
     this.ctx
     this.obstacleSrc=['/images/pi_down.png',"/images/pi_up.png"]

  }


}