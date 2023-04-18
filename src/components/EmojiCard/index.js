import './index.css'

const EmojiCard = props => {
  const {emojiDetails, gameStatusCheck} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickEmoji = () => {
    gameStatusCheck(id)
  }
  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
