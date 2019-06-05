Vue.component('colorpicker', {
  template:
    '  <div class="m-colorPicker" ref="colorPicker" v-on:click="event => { event.stopPropagation() }">\n' +
    '    <!-- 颜色显示小方块 -->\n' +
    '    <div class="colorBtn"\n' +
    '      v-bind:style="`background-color: ${showColor}`"\n' +
    '      v-on:click="openStatus = !disabled"\n' +
    '      v-bind:class="{ disabled: disabled }"\n' +
    '    ></div>\n' +
    '    <!-- 用以激活HTML5颜色面板 -->\n' +
    '    <input type="color"\n' +
    '      ref="html5Color"\n' +
    '      v-model="html5Color"\n' +
    '      v-on:change="updataValue(html5Color)">\n' +
    '    <!-- 颜色色盘 -->\n' +
    '    <div class="box" v-bind:class="{ open: openStatus }">\n' +
    '      <div class="bd">\n' +
    '        <h3>主题颜色</h3>\n' +
    '        <ul class="tColor">\n' +
    '          <li\n' +
    '            v-for="color of tColor"\n' +
    '            v-bind:style="{ backgroundColor: color }"\n' +
    '            v-on:mouseover="hoveColor = color"\n' +
    '            v-on:mouseout="hoveColor = null"\n' +
    '            v-on:click="updataValue(color)"\n' +
    '          ></li>\n' +
    '        </ul>\n' +
    '        <ul class="bColor">\n' +
    '          <li v-for="item of colorPanel">\n' +
    '            <ul>\n' +
    '              <li\n' +
    '                v-for="color of item"\n' +
    '                v-bind:style="{ backgroundColor: color }"\n' +
    '                v-on:mouseover="hoveColor = color"\n' +
    '                v-on:mouseout="hoveColor = null"\n' +
    '                v-on:click="updataValue(color)"\n' +
    '              ></li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '        <h3>标准颜色</h3>\n' +
    '        <ul class="tColor">\n' +
    '          <li\n' +
    '            v-for="color of bColor"\n' +
    '            v-bind:style="{ backgroundColor: color }"\n' +
    '            v-on:mouseover="hoveColor = color"\n' +
    '            v-on:mouseout="hoveColor = null"\n' +
    '            v-on:click="updataValue(color)"\n' +
    '          ></li>\n' +
    '        </ul>\n' +
    '        <h3 v-on:click="triggerHtml5Color">更多颜色...</h3>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n',
  name: 'colorPicker',
  props: {
    // 当前颜色值
    value: {
      type: String,
      required: true
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: '#000'
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 面板打开状态
      openStatus: false,
      // 鼠标经过的颜色块
      hoveColor: null,
      // 主题颜色
      tColor: ['rgba(255,255,255,0)', '#fff', '#eeece1', '#4e81bb', '#e2534d', '#9aba60', '#8165a0', '#47acc5', '#f9974c'],
      // 颜色面板
      colorConfig: [
        ['#7f7f7f', '#f2f2f2'],
        ['#0d0d0d', '#808080'],
        ['#1c1a10', '#ddd8c3'],
        ['#233f5e', '#dae5f0'],
        ['#632623', '#f2dbdb'],
        ['#4d602c', '#eaf1de'],
        ['#3f3150', '#e6e0ec'],
        ['#1e5867', '#d9eef3'],
        ['#99490f', '#fee9da']
      ],
      // 标准颜色
      bColor: ['#c21401', '#ff1e02', '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#72349d'],
      html5Color: this.value
    }
  },
  computed: {
    // 显示面板颜色
    showPanelColor () {
      if (this.hoveColor) {
        return this.hoveColor
      } else {
        return this.showColor
      }
    },
    // 显示颜色
    showColor () {
      if (this.value) {
        return this.value
      } else {
        return this.defaultColor
      }
    },
    // 颜色面板
    colorPanel () {
      let colorArr = []
      for (let color of this.colorConfig) {
        colorArr.push(this.gradient(color[1], color[0], 5))
      }
      return colorArr
    }
  },
  methods: {
    triggerHtml5Color () {
      this.$refs.html5Color.click()
    },
    // 更新组件的值 value
    updataValue (value) {
      this.$emit('input', value)
      this.$emit('change', value)
      this.openStatus = false
    },
    // 设置默认颜色
    handleDefaultColor () {
      this.updataValue(this.defaultColor)
    },
    // 格式化 hex 颜色值
    parseColor (hexStr) {
      if (hexStr.length === 4) {
        hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3]
      } else {
        return hexStr
      }
    },
    // RGB 颜色 转 HEX 颜色
    rgbToHex (r, g, b) {
      let hex = ((r << 16) | (g << 8) | b).toString(16)
      return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
    },
    // HEX 转 RGB 颜色
    hexToRgb (hex) {
      hex = this.parseColor(hex)
      let rgb = []
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
      }
      return rgb
    },
    // 计算渐变过渡颜色
    gradient (startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      let sColor = this.hexToRgb(startColor)
      let eColor = this.hexToRgb(endColor)

      // 计算R\G\B每一步的差值
      let rStep = (eColor[0] - sColor[0]) / step
      let gStep = (eColor[1] - sColor[1]) / step
      let bStep = (eColor[2] - sColor[2]) / step

      let gradientColorArr = []
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(this.rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])))
      }
      return gradientColorArr
    }
  },
  mounted () {
    // 点击页面上其他地方，关闭弹窗
    document.onclick = (e) => {
      this.openStatus = false
    }
  }
});

