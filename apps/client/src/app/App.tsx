import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { StoreProvider } from '../store'

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  )
}

export default App
