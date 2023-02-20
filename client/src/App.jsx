import { Switch, Route } from "react-router-dom"
import './App.css'

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import TestimonialsPage from "./components/TestimonialsPage"
import ContactPage from "./components/ContactPage"
import WebDevPage from "./components/WebDevelopmentPage"
import AudioPage from "./components/AudioPage"
import VideoPage from "./components/VideoPage"
import GraphicDesignPage from "./components/GraphicDesignPage"
import EntrepreneurshipPage from "./components/EntrepreneurshipPage"
import FundraisingPage from "./components/FundraisingPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">
      <Header />
      <hr />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/testimonials">
          <TestimonialsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/web-development">
          <WebDevPage />
        </Route>
        <Route path="/audio">
          <AudioPage />
        </Route>
        <Route path="/video">
          <VideoPage />
        </Route>
        <Route path="/graphic-design">
          <GraphicDesignPage />
        </Route>
        
        <Route path="/entrepreneurship">
          <EntrepreneurshipPage />
        </Route>
        <Route path="/fundraising">
          <FundraisingPage />
        </Route>
      </Switch>

      <hr />
      <Footer />
    </div>
  )
}