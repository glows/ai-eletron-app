import { createBrowserRouter } from 'react-router-dom'
import App  from '../App'
import WhisperPage from '@renderer/whisper-page/page'

export const router: any = createBrowserRouter([
  {
    path: '/',
    element: <WhisperPage />,
  }
])
