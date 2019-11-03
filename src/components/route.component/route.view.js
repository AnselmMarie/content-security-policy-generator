/* Node Modules */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* Routes */
import DefaultRoute from '../../routes/default.route';
import ImgRoute from '../../routes/img.route';
import StyleRoute from '../../routes/style.route';
import ScriptRoute from '../../routes/script.route';
import FrameRoute from '../../routes/frame.route';
import FontRoute from '../../routes/font.route';
import GenerateRoute from '../../routes/generate.route';
import ErrRoute from '../../routes/err.route';

export default ($this) => {
  return (
    <Switch>
      <Route exact path="/" component={DefaultRoute} />
      <Route exact path="/img-src" component={ImgRoute} />
      <Route exact path="/style-src" component={StyleRoute} />
      <Route exact path="/script-src" component={ScriptRoute} />
      <Route exact path="/frame-src" component={FrameRoute} />
      <Route exact path="/font-src" component={FontRoute} />
      <Route exact path="/generate" component={GenerateRoute} />
      <Route component={ErrRoute} />
  </Switch>
  )
}