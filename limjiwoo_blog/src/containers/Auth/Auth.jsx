import React from 'react';

import './auth.css';

const Auth = () => {    
  return (
      <main className="blog__auth">
        <form className="blog__auth-form" action="submit">
            <h1 className="blog__auth-title">Log In</h1>
            <p>※ 블로그 관리자의 로그인만 허용합니다.</p>
            <input type="email" className="blog__auth-input"/>
            <input type="password" className="blog__auth-input"/>
            <button className="blog__auth-button">Log In</button>
        </form>
    </main>
  )
}

export default Auth