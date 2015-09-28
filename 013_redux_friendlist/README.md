## ActionTypesの整理

- 友達情報をリクエストする
  - REQUEST_FRIEND_LIST
- 友達情報を受け取る
  - RECEIVE_FRIEND_LIST
  
## Actionの定義

- REQUEST_FRIEND_LISTに対応して`requestFriendList()`
- RECEIVE_FRIEND_LISTに対応して`receiveFriendList()`
- 非同期にAPIコールするアクションとして`fetchFriendList()`

## Store作成ロジックの変更

- async対応するために、ミドルウェア(redux-thunk)を追加する

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);
```

## reducerの定義

- friendList reducerの定義
  - initialStateを引数で定義(ES6)
  - タイプ別(REQUEST_FRIEND_LIST, RECEIVE_FRIEND_LIST)に返すstateオブジェクトを作成して返す

- rootReducerに登録する


## fetchFriendListの実行箇所を定義

- コンテナAppで、実行する

```javascript
import { fetchFriendList } from '../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFriendList());
  }
  render() {
    ...
  }
}
```

## Viewにリストを表示

```javascript
render() {
  const { dispatch, friendList } = this.props;
  return (
    <ul>
      {friendList.list.map((user, index) =>
        <li>{user.name}</li>
      )}
    </ul>
  )
}
```
