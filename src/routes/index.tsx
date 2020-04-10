import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HomeContainer from '../containers/Home';
import MemoListContainer from '../containers/MemoList';
import DeletedMemoListContainer from '../containers/DeletedMemoList';
import { history } from '../store/configureStore';
import  DialogContainer from '../containers/Dialog'

const Root: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Route path="/memo" component={MemoListContainer} />
      <Route path="/trash" component={DeletedMemoListContainer} />
      <Redirect path="*" to="/" />
    </Switch>
    <DialogContainer/>
  </ConnectedRouter>
)

export default Root;