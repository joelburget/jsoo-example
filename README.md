```
cd js
npm install
npm run dev
```

->

```
Module not found: Can't resolve 'fs'
  934 |      {if(i >>> 0 >= s.l)caml_bytes_bound_error();
  935 |       return caml_bytes_unsafe_set(s,i,c)}
> 936 |     function MlNodeFile(fd){this.fs = require("fs");this.fd = fd}
      |                            ^
  937 |     MlNodeFile.prototype = new MlFile();
  938 |     MlNodeFile.prototype.truncate
  939 |     =

Import trace for requested module:
./pages/index.js

https://nextjs.org/docs/messages/module-not-found
Native Node.js APIs are not supported in the Edge Runtime. Found `fs` imported.
```
