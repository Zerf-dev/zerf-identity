

export default function ButtonZerf({ type, children, onClick=null }){
  return(
    <button class="font-bold text-white rounded-lg p-3 w-40 bg-gradient-to-r from-purple-600 to-violet-700 h-fit" type={type? type : "button"}
    onClick={onClick}>
      {children}
    </button>
  );
}
