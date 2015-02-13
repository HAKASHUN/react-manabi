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

