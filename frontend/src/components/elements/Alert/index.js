
import {Alert as AlertComponent} from 'react-bootstrap';

const Alert = ({variant="info", children}) => {
    return (
        <AlertComponent variant={variant} style={{fontSize: 20}}>
            <strong>{children}</strong>
        </AlertComponent>
    )
}

export default Alert;