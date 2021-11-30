<template>
  <div class="editor">
    <div class="editor__wrapper">
      <div class="editor__sidebarLeft">
        <ul class="editor__list">
          <li class="editor__item">
            <p class="editor__itemtext" @click="menu.bathroom = !menu.bathroom">Bathroom</p>
            <transition name="list">
              <ul class="editor__sublist" v-if="menu.bathroom">
                <li class="editor__subitem">Stein size</li>
                <li class="editor__subitem" @click="addArc()">Bohrung</li>
                <li class="editor__subitem" @click="addRect()">Ausschnitt</li>
                <li class="editor__subitem" @click="addExternalRect()">Ausklinkung</li>
                <li class="editor__subitem">Armierung</li>
              </ul>
            </transition>
          </li>
          <li class="editor__item">
            <p class="editor__itemtext" @click="menu.Kitchen = !menu.Kitchen">Kitchen</p>
            <transition name="list">
              <ul class="editor__sublist" v-if="menu.Kitchen">
                <li class="editor__subitem">Stein size</li>
                <li class="editor__subitem" @click="addArc()">Bohrung</li>
                <li class="editor__subitem" @click="addRect()">Ausschnitt</li>
                <li class="editor__subitem">Ausklinkung</li>
                <li class="editor__subitem">Armierung</li>
              </ul>
            </transition>
          </li>
          <li class="editor__item">
            <p class="editor__itemtext" @click="menu.Windowsill = !menu.Windowsill">Windowsill</p>
            <transition name="list">
              <ul class="editor__sublist" v-if="menu.Windowsill">
                <li class="editor__subitem">Stein size</li>
                <li class="editor__subitem" @click="addArc()">Bohrung</li>
                <li class="editor__subitem" @click="addRect()">Ausschnitt</li>
                <li class="editor__subitem"  @click="addExternalRect()">Ausklinkung</li>
                <li class="editor__subitem">Armierung</li>
              </ul>
            </transition>
          </li>
        </ul>
        <div class="editor__btnGroup">
          <button 
            class="appBtn appBtn--small appBtn--outline"
            @click="zoomIn()"
          >ZOOM IN</button>
          <button 
            class="appBtn appBtn--small appBtn--outline"
            @click="zoomOut()"
          >ZOOM OUT</button>
        </div>
      </div>
      <div class="editor__canvas" ref="canvasParent">
        <canvas 
          ref="canvas" 
          id="canvas"
          @mousemove="moveFunction($event)"
          @mousedown="downFunction($event)"
          @mouseup="stopResize($event)"
          @mousewheel.prevent="wheelFunction($event)"
        ></canvas>  
      </div>
      <div class="editor__sidebarRight sidebarRight">
          <template v-if="activeFigure">
            <p class="appText sidebarRight__title">
              Selected shape: 
            </p>
            <template v-if="activeFigure.type == 'rect'">
              <label for="width" class="sidebarRight__label">Width</label>
              <input id="width" class="appInput" type="number" :value="activeFigure.cords[2] * unitRate" placeholder="width" @change="setWidthFigure($event)">
              <label for="height" class="sidebarRight__label">Length</label>
              <input id="height" class="appInput" type="number" :value="activeFigure.cords[3] * unitRate" placeholder="height" @change="setHeightFigure($event)">
            </template>
            <template v-if="activeFigure.type == 'arc'">
              <label for="width" class="sidebarRight__label">diameter</label>
              <input id="width" class="appInput" type="number" :value="activeFigure.cords[2] * 2 * unitRate" placeholder="width" @change="setWidthFigure($event)">
            </template>
            <button class="sidebarRight__deleteBtn appBtn appBtn--outline" @click="DeleteFigure()" v-if="activeFigure.name != 'mainRect'">Delete figure</button>
          </template>
          <div class="sidebarRight__pricewrapper">
            <img src="../assets/img/texture.png" alt="">
            <p class="appText">The cost is calculated based on all your additions
            </p>
            <span class="sidebarRight__pricetext">Price</span>
            <span class="sidebarRight__price">€ 0</span>
            <button class="appBtn appBtn--outline sidebarRight__pay" @click="addToCard()">TO PAY</button>
          </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {getOneItem} from '@/api/shop'
import {mapGetters} from "vuex"

export default {
  name: 'EditorTiles',
  data: () => ({
    canvas: null,
    context: null, 
    WIDTH: 800,
    HEIGHT: 800,
    rect: [
      {
        lineWidth: 10,
        cords: [10, 10, 10, 10],
        name: 'mainRect',
        type: 'rect'
      },
    ],
    line: [
      [0, 0, 100, 500]
    ],
    resize: false,
    outline: null,
    resizeMain: null,
    dpiRate: 1,
    unitRate: 4,
    hoverLine: {
      cords:[0, 0, 0, 0],
      type: 'rect'
    },
    mainRect: {
      lineWidth: 10,
      cords: [10, 10, 10, 10],
      name: 'mainRect',
      type: 'rect'
    },
    alignLine: {
      left: {
        cords: [0, 0, 0, 0],
      },
      top: {
        cords: [0, 0, 0, 0]
      },
    },
    scale: 1,
    resizeRect: null,
    moveRect: null,
    activeFigure: null,
    menu: {
      Bathroom: true,
      Kitchen: false,
      Windowsill: false,
    },
    imageGrid: null
  }),
  mounted(){
    this.canvas = this.$refs.canvas
    this.context = this.canvas.getContext("2d")
    this.canvas.style.width = this.WIDTH + 'px'
    this.canvas.style.height = this.HEIGHT + 'px'
    this.mainRect = this.rect[this.rect.findIndex(item => item.name == 'mainRect')]
    this.mainRect.cords = this.toCenter(500, 500)

    // this.loadImage()
    // this.initGrid()
    this.run() 
  },
  methods: {
    async addToCard(){
      let item = await getOneItem(this.$route.params.id)
      item = {
        height: 500,
        width: 1000,
        height: 500,
        length: 200,
        bohrung: 3,
        ausschnitt: 5,
        ausklinkung: 0,
        armierung: true,
        polierte_kante: true,
        comment: '23312312321312312',
        qty_item: 0,
        total_price: item.price,
        item: item.id,
      }
      this.$store.dispatch('addToCart', item)
      this.$router.push('/payment')
    },
    toCenter(w,h){
     return [(this.DPI_WIDTH - w) / 2, (this.DPI_WIDTH - h) / 2, w, h]
    },
    // hello
    // hello
    run(){
      window.requestAnimationFrame(() => {
        // console.log(this.rect)
        this.render()
      })
    },
    setWidthFigure(event){
      this.activeFigure.cords[2] = event.target.value / this.unitRate
      this.activeFigure.cords[2] = this.activeFigure.type == 'arc' ?  this.activeFigure.cords[2] / 2 : this.activeFigure.cords[2]
      this.run()
    },
    setHeightFigure(event){
      this.activeFigure.cords[3] = event.target.value / this.unitRate
      this.run()
    },
    setWidth(event){
      this.mainRect.cords[2] = event.target.value / this.unitRate
      this.run()
    },
    setHeight(event){
      this.mainRect.cords[3] = event.target.value / this.unitRate
      this.run()
    },
    DeleteFigure(){
      const index = this.rect.findIndex(item => item == this.activeFigure)
      if(index){
        this.rect.splice(index, 1)
        this.activeFigure = null
        this.run()
      }
    },
    render(){
      this.context.clearRect(0, 0, this.DPI_WIDTH, this.DPI_HEIGHT)
      this.canvas.width = this.DPI_WIDTH
      this.canvas.height = this.DPI_HEIGHT
      this.initGrid()
      this.initFigure()
      this.initHoverline()
      this.initAlignLine()
    },
    wheelFunction(event){
      this.zooming(event)
    },
    zooming(event){
      if(event.wheelDelta < 0){
        this.dpiRate += 0.1
        
      // [/*x: */this.mainRect.cords[0],/*y: */ y + w / 2, x ,y + w / 2] 

      }else if(this.dpiRate > 0.3){
        this.dpiRate -= 0.1

        // this.dpiRate -= 0.2
      
      }
      this.mainRect.cords = this.toCenter(this.mainRect.cords[2], this.mainRect.cords[3])
      this.run()
    },
    zoomOut(){
      this.dpiRate += 0.2
      this.mainRect.cords = this.toCenter(this.mainRect.cords[2], this.mainRect.cords[3])
      this.run()
    },
    zoomIn(){
      this.dpiRate -= 0.2
      this.mainRect.cords = this.toCenter(this.mainRect.cords[2], this.mainRect.cords[3])
      this.run()
    },
    // add Function
    addRect(){
      this.rect.push({
        cords: this.toCenter(100, 100), 
        type: 'rect',
        lineWidth: 5
      })
      this.run()
    },
    addExternalRect(){
      this.rect.push({
        cords: [this.mainRect.cords[0], this.mainRect.cords[1], 250, 250], 
        type: 'external',
        lineWidth: 5
      })
      this.run()
    },
    addArc(){
      const [x,y,r,] = this.toCenter(50, 50)
      this.rect.push({
        cords: [x,y,r, 0, 2 * Math.PI], 
        type: 'arc',
        lineWidth: 5
      })
      this.run()
    },
    // Init Function

    initGrid(){
    
      const rectWidth = 50
      const rectHeight = 50
      const countRectX = Math.ceil(this.DPI_WIDTH / rectWidth)
      const countRectY = Math.ceil(this.DPI_HEIGHT / rectHeight)
      // const subRectWidth = rectWidth / 20
      // const subRectWidth = rectHeight / 20
      let x = 0
      let y = 0
      this.context.beginPath()
      let path1 = new Path2D()
      this.context.strokeStyle = '#f2f2f2'
      this.context.lineWidth = 5
      for (let i = 0; i < countRectX; i++) {
        path1.rect(x, y, rectWidth, rectHeight)
        for (let i1 = 0; i1 < countRectY; i1++) {
          path1.rect(x, y, rectWidth, rectHeight)
          y += rectHeight
        }
        y = 0
        x += rectWidth
      }
      this.context.stroke(path1)
      this.context.closePath()
      // console.log(countRectX, countRectY)
    },
    initAlignLine(){
      this.context.beginPath()
      this.context.strokeStyle = '#000'
      this.context.fillStyle = '#000'
      this.context.lineWidth = 3
      Object.keys(this.alignLine).forEach(item => {
        for (let i = 0; i < this.alignLine[item].cords.length; i++) {
          this.alignLine[item].cords[i] = Math.round(this.alignLine[item].cords[i]);
        }
        const [x,y,x2,y2] = this.alignLine[item].cords
        this.context.moveTo(x2,y2)
        this.context.lineTo(x,y)
      })
      this.context.font = `${this.toRate(15)}px Verdana`;
      this.context.fillText(Math.abs(this.alignLine.left.cords[2] - this.alignLine.left.cords[0]) * this.unitRate+"mm", 
      this.alignLine.left.cords[0] + this.toRate(10), this.alignLine.left.cords[1] - this.toRate(10));

      this.context.fillText(Math.abs(this.alignLine.top.cords[3] - this.alignLine.top.cords[1]) * this.unitRate+"mm", 
      this.alignLine.top.cords[0] + this.toRate(10), this.alignLine.top.cords[1] - this.toRate(10));
      this.context.stroke()
      this.context.closePath()
    },
    initHoverline(){
        this.context.beginPath()
        this.context.fillStyle = '#e4e4e4'
        this.context.strokeStyle = '#e4e4e4'
        switch (this.hoverLine.type) {
          case 'rect':
            this.initHoverRect()
            break;
          case 'arc':
            this.initHoverArc()
            break;
          default:
            break;
        }
        this.context.closePath()
    },
    initHoverRect(){
      var [x,y,w,h] = this.hoverLine.cords
      this.context.fillRect(x,y,w,h)
    },
    initHoverArc(){
      var [x,y,r,s,e] = this.hoverLine.cords
      this.context.arc(x,y,r,s,e)
      this.context.stroke()
    },
    initFigure(){
      this.mainRect = this.rect[this.rect.findIndex(item => item.name == 'mainRect')]
      this.rect.forEach((item) => {
        switch (item.type) {
          case 'rect':
          case 'external':
            this.initRect(item)
            break;
          case 'arc':
            this.initArc(item)
            break;
          default:
            break;
        }
      })  

    },
    initRect(item){

      this.context.beginPath()
      let path1 = new Path2D()
      for (let i = 0; i < item.cords.length; i++) {
        item.cords[i] = Math.round(item.cords[i]);
      }
      let [x,y,w,h] = item.cords
      

      let line = this.toRate(item.lineWidth) 
      this.context.strokeStyle = '#44324B'
      this.context.lineWidth = line
      path1.rect(x,y,w,h)
      this.context.stroke(path1)
      this.context.closePath()

      this.context.beginPath()
      this.context.lineWidth = 5
      this.context.stroke()
      this.context.font = `${this.toRate(15)}px Verdana`;
      this.context.fillText(((w ) * this.unitRate)  +"mm", x, y - this.toRate(15));
      this.context.fillText(h * this.unitRate+"mm", x - this.toRate(80), y + this.toRate(20));
      this.context.closePath()

      if(item.name !== 'mainRect'){ 
        this.context.beginPath()
        this.context.lineWidth = 3
        this.context.strokeStyle = '#d60728'
        this.context.moveTo(x + line / 2, y + line / 2)
        this.context.lineTo(x + w  - line / 2, y + h  - line / 2)
        this.context.moveTo(x + w  - line / 2, y  + line / 2)
        this.context.lineTo(x + line / 2, y + h - line / 2)
        this.context.stroke()
        this.context.closePath()
      }
    },
    initArc(item){
      this.context.beginPath()
      let [x,y,r,s,e] = item.cords
      r = Math.round(r);
      let line = this.toRate(item.lineWidth) 
      this.context.lineWidth = line
      this.context.strokeStyle = '#44324B'
      this.context.arc(x,y,r,s,e)
      this.context.stroke()
      this.context.font = `${this.toRate(15)}px Verdana`;
      this.context.fillText(r * 2 * this.unitRate+"mm", x - r, y - r - this.toRate(10));
      this.context.closePath()

      this.context.beginPath()
      this.context.strokeStyle = '#d60728'
      this.context.lineWidth = 3
      this.context.moveTo(x - r  + line / 2, y)
      this.context.lineTo(x + r  - line / 2 , y)
      this.context.moveTo(x, y - r + line / 2)
      this.context.lineTo(x, y + r - line / 2)
      this.context.stroke()
      this.context.closePath()
    },
    // mouse down Function
    downFunction(event){
      this.startResize(event)
      this.startMoveRect(event)
    },
    // Move Function
    moveFunction(event){
      // this.outlineRect(event)
      this.MoveResize(event)
      this.outlineFigure(event)
      this.moveHandler(event)
    },
    // mouse up Function
    stopResize(){
      this.resize = null
      this.resizeType = null
      this.resizeRect = null
      this.moveRect = null
    },
    // main rect
    startResize(event){
      this.rect.forEach((item, index) => {
        if(this.inCursorInside(item.cords, event, this.toRate(item.lineWidth))){
          this.startResizeRect(event, item, index)
        }
        if(this.inCursorInArcSide(item.cords, event, this.toRate(item.lineWidth))){
          // this.startResizeArc(event, item, index)
        }
     })
    },
    startResizeRect(event, item, index){
      let resizeType = this.inCursorInside(item.cords, event, this.toRate(item.lineWidth))
      if(resizeType != null){
        this.resizeType = resizeType
        this.resizeRect = this.rect[index]
      }
    },
    startResizeArc(event, item, index){
      let resizeType = this.inCursorInArcSide(item.cords, event, this.toRate(item.lineWidth))
      if(resizeType != null){
        this.resizeType = resizeType
        this.resizeRect = this.rect[index]
      }
    },
    startMoveRect(event){
      this.rect.forEach((item, index) => {
        if(this.isCursorInRect(item.cords, event, item.lineWidth) || this.isCursorInArc(item.cords, event, item.lineWidth)){
          this.moveRect = this.rect[index]
          this.activeFigure = this.rect[index]
        }
      })
    },
    moveHandler(event){
      this.alignLine.left.cords = [0, 0, 0 ,0]
      this.alignLine.top.cords = [0, 0, 0 ,0]
      if(this.moveRect != null){
          switch (this.moveRect.type) {
            case 'rect':
              this.MoveRect(event)
              break;
            case 'external':
              this.MoveExternal(event)
              break;
            case 'arc':
              this.MoveArc(event)
              break;
            default:
              break;
          }
      }
    },
    MoveExternal(event){
       
      let [x,y,w,h] = this.moveRect.cords

      // console.log('left side', x > this.mainRect.cords[0])
      // console.log('right side', (this.mainRect.cords[2] + this.mainRect.cords[0] - w) > x)
      if(y >= this.mainRect.cords[1]){
        y + 1
        this.moveRect.cords = [this.toRate(event.layerX) - w / 2, y,w,h]
      }
      if(y >= this.mainRect.cords[1] && x >= this.mainRect.cords[0]){
        x+1
        this.moveRect.cords = [x, this.toRate(event.layerY) - h / 2,w,h]
      }
      // if(x + w < this.mainRect.cords[0] + w + 10 && y + h < this.mainRect.cords[1] + h + 10){
      //   console.log('set')
      // }
      if(x <= this.mainRect.cords[0]){
        // left side
        this.moveRect.cords = [x = this.mainRect.cords[0] + 5,y,w,h]
        this.moveRect = null
      }
      if((this.mainRect.cords[2] + this.mainRect.cords[0] - w) <= x){
        // right side
        this.moveRect.cords = [x = (this.mainRect.cords[2] + this.mainRect.cords[0] - w) - 5,y,w,h]
        this.moveRect = null
      }

      if(y <= this.mainRect.cords[1]){
        // top side
        this.moveRect.cords = [x,y = this.mainRect.cords[1] + 5,w,h]
        this.moveRect = null

      }
      if((this.mainRect.cords[3] + this.mainRect.cords[1] - h) <= y){
        // bottom side
        this.moveRect.cords = [x,y = (this.mainRect.cords[3] + this.mainRect.cords[1] - h) - 5,w,h]
        this.moveRect = null

      }

      if(x + w / 2 > this.mainRect.cords[0] + this.mainRect.cords[2] / 2){
        this.alignLine.left.cords = [/*x: */this.mainRect.cords[0] +/*w: */ this.mainRect.cords[2],/*y: */ y + w / 2, x + w,y + w / 2]
      }else{
        this.alignLine.left.cords = [/*x: */this.mainRect.cords[0],/*y: */ y + w / 2, x ,y + w / 2]  
      }
      if(y + w / 2 > this.mainRect.cords[1] + this.mainRect.cords[3] / 2){
        this.alignLine.top.cords = [x + w / 2, /*y: */(this.mainRect.cords[1] + this.mainRect.cords[3]), x + w / 2, y + h]
      }else{
        this.alignLine.top.cords = [x + w / 2, /*y: */this.mainRect.cords[1], x + w / 2, y]
      } 

    },
    MoveRect(event){
      if(this.moveRect.name != 'mainRect'){
        var [x,y,w,h] = this.moveRect.cords
        this.moveRect.cords = [this.toRate(event.layerX) - w / 2, this.toRate(event.layerY) - h / 2,w,h]
      
        if(x + w / 2 > this.mainRect.cords[0] + this.mainRect.cords[2] / 2){
          this.alignLine.left.cords = [/*x: */this.mainRect.cords[0] +/*w: */ this.mainRect.cords[2],/*y: */ y + w / 2, x + w,y + w / 2]
        }else{
          this.alignLine.left.cords = [/*x: */this.mainRect.cords[0],/*y: */ y + w / 2, x ,y + w / 2]  
        }
        if(y + w / 2 > this.mainRect.cords[1] + this.mainRect.cords[3] / 2){
          this.alignLine.top.cords = [x + w / 2, /*y: */(this.mainRect.cords[1] + this.mainRect.cords[3]), x + w / 2, y + h]
        }else{
          this.alignLine.top.cords = [x + w / 2, /*y: */this.mainRect.cords[1], x + w / 2, y]
        } 

        if(x <= this.mainRect.cords[0]){
        // left side
          this.moveRect.cords = [x = this.mainRect.cords[0] + 5,y,w,h]
          this.moveRect = null
       }
        if((this.mainRect.cords[2] + this.mainRect.cords[0] - w) <= x){
          // right side
          this.moveRect.cords = [x = (this.mainRect.cords[2] + this.mainRect.cords[0] - w) - 5,y,w,h]
          this.moveRect = null
        }

        if(y <= this.mainRect.cords[1]){
          // top side
          this.moveRect.cords = [x,y = this.mainRect.cords[1] + 5,w,h]
          this.moveRect = null

        }
        if((this.mainRect.cords[3] + this.mainRect.cords[1] - h) <= y){
          // bottom side
          this.moveRect.cords = [x,y = (this.mainRect.cords[3] + this.mainRect.cords[1] - h) - 5,w,h]
          this.moveRect = null

        }
      }
    },
    MoveArc(event){
      this.resizeRect = null
      var [x,y,r,s,e] = this.moveRect.cords
      this.moveRect.cords = [this.toRate(event.layerX), this.toRate(event.layerY),r,s,e]
      if(x > this.mainRect.cords[0] + this.mainRect.cords[2] / 2){
        this.alignLine.left.cords = [/*x: */this.mainRect.cords[0] +/*w: */ this.mainRect.cords[2],/*y: */ y, x,y]
      }else{
        this.alignLine.left.cords = [/*x: */this.mainRect.cords[0],/*y: */ y, x,y]  
      }
      if(y > this.mainRect.cords[1] + this.mainRect.cords[3] / 2){
        this.alignLine.top.cords = [x, /*y: */(this.mainRect.cords[1] + this.mainRect.cords[3]), x, y]
      }else{
        this.alignLine.top.cords = [x, /*y: */this.mainRect.cords[1], x, y]
      } 
    },
    MoveResize(event){  
      if(this.resizeRect != null){
        switch (this.resizeRect.type) {
          case 'rect':
            if(this.resizeType != null){
              this.resizeRectHandler(event)
            }
            break;
            case 'arc':
              // this.resizeArcHandler(event)
            break;
          default:
            break;
        }
      }
    },
    resizeRectHandler(event){
      const [x,y,w,h] = this.resizeRect.cords
      this.moveRect = null
      switch (this.resizeType) {
        case 'right': 
          this.resizeRect.cords = [x,y,(this.toRate(event.layerX)) - x,h]
          break;
        case 'left': 
          this.resizeRect.cords = [this.toRate(event.layerX),y,w + (x - this.toRate(event.layerX)),h]
          break;
        case 'top': 
          this.resizeRect.cords = [x,this.toRate(event.layerY),w,h + (y - this.toRate(event.layerY))]
          break;
        case 'bottom': 
          this.resizeRect.cords = [x,y,w,this.toRate(event.layerY) - y]
          break;
        default:
          break;
      }
      this.run()
    },
    resizeArcHandler(event){
      let [x,y,,s,e] = this.resizeRect.cords
      this.moveRect = null
        switch (this.resizeType) {
          case 'top':
          case 'bottom': 
            this.resizeRect.cords = [x,y,Math.abs(this.toRate(event.layerY) - y),s,e]
            break;
          case 'left':
          case 'right':  
            this.resizeRect.cords = [x,y,Math.abs(this.toRate(event.layerX) - x),s,e]
            break;
          default: 
            break;
        }
    },
    outlineFigure(event){
      this.hoverLine = {
        cords:[0, 0, 0, 0]
      }
      this.rect.forEach((item) => {
        const line = this.toRate(item.lineWidth)
        switch (item.type) {
          case 'rect':
            if(this.inCursorInside(item.cords, event, line)){
              this.outlineRect(item, event, line)
            }
            break;
          case 'arc':
            if(this.inCursorInArcSide(item.cords, event, line)){
              this.outlineArc(item, event)
            }
            break;
          default:
            break;
        } 
      })
      this.run()     
    },
    outlineArc(item){
      this.hoverLine.type = 'arc'
      var [x,y,r,s,e] = item.cords
      this.hoverLine.cords = [x,y,r,s,e]
    },
    outlineRect(item, event, line){
      const [x,y,w,h] = item.cords
      this.hoverLine.type = 'rect'
      switch (this.inCursorInside(item.cords, event, line)) {
        case 'right': 
          this.hoverLine.cords = [x + w - line / 2,y + line / 2, line,h - line]
          break;
        case 'left': 
          this.hoverLine.cords = [x - line / 2,y + line / 2, line,h - line]
          break;
        case 'top': 
          this.hoverLine.cords = [x + line / 2,y - line / 2,w - line ,line]
          break;
        case 'bottom': 
          this.hoverLine.cords = [x + line / 2,y + h - line / 2,w - line ,line]
          break;
        default:
          break;
      }
    },
    // Check Cursor Function
    isCursorInRect(rect, event, borderWidth){
      const [x,y,w,h] = rect
      let layerX = this.toRate(event.layerX)
      let layerY = this.toRate(event.layerY)
      return (layerX  > x + borderWidth && layerX  < x + w - borderWidth) && (layerY  > y + borderWidth && layerY  < y + h - borderWidth)
    },
    isCursorInArc(rect, event, borderWidth){
      const [x,y,r, , ] = rect
      let layerX = this.toRate(event.layerX)
      let layerY = this.toRate(event.layerY) 
      return (layerX  > x - r + borderWidth && layerX  < x + r - borderWidth) 
      && (layerY  > y - r + borderWidth && layerY  < y + r - borderWidth)
    },
    inCursorInArcSide(rect, event, borderWidth){
      const [x,y,r, , ] = rect
      let layerX = this.toRate(event.layerX)
      let layerY = this.toRate(event.layerY)
      if((layerX  > x + r - borderWidth / 2 && layerX  < x + r + borderWidth / 2) 
      && (layerY  > y - r && layerY  < y + r + borderWidth)){
        // rightSide
        return 'right'
      }
      if((layerX  > x - r - borderWidth / 2 && layerX  < x - r + borderWidth / 2) 
      && (layerY  > y - r && layerY  < y + r + borderWidth)){
        // leftSide
        return 'left'
      }
      if((layerX  > x - r && layerX  < x + r) 
      && (layerY  > y - r - borderWidth / 2 && layerY  < y - r + borderWidth / 2)){
        // topSide
        return 'top'
      }
      if((layerX  > x - r && layerX  < x + r) 
      && (layerY  > y + r - borderWidth / 2 && layerY  < y + r + borderWidth / 2)){
        // bottomSide
        return 'bottom'
      }
      return false
    },
    inCursorInside(rect, event, borderWidth){
      const [x,y,w,h] = rect
      let layerX = this.toRate(event.layerX)
      let layerY = this.toRate(event.layerY)

      if(((layerX  > (x + w - borderWidth / 2)) && layerX  < (x + w + borderWidth / 2)) && (layerY  > y && layerY  < y + h)){
        // rightSide
        return 'right'
      }
      if(((layerX  > x - borderWidth / 2) && layerX  < (x + borderWidth / 2)) && (layerY  > y && layerY  < y + h)){
        // leftSide
        return 'left'
      }
      if(((layerX  > x - borderWidth / 2) && layerX  < x + w) && (layerY  > y - borderWidth / 2 && layerY  < y + borderWidth / 2)){
        // topSide
        return 'top'
      }
      if(((layerX  > x - borderWidth / 2) && layerX  < x + w) && (layerY  > y + h - borderWidth / 2 && layerY  < y + h + borderWidth / 2)){
        // bottomSide
        return 'bottom'
      }
    },
    toRate(value){
      return value * this.dpiRate
    },
    toScale(value){
      return value * this.scale
    },
    async loadImage(){
        const image = new Image()
        image.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4="
        image.onload = () => {
          this.imageGrid = image
          this.run()
        }
    }
  },
  computed: {
    // DPI_WIDTH(){
    //   return this.mainRect
    // },
    DPI_WIDTH(){
      return this.WIDTH * this.dpiRate
    },
    DPI_HEIGHT(){
      return this.HEIGHT * this.dpiRate
    },
    ...mapGetters(['user']),
    
  }
}
</script>

<style lang="less">
 
</style>