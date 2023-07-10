import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
function App() {
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
  
  export default App;
  