## 003-flux-tall

### watch source change

```javascript
gulp.task('watch', function() {
   gulp.watch('src/**/*.*', ['default']);
});
```

### dispatcher

![preview](http://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

- http://facebook.github.io/flux/docs/overview.html
- http://www.infoq.com/jp/news/2014/05/facebook-mvc-flux
> Every action is sent to all stores via the callbacks the stores register with the dispatcher.<br>
> dispatcherは、Fluxアプリケーションの全てのデータフローを管理する中央のハブです。これは、本質的にはStore内のコールバックの登録場所です。<br>
> 各Storeは、それ自身を登録しコールバックを提供します。<br>
> このDispatcherが あるアクションに応答する際には、アプリケーション内のすべてのStoreはそこに登録されているコールバックによって、アクションによって生じたデータを送信されるのです。<br>
> アプリケーションが成長するに従い、決まった順序で登録されたコールバックを実行することによって、Store間の依存関係を管理できるのでDispatcherはさらに不可欠なものになります。<br>
> 宣言にしたがって、Store は他のStoreの更新が完了するまで待つことができます。<br>
> そしてその後自分自身を更新します。<br>
> Storeは、アプリケーションの状態とロジックを含んでいます。<br>
> Storeの役割は、古典的なMVCにおけるModelの役割に少し似ていますが、しかし多数のオブジェクトの状態を管理していて、一個のオブジェクトのインスタンスではないという点が異なっています。<br>
> また、Backboneフレームワー クのコレクションと同じものでもありません。ORM形式のオブジェクトの集 合を管理するよりももっと単純に、Storeはそのアプリケーション内のある特定のドメインについて、アプリケーションの状態を管理します。<br>

- http://www.mobi-connect.net/success/detail.php?id=43
> Viewで発生したユーザー操作はActionを経由してDispatcherを呼び出します。DispatcherのコールバックとしてStoreの処理を呼び出し、Storeは処理が終わるとChange Eventをemitします。<br>
> ViewはStoreのChange Eventをlistenしていて、Change Eventを受け取ると自身のstateを更新します。<br>
> stateの更新によりViewの表示が更新されます。

### dispatcher structure

```bash
root/src
├── index.html
└── js
    ├── components
    │   └── app.js
    ├── dispatchers
    │   └── app-dispatcher.js // <-
    └── main.js

```

### actions

### actions structure

```bash
root/src
├── index.html
└── js
    ├── components
    │   └── app.js
    ├── dispatchers
    │   └── app-dispatcher.js
    ├── actions
    │   └── app-actions.js // <-
    └── main.js

```

### connect view and actions

#### app component

```javascript
/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');

/**
 * @description
 * <APP /> Component
 */
var APP = React.createClass({
    handleClick: function() {
        // execute addItem action
        AppActions.addItem('this is the item');
    },
    render: function() {
        return (
          // bind handler
          <h1 onClick={this.handleClick}>Hello React!</h1>
        );
    }
});

module.exports = APP;

```

#### app actions

```javascript
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  addItem: function(item) {
      // Dispatch
      AppDispatcher.handleViewAction({
          actionType: 'addItem',
          item: item
      });
  }
};

module.exports = AppAct
```

#### constants

- http://qiita.com/koba04/items/b32ba449d753fdb2b597#flux%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E8%A6%81%E7%B4%A0
> Fluxでは、各要素間でやりとりするtypeを定数のように定義します。


- https://github.com/facebook/flux/blob/master/examples/flux-chat/js/constants/ChatConstants.js
> Facebookのチャットサンプル

#### constants structure

```bash
root/src
├── index.html
└── js
    ├── actions
    │   └── app-actions.js
    ├── components
    │   └── app.js
    ├── constants
    │   └── app-constants.js // <-
    ├── dispatchers
    │   └── app-dispatcher.js
    └── main.js

```

#### app constants