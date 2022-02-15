const Button=({type,value,className,onClick,children})=>(

   <>
   <button type={type} value={value} className={className?className:'btn btn-success'} onClick={onClick}>{children}</button>
   </>
)

export default Button;