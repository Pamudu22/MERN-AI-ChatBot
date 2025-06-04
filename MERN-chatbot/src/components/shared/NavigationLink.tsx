import { Link } from "react-router-dom";


type Props = {

    to: string;
    bg: string;
    text: string;
    textcolor: string;
    onClick?: () => Promise<void>;

}
const NavigationLink = (props:Props) => {
  return (
    <Link
    className="navlink"
    to={props.to} 
     style={{ background:props.bg,color:props.textcolor}}>
    {props.text}
        </Link>
  )
}

export default NavigationLink