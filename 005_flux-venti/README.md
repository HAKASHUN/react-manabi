## 005_flux-venti

### Catalog Component

```bash
src/js/components
├── app-catalog.js // <=
└── app.js
```

```javascript
/** @jsx React.DOM */
var React = require('react');
var Catalog = React.createClass({
    render: function() {
        return (
          <p>This is a Catalog Component.</p>
        )
    }
});
module.exports = Catalog;
```

