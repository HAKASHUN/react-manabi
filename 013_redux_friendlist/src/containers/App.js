import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriendList } from '../actions';

/**
 * なぜ、Componentを継承しないといけないのか？
 * => reactのコンポーネントとして持つべき機能を用いるため
 */
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFriendList());
  }
  render() {
    const { dispatch, list, isFetching } = this.props;
    return (
      <ul>
        {isFetching && list.length === 0 &&
          <h2>Loading...</h2>
        }
        {list.map((user, index) =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
    )
  }
}

/**
 * Providerコンポーネントで手渡されたstateからPropsに変換する
 * 巨大なステートを管理する
 */
function mapStoreToProps(state) {
  const { friendList } = state;
  const {
    isFetching,
    list
    } = friendList || {
    isFetching: true,
    list: []
  };
  return {
    isFetching,
    list
  }
}

/**
 * reduxでは、１つのステートのみ扱う
 * ルートであるAppと、その巨大なデータをここで紐づける
 *
 * 実行されるのは、
 * - https://github.com/rackt/react-redux/blob/master/src/components/createConnect.js#L26
 * - https://github.com/rackt/react-redux/blob/master/src/components/createConnect.js#L78
 */
export default connect(mapStoreToProps)(App);
