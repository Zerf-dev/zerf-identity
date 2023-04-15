

export default function Frame({ children, spy = false  }){
return (
  <div class={"p-3 rounded-xl outline-2 outline outline-white/20 bg-gradient-to-t from-black to-violet-900/20 w-fit h-fit " +
  (spy? " py-2 " : " py-3 ")}>
    { children }
  </div>
);
}
