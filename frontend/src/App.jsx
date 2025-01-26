import './App.css'
import { Navbar } from './components/Navbar'
import { DisplayHeroDiv } from './components/DisplayHeroDiv'

function App() {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <Navbar />
        <div className='flex w-[100%] h-[600px] md:h-[650px] justify-center items-center'>
          <DisplayHeroDiv />
        </div>
        <div className='flex w-full justify-between px-[15px] h-[130px] text-[14px] md:hidden'>
          <div className='flex flex-col items-center justify-center'>
            <img src="../src/assets/easy.png" alt="" className='w-[40px] h-[40px]' />
            <p>Easy And Fast</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src="../src/assets/link.png" alt="" className='w-[40px] h-[40px]' />
            <p>Always shortned links</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
          <img src="../src/assets/encrypt.png" alt="" className='w-[40px] h-[40px]' />
          <p>Secure with https</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
