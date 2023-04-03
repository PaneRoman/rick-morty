import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";

import ContentBlock from "../content-block/content-block";
import MenuList from "../menu-list/menu-list";
import SearchBar from '../search-bar/search-bar';
import ContentBlock2 from "../ContentBlock2/ContentBlock2";
import SearchBar2 from "../SearchBar2/SearchBar2";

import CharacterInfo from "../../pages/CharacterPage";
import HomePage from "../../pages/HomePage";

import { getData } from "../../Utils";

import logo from '../../logo.svg';
import rmLogo from '../../img/rick_morty_logo.png';

import './app.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topMenuLinks: ['Home', 'About', 'Contacts'],
      navBarLinks: ['Posts', 'Gallery'],
      postsData: [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },{
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },{
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },{
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      }],
      galleryData: [{
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },{
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },{
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },{
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },{
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },{
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      }],
      toggleName: 'posts',
      isLoading: true,
      photoData: []
    }
  }

  onToggleName = (name) => {
    this.setState({
      toggleName: name
    })
  }

  chooseRenderData = (posts, gallery, toggle) => {
    switch (toggle) {
      case 'posts':
        return posts;
      case 'gallery':
        return gallery;
          
      default:
        break;
    }
  }

  // getCharactersData = async () => {
  //   const response = await getData();
  //   const data = await response.json();
  //   console.log('charactersData >>>', data);
  //   return data
  // }

  // componentDidMount() {
  //   getData().then(data => {
  //       this.setState({
  //           isLoading: false,
  //           photoData: data
  //       })
        
  //   })
  // }

createFakeSkeletonData = () => {
  let fakeArr = Array(8).fill({loading: true, name: 'Rick', species: 'Human'});
  
  return fakeArr.map(item => {
    return {...item, id: uuidv4()};
  })

}


render() {
    const {topMenuLinks, navBarLinks, postsData, galleryData, toggleName, photoData, isLoading} = this.state;
    console.log('topMenuLinks', topMenuLinks);
    console.log('toggleName', toggleName);
    console.log('photoData >>>', photoData);
    console.log('isLoading >>>', isLoading);
    
    const renderData = this.chooseRenderData(postsData, galleryData, toggleName);

    // const skeletonData = this.createFakeSkeletonData()
  
    // const charactersData = this.getCharactersData()
    // console.log('charactersData >>>', charactersData)

    console.log('test')
    

    return(
      <ChakraProvider>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <MenuList
              menu='top'
              menuLinks={topMenuLinks}
              toggleName={toggleName}
              onToggleName={this.onToggleName} />
            <SearchBar position='header' />
          </header>
          <section className="app-content">
            <div className="content-nav-bar">Menu
              <MenuList
                menu='nav'
                menuLinks={navBarLinks}
                toggleName={toggleName}
                onToggleName={this.onToggleName}
                 />
            </div>
            
            <ContentBlock 
              renderData={renderData}
              toggleName={toggleName}/>
          </section>
          <footer className="app-footer">
            <div className="info-wrap">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="app-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
            <SearchBar position='footer' />
          </footer>


          {/* <section className="rick-morty-app">
            <img src={rmLogo} className="rick-morty-logo" alt="logo" />
            <SearchBar2 />
            <ContentBlock2 
              charactersData='' />
          </section> */}

          {/* <Link to="/info">character info page link</Link> */}
          {/* <Routes>
              <Route path="/" element={<CharacterInfo />} />
          </Routes> */}

          <section className="rick-morty">

        
            <Routes>
              {/* <Route path="/" element={<HomePage renderData={isLoading ? skeletonData : photoData} />} /> */}
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