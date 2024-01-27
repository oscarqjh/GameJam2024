import { Button } from "grommet"
const NButton = ({onClick, label}) =>{
    return <Button focusIndicator={false} style={{color:'#F4D06F',borderColor:'#F4D06F',margin:'5px',minWidth:'200px'}} onClick={onClick} label={label}/>
} 

export default NButton