import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom"

import Main from './components/Main'
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillPage";
function App() {
  return <>
  

    
    <ThemeProvider theme={lightTheme}>

    <Switch>
      <Route exact path="/portfolio/#" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillPage}/>
    </Switch>

    </ThemeProvider>
    
    
    </>
    
}

export default App

