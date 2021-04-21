import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Home } from '../Home'
import { Gallery } from '../Gallery'
import { ImageView } from '../ImageView'
import { Modal } from '../Modal'

const ModalSwitch = () => {
  let location = useLocation()

  let background = location.state && location.state.background

  return (
    <div>
      <Switch location={background || location}>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/img/:id">
          <ImageView />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      {background && <Route path="/img/:id" component={Modal} />}
    </div>
  )
}
export default ModalSwitch
