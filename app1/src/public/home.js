import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { Home } from './components/Home'

hydrateRoot(
  document.getElementById('root'),
  <Home name={window.__INITIAL__DATA__.name} />
)