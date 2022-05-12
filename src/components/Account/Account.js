import React from 'react';

const Account = () => {
    return (
        <main className='container'>
            <h1 className='my-5'>This is user dashboard page banner</h1>
            <section>
                <div className="row">
                    <div className="col-md-2">
                        <h2>Left bar</h2>
                    </div>
                    <div className="col-md-10">
                        <h2>user body</h2>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Account;