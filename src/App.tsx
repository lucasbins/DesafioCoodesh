import Footer from "./components/footer";
import Header from "./components/header";
import { ListPacients } from "./components/listPacients";

function App() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
     <Header/>
     <ListPacients /> 
     <Footer/>
    </div>
  )
}

export default App
