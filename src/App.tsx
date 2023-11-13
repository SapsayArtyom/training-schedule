import './styles/index.scss'
import './index.css'

import { classNames } from './helpers/classNames'
import AppRouter from './components/AppRouter'
import Navbar from './components/navbar/Navbar'

function App () {
    
    return (
        <div className={classNames('app', {}, ['flex', 'justify-center' ,'items-center', 'flex-col'])}>
            {/* <Navbar /> */}
            <div className='layout'>
                <AppRouter />
            </div>
        </div>
    )
}

export default App;
