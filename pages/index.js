import React from 'react';
import Link from 'next/link'
import Router from 'next/router';


class IndexPage extends React.Component{

    static getInitialProps(context){
        const promise = new Promise((resolve,reject) => {
            setTimeout(()=>(resolve({appName:"Next App"})) ,4000 )
        });

        return promise;
    }
    render(){
        return (
                <div>
                    <h1>The main page</h1>
                    <p>Go to <Link href="/auth"><a>Index Page - {this.props.appName}</a></Link></p>
                    <button onClick = {() => {Router.push('/auth')}} > Go to Auth </button>
                    
                </div>
        );
    }
}

export default IndexPage;