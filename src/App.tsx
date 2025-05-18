import { RouterProvider } from "react-router-dom"
import mainRouter from "./routes/router"

function App() {

  return (
    <div className="App">
      <RouterProvider router={mainRouter} />
    </div>
  )
}

export default App;
