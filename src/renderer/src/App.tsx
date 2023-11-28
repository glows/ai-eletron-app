import Versions from './components/Versions'
import icons from './assets/icons.svg'
import ChatGPT from './components/chatGPT'
import { ThemeProvider } from './components/theme-provider'

function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      {/* <Versions></Versions> */}

      <ChatGPT></ChatGPT>
    </ThemeProvider>
  )
}

export default App
