import WinBox from 'winbox/src/js/winbox'

const generateWinBox = (title, ref) => {
  new WinBox({
    title: title,
    width: '500px',
    height: '400px',
    x: 'center',
    y: 'center',
    mount: ref.current,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}

export default generateWinBox
