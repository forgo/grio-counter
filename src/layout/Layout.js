import React from 'react'
import FlexColumn from '../common/FlexColumn'
import FlexRow from '../common/FlexRow'
import ThemeProvider from '../contexts/ThemeProvider'
import Background from './Background'
import Header from './Header'
import Left from './Left'
import Main from './Main'
import Right from './Right'
import Footer from './Footer'

const styleFlexColumn = {
  minHeight: '100vh',
  width: '100%',
  overflow: 'hidden',
}

const styleFlexRow = {
  flex: '1 1 auto',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  width: '100%',
}

export default class Layout extends React.Component {
  render() {
    const { header, left, main, right, footer } = this.props

    return (
      <ThemeProvider>
        <Background>
          <FlexColumn style={styleFlexColumn}>
            <Header>{header}</Header>
            <FlexRow style={styleFlexRow}>
              <Left>{left}</Left>
              <Main>{main}</Main>
              <Right>{right}</Right>
            </FlexRow>
            <Footer>{footer}</Footer>
          </FlexColumn>
        </Background>
      </ThemeProvider>
    )
  }
}
