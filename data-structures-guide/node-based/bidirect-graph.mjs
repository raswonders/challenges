import { Vertex, bfs } from "./graph.mjs";

const a = new Vertex("a");
const b = new Vertex("b");
const c = new Vertex("c");
const d = new Vertex("d");
const e = new Vertex("e");
const f = new Vertex("f");
const g = new Vertex("g");
const h = new Vertex("h");
const i = new Vertex("i");
const j = new Vertex("j");
const k = new Vertex("k");
const l = new Vertex("l");
const m = new Vertex("m");
const n = new Vertex("n");
const o = new Vertex("b");
const p = new Vertex("p");

a.addAdjacentVertex(b);
a.addAdjacentVertex(c);
a.addAdjacentVertex(d);
b.addAdjacentVertex(f);
b.addAdjacentVertex(e);
c.addAdjacentVertex(g);
d.addAdjacentVertex(h);
d.addAdjacentVertex(i);
e.addAdjacentVertex(b);
e.addAdjacentVertex(j);
f.addAdjacentVertex(j);
f.addAdjacentVertex(b);
g.addAdjacentVertex(c);
g.addAdjacentVertex(k);
h.addAdjacentVertex(l);
h.addAdjacentVertex(m);
h.addAdjacentVertex(d);
i.addAdjacentVertex(m);
i.addAdjacentVertex(d);
i.addAdjacentVertex(n);
j.addAdjacentVertex(o);
j.addAdjacentVertex(e);
j.addAdjacentVertex(f);
k.addAdjacentVertex(g);
l.addAdjacentVertex(h);
m.addAdjacentVertex(h);
m.addAdjacentVertex(i);
n.addAdjacentVertex(p);
n.addAdjacentVertex(i);
o.addAdjacentVertex(j);
p.addAdjacentVertex(n);

console.log(bfs(a, "m"));
