import './styles/index.scss'
import './index.css'

import { classNames } from './helpers/classNames'
import AppRouter from './components/AppRouter'
import Navbar from './components/navbar/Navbar'
import { HomePageAsync } from './pages/HomePage/HomePage.async'
import { SizePageAsync } from './pages/SizePage/SizePage.async'
import Hamburger from './components/hamburger/Hamburger'
import { useState } from 'react'

function App () {
    const [isOpen, setOpen] = useState<boolean>(false);
    
    return (
        <div className={classNames('app', {}, ['flex', 'justify-center' ,'items-center', 'flex-col'])}>
            {/* <Navbar /> */}
            <div className='w-[100%] flex justify-start p-[13px] absolute z-10 top-0'>
                <Hamburger onClick={() => setOpen(!isOpen)} />
            </div>
            <div className='layout'>
                <HomePageAsync />
                {/* <SizePageAsync /> */}
                {/* <AppRouter /> */}
            </div>
        </div>
    )
}

export default App;
