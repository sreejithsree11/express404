# Express 404

Handle express 404 route failure in single function.

# Usage

const express404 = require('express404')

* All you need to do is add the function at the very bottom of the stack (below all other functions)

### For getting json response back
```
express404(app, 'json', 'Invalid route');
```


### For rendering a 404 page intead of json response
Please create a views folder and create a file(eg: 404.ejs)
```
express404(app, 'template', '404');
```
