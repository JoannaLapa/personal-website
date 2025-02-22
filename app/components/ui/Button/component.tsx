import {ButtonProps} from './component.types';

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button>{props.title}</button>
    )
}

export default Button;