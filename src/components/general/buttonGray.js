
export default function ButtonGray({ type, children, onClick=null }){
  return(
    <button class="font-bold text-white rounded-lg p-3 w-40 bg-gray-500 h-fit" type={type? type : "button"}
    onClick={onClick}>
      {children}
    </button>
  );
}
