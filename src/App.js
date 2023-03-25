import { WelcomeWindow, InitialForm, Quiz, Exercise, Dashboard, ExerciseList } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/ardilla/list" element={<ExerciseList/>}/>
        <Route exact path="/ardilla/:questionId" element={<Dashboard/>}/>
        <Route exact path="/ardilla" element={<Dashboard/>}/>
        <Route exact path="/login" element={<InitialForm/>}/>
        <Route exact path="/" element={<WelcomeWindow/>}/>
        <Route exact path="/veterinary" element={<Quiz/>}/>
        <Route exact path="/exercises" element={<Exercise/>}/>
      </Routes>
    </Router>  
  );
}

export default App;