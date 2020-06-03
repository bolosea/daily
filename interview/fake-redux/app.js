import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
class Index extends Component {

  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor(){
    super()
    this.state = {
      themeColor: 'red'
    }
  }
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
    )
  }
}

class Title extends Component {

  static contextTypes = {
    themeColor: PropTypes.string
  }
  changeColor(){
    console.log('change..','没点卵用');
    this.context.themeColor = 'green'
  }
  render () {
    return (
      <h1 style={{color: this.context.themeColor}} onClick={this.changeColor.bind(this)}>React.js 小书标题</h1>
    )
  }
}

class Content extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
    <div>
      <h2 style={{color: this.context.themeColor}} >React.js 小书内容</h2>
    </div>
    )
  }
}

ReactDOM.render(<Index/>,document.getElementById('app'))