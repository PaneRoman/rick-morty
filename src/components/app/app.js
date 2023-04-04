import { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import CharacterInfo from "../../pages/CharacterPage";
import HomePage from "../../pages/HomePage";

import './app.scss';


class App extends Component {
  
createFakeSkeletonData = () => {
  let fakeArr = Array(8).fill({loading: true, name: 'Rick', species: 'Human'});
  
  return fakeArr.map(item => {
    return {...item, id: uuidv4()};
  })
}


render() {
    
    // console.log('test')
    
    return(
      <ChakraProvider>
        <div className="app">
          <section className="rick-morty">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:id" element={<CharacterInfo />} />
            </Routes>
          </section>
        </div>
      </ChakraProvider>
    );
  }
}

export default App;