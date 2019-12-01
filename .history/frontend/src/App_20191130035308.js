import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import app from './redux/reducers'

const univ = {univList : {
  0 : {
      name : "UC Berkeley",
      similarRanking : {
          name : "University of Southern California",
          place : "Los Angeles, CA"
          },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  1 : {
      name : "UC Los Angeles",
      similarRanking : {
          name : "Washington University in St. Louis",
          place : "St. Louis, MO"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  2 : {
      name : "UC San Diego",
      similarRanking : {
          name : "Boston College",
          place : "Chestnut Hill, MA"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  3 : {
      name : "UC Santa Barbara",
      similarRanking : {
          name : "University of Rochester",
          place : "Rochester, NY"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  4 : {
      name  : "UC Davis",
      similarRanking : {
          name  : "Boston University",
          place : "Boston, MA"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  5 : {
      name  : "UC Irvine",
      similarRanking : {
          name  : "University of Florida",
          place : "Gainesville, FL"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  6 : { 
      name  : "UC Santa Cruz",
      similarRanking : {
          name  : "North Carolina State University--Raleigh",
          place : "Raleigh, NC"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  7 : {
      name  : "UC Riverside",
      similarRanking : {
          name  : "Stony Brook University--SUNY",
          place : "Stony Brook, NY"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  },
  8 : {
      name  : "UC Merced",
      similarRanking : {
          name  : "Temple University",
          place : "Philadelphia, PA"
      },
      similarTuition : {
          name : "",
          place : ""
      }
  }
}
}
const store = createStore(app, univ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>  );
}

export default App;
//Trial My changes
