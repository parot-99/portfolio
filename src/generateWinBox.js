import WinBox from 'winbox/src/js/winbox'

const generateWinBox = (title, ref) => {
  new WinBox({
    title: title,
    width: '600px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
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
