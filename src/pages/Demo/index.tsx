/**
 * Created by Vincent on 2018/8/6.
 */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import User from 'stores/User';

interface DemoProps extends RouteComponentProps {
  user?: User; // injected
}

// @ts-ignore
@withRouter
@inject('user')
@observer
export default class Demo extends Component<DemoProps> {
  render() {
    let { user } = this.props;
    if (!user.loggedIn) {
      return (
        <button onClick={() => user.login('admin', '123456')}>login</button>
      );
    }
    return (
      <div>
        {user.info.name}-{user.info.age}
      </div>
    );
  }
}