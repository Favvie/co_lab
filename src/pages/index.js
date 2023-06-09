import Head from 'next/head'
import Image from 'next/image'
import { Inter, Rubik } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Logo from '@/assets/images/FAYVE1.png'
import WomanCoder from '../../public/hero_illustration.jpg'
import Woman from '../../public/about.jpg'
import P1 from '../../public/p1.jpg'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useRef } from 'react'
import { IoIosGitBranch } from 'react-icons/io'
import { BsArrowRight, BsCalendarEvent } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  const [repos, setRepos] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [classState, setClassState] = useState('no-shadow');

  const reposRef = useRef(null)
  const projectsRef = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setClassState('shadow-md');
      } else {
        setClassState('no-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    async function repoFunc() {
      try {
        
        const response = await fetch('https://api.github.com/users/favvie/repos?sort=created&per_page=5', {
         
        })
        const repoDetails = await response.json()
        setRepos(repoDetails)      
      }
      catch {
        console.log(error)
      }
    }

    repoFunc()
    }, [])
  return (
    <>
      <Head>
        <title>Favour Abangwu</title>
        <meta name="description" content="Simple Bio Page for Co.Lab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={rubik.className}><kbd>

      </kbd>
        <div className='bg-[url("/home1.png")] bg-cover bg-center h-screen w-full'>
          <header className={`${classState}  w-screen  py-6 fixed top-0 bg-white z-50`}>
          <div className='flex items-center justify-between max-w-[1200px] mx-auto w-[90%]'>
          <div className='w-[10%]'>
            <span className='font-medium text-[25px] text-transparent bg-clip-text bg-gradient-to-tr from-[#5A60EA] to-99% to-[#EF4F9C]'>FAYVIE</span>
          </div>

          <nav className='space-x-10 uppercase font-medium hidden md:block'>
            <Link href='/'>Home</Link>
            <Link href='#repos'>Projects</Link>
            <Link href='#projects'>Works</Link>
          </nav>
            {
              !isOpen ?
                (<RxHamburgerMenu className='text-3xl text-[#ef4f9c] md:hidden' onClick={() => { setIsOpen(!isOpen) }} />)
                :
                (<AiOutlineClose className='text-3xl text-[#ef4f9c] md:hidden' onClick={() => { setIsOpen(!isOpen) }} />)
                
}
            {/* mobile menu */} 
            {
              isOpen &&
            <nav className='absolute top-16 flex flex-col items-center left-0 w-full space-y-6 bg-[#f9f9f9] py-6 text-xl underline md:hidden' onClick={ () => { setIsOpen(!isOpen)}}>
              <Link href='/'>About</Link>
              <Link href='/#repos'>Projects</Link>
              <Link href='/#projects'>Works</Link>
            </nav>
            }
          </div>
        </header>

        <section className=' max-w-[1200px] mx-auto w-[90%] flex flex-col md:flex-row justify-between items-center mt-20'>
          <div className='space-y-8 md:space-y-4 self-center mt-[200px]  '>
          <div className='uppercase font-medium md:font-semibold text-black text-2xl md:text-5xl flex  items-center gap-4 '>Hello <div className='h-[2px] w-0 md:w-[400px] bg-black'></div></div>
          <div className=' my-6 leading-[60px] md:leading-none md:my-0 text-5xl md:text-6xl text-black font-semibold'>I AM FAVOUR ABANGWU</div>
          <p className='text-3xl text-black md:font-semibold font-medium'>A FRONTEND WEB DEVELOPER</p>
          <button href='/' className='rounded-full p-2 px-6 border-2 font-semibold mt-10 hover:bg-[#EF4F9C] hover:text-white hover:transition-all hover:ease-in hover:border-[#EF4F9C]'>Hire Me</button>
          </div>

            <div className='w-[400px] h-[400px] bg-black mt-10 md:block hidden'>
              <Image src={WomanCoder} alt='illustration of a woman sitting infront of a computer' className='-scale-x-100'/>
          </div>
        </section>

        </div>

        <section className='mt-20 md:mt-0 flex flex-col md:flex-row justify-between gap-24 mx-auto max-w-[1200px] w-[90%]'>
 <div className='mt-10 flex-1 md:block hidden'>
              <Image src={Woman} alt='illustration of a woman sitting infront of a computer' className=''/>
          </div>

          <div className='flex-1 self-center space-y-6'>
<h2 className='uppercase font-semibold text-3xl md:text-4xl leading-[50px] '>A little bit <br /> about myself</h2>
          <p>I am a recent chemical engineering graduate with a passion foe web development specifically, frontend engineering. I love to  build visually appealing interfaces and solve problems with code.</p>
           <p>I started this journey into frontend development in 2021. I have a deep understanding of the fundamentals. My passion for technology led me to obtain a diploma in Frontend Engineering.</p>
          <button className='rounded-full p-2 px-6 border-2 font-semibold mt-10 hover:bg-[#EF4F9C] hover:text-white hover:transition-all hover:ease-in hover:border-[#EF4F9C]'>Download CV</button>
          </div>

          
        </section>

         <section className='mx-auto max-w-[1200px] mt-20 w-[90%]' id='repos' ref={reposRef}>
          <h2 className='uppercase font-semibold text-3xl md:text-4xl leading-[50px]'>My Github Repos</h2>

          <p className='md:w-[70%] mt-5'>
            This section includes repositories from my GitHub profile showing my most recent endeavors. I included this section to showcase some of the recent works and to highlight my skills as a developer.
          </p>
          <div className='mt-20'>
            
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-5'>
              {repos.map(repo => {
                  const date = new Date(repo.created_at);
                  const createdDate = date.toLocaleString("en-US", {
                    timeZone: "UTC",
                    
                    month: "short",
                    day: "numeric",
              
                  });
                  const updateDate = new Date(repo.created_at);
                  const updatedDate = updateDate.toLocaleString("en-US", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
              
                  });
              
                return (
                  <a href={repo.html_url} key={repo.id} className='hover:shadow-lg rounded-xl border-2 p-5 hover:border space-y-3'>
                    
                    <div className=''>
                      <h3 className='font-semibold text-xl'>{repo.name}</h3>
                      <span className='flex gap-x-2 items-center text-sm my-2'><BsCalendarEvent /> Created: {createdDate} </span>
                      
                      <div className='flex justify-between mt-10'>

                        <div className='flex items-center gap-2'>
                            <Image src={repo.owner.avatar_url} width={25} height={25} className='rounded-full' />
                            <span className='font-semibold'>{repo.owner.login}</span>
                        </div>
                      <span className='flex gap-x-2 items-center text-xs'>Last Updated: {updatedDate} </span>
                      </div>
                    </div>
                  </a>
                )
              }
              )}
            </div>
          </div>
            
        </section>

        {/* projects section */}
        <section className='max-w-[1200px] mx-auto w-[90%] mt-20' id='projects' ref={projectsRef}>
          <h2 className='uppercase font-semibold text-3xl md:text-4xl leading-[50px] my-20'>PROJECTS</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8'>
            <div className='relative'>
              <Image src={P1} />
              <a href='https://tempown-clone.vercel.app' className='font-semibold uppercase my-6 block '>TempOwn</a>
             {/* <div class=" absolute inset-0 hover:bg-opacity-50 flex items-center justify-center w-full h-full"> */}
             
            {/* </div> */}
            </div>
           
            <div className=''>
              <div className='h-[380px]'>

              <Image src={P1} className='h-full object-fill' />
              </div>
              <a href='https://strive-mts.vercel.app' className='font-semibold uppercase my-6 block'>Project Management</a>
            </div>
           
            <div>
              <div className='h-[290px]'>

              <Image src={P1} className='h-full object-fill' />
              </div>
              <a href='https://google.com' className='font-semibold uppercase my-6 block'>House Rentals</a>
            </div>
           
          </div>

        </section>
      </main>
    </>
  )
}
