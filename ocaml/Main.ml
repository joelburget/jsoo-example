open Base
let map = Hashtbl.create (module Int)
let () = Hashtbl.add_exn map ~key:0 ~data:0
