## 010_react-modal

### react-modal

https://github.com/rackt/react-modal

### 概要

* bodyの直下にモーダル用のコンテナエレメントを出力する
* `isOpen`が`true`になると、DOMが出力され、コンテナエレメントにModalの中身が出力される
* `isOpen`が`false`になると、Modalの中身は消される

* `ModalPortal`と`Modal`の2つのコンポーネントから成り立っている
* `ModalPortal`は`Modal`本体が入るコンテナ要素として常に存在する
* `<Modal></Modal>`タグで囲まれた中身が`Modal`として出力される


### before

```html
<Modal>
  <button>close</button>
  <h2>Hello</h2>
</Modal>
```

#### after

```html
<div class="ReactModalPortal">
  <div class="ReactModal__Overlay ReactModal__Overlay--after-open " style="position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px;">
    <div class="ReactModal__Content ReactModal__Content--after-open " tabindex="-1">
      <button>close</button>
        <h2>Hello</h2>
    </div>
  </div>
</div>
```

* class名は勝手につく
* Overlay要素も`position: fixed; left: 0px; right: 0px; top: 0px; bottom: 0px;`のスタイルとともに自動で出力される