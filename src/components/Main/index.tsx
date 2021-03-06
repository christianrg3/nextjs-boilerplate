import * as Styled from './styles'

function Main() {
  return (
    <Styled.Wrapper>
      <Styled.Logo src="/img/logo.svg" alt="image of an atom" />
      <Styled.Title>Next.js Boilerplate</Styled.Title>
      <Styled.Description>
        Typescript, React.js, Next.js and Styled Components
      </Styled.Description>
      <Styled.Illustration
        src="/img/hero-illustration.svg"
        alt="a developer facing a screen with code"
      />
    </Styled.Wrapper>
  )
}

export default Main
