import { useRouter } from 'next/router'
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'
import Header from './Header'

const Layout = ({ children }) => {
  const router = useRouter()

  const onPageEnter = (element) => {
    gsap.fromTo(
      element,
      {
        y: 50,
        autoAlpha: 0,
        ease: 'power3.out',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
      }
    )
  }
  const onPageExit = (element) => {
    gsap.fromTo(
      element,
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power3.out',
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      }
    )
  }
  return (
    <>
      <Header />
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={onPageEnter}
          onExit={onPageExit}
          mountOnEnter={true}
          unmountOnExit={true}>
          <main className='p-4 mx-auto max-w-4xl'>{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  )
}

export default Layout
