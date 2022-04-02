## Intro

This is an example demonstrating the error described in [Dune and js_of_ocaml setup](https://discuss.ocaml.org/t/dune-and-js-of-ocaml-setup/2359) from the discuss.ocaml.org, with failing to resolve `child_process` and `fs`.

The OCaml setup `ocaml/` is very simple. The JS uses [Next.js](https://nextjs.org/). See `js/pages/index.js` for the entry point (this is the only relevant file on the JS side).

## Instructions

```
cd js
npm install
npm run dev
```

On my computer (OCaml 4.13.1, js_of_ocaml 4.0.0) this produces:

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
