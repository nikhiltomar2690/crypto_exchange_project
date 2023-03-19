import { Navbar,Welcome,Footer,Services,Transactions} from "./components"
const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/*these all components can use their code easily a multiple times also becoz of React's reusability*/}
        <Navbar />  
        <Welcome />
      </div>
      <Footer/>
      <Services />
      <Transactions />
    </div>
  )
}

export default App
