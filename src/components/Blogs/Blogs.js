import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='w-75 m-auto my-4 '>
            <h2>Explore Our Recent Blogs</h2>
            <div className='blog shadow p-3 my-3'>
                <h3>Difference between Authentication and Authorization -</h3>
                <p>
                    Authentication and Authorization are both used to maintain the safety of the resources of an automated system. Despite the similar-sounding terms, authentication and authorization are very different process with respect to each other. Authentication validates if the users are whom they claim to be. On the other hand, Authorization gives permission to access the resourses of the system. Authentication identifies the user, but authorization identifies the permission of accessibility of that user. Authentication is done before authorization. Authorization works through passwords and credentials, but authentication works through settings maintained by security teams.
                </p>
            </div>
            <div className='blog shadow p-3 my-3'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    I using Firebase to host my website and to authenticate my website.

                    Firebase is a traditional Social Authentication method. It's is widely popular now-a-days. Though there exist some other methods of authentication. Such as -
                    <h6>Token Authentication</h6>
                    In this method, a digitally encoded signature is used to authenticate and authorize the correct user.
                    <h6>Standard Authentication : </h6>
                    This method helps users authenticate by entering their credentials using a user id and a strong password.
                    <h6>Multi-Factor Authentication (MFA) : </h6>
                    It is a multi-layered authentication method which examines the identity of users for login or other access permission.
                    <h6> Passwordless Authentication :</h6>
                    In this method, a magic link, fingerprint, PIN, or a secret token delivered via email or text message is used to authenticate and authorize the correct user.
                </p>
            </div>
            <div className='blog shadow p-3 my-3'>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>
                    There are many services which Firebase provides, Most useful of them is Authentication. But there are also some useful services that help you to develop high-quality mobile and web applications. Such as -
                    <h6>Cloud Messaging</h6>
                    Firebase can implement notifications, and it is fast, reliable, and scalable.
                    <h6>Dynamic Links : </h6>
                    Firebase can generate deep links which redirect user to your applications.
                    <h6>Predictions : </h6>
                    Firebase can help in making predictions about your application decisions with the help of google's AI.
                    <h6> Google Analytics :</h6>
                    Firebase can help in growing and managing your application. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.
                </p>
            </div>
        </div>
    );
};

export default Blogs;