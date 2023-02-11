import './styles/index.css'
import { AppRoutes } from './routes';
import { StyledContainerToast } from "./styles/toast"
import "react-toastify/dist/ReactToastify.css"

function App() {
  
  return (
    <div>
      <AppRoutes/>

      <StyledContainerToast className="toasts"
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
       />
    </div>
  )
}

export default App
