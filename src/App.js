import React from 'react';
import Jobs from './components/Jobs';
import store from './store';
import { Provider } from 'react-redux'


function App() { 
  return (
    <Provider store={store}>
    <div >
      <header>
      <h1>hello</h1>
      <Jobs/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
