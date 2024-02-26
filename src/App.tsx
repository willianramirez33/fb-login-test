import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FacebookLogin from '@greatsumini/react-facebook-login';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ margin: '20px'}}>
      <FacebookLogin
        appId="1353254835540637"
        scope='email public_profile'
        initParams={{ version: 'v16.0' }}
        onSuccess={(response) => {
          console.log('Login Success!', response);
        }}
        onFail={(error) => {
          console.log('Login Failed!', error);
        }}
        onProfileSuccess={(response) => {
          console.log('Get Profile Success!', response);
        }}
      />
      </div>
    </>
  )
}

export default App
