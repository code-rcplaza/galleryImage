import React, { Fragment, useState } from 'react';
import ImageGrid from './components/ImageGrid';

import './App.css';
import { NavBar } from './components/NavBar';
import { TitlePage } from './components/TitlePage'

const App = ({ defaultCategory = ['photos'] }) => {

  const [categories /*, setCategories*/] = useState(defaultCategory)


  return (
    <Fragment>
      <NavBar />

      <TitlePage />

      {categories.map((category) => (
        <ImageGrid key={category}
          category={category} />
      ))}
    </Fragment>
  );
}

export default App