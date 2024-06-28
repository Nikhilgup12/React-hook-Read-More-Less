import {useState} from 'react'
import {
  ReadMoreMainContainer,
  ReadMoreContainer,
  ReadMoreImage,
  ReadMoreButton,
  ReadMoreHeading
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const desc = reactHooksDescription.slice(0, 171)
  const [read, setRead] = useState(true)
  const onRead = () => {
    setRead(prevState => !prevState)
  }
  const buttonText = read ? 'Read More' : 'Read Less'
  return (
    <>
      <ReadMoreMainContainer>
        <ReadMoreContainer>
          <ReadMoreHeading> React Hooks </ReadMoreHeading>
          <p> Hook are new addition to React </p>
          <ReadMoreImage
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <p> {read ? desc : reactHooksDescription} </p>
          <ReadMoreButton onClick={onRead}> {buttonText} </ReadMoreButton>
        </ReadMoreContainer>
      </ReadMoreMainContainer>
    </>
  )
}

export default ReadMore
