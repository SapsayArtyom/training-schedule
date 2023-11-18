import './styles/index.scss'
import './index.css'

import { classNames } from './helpers/classNames'
import AppRouter from './components/AppRouter'
import Navbar from './components/navbar/Navbar'
import { HomePageAsync } from './pages/HomePage/HomePage.async'

function App () {
    
    return (
        <div className={classNames('app', {}, ['flex', 'justify-center' ,'items-center', 'flex-col'])}>
            {/* <Navbar /> */}
            <div className='layout'>
                <HomePageAsync />
                {/* <AppRouter /> */}
            </div>
        </div>
    )
}

export default App;
