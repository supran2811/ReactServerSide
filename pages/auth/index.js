import React from 'react';
import User from '../../components/User/user';
const authPage = (props) => (
    <div>
        
        <h1>The Auth page --- {props.type}</h1>
        <p>
            <User name ="supran" age = {20} />
        </p>

    </div>
);

authPage.getInitialProps = (context) => {
    return {type:'Man'}
}

export default authPage;