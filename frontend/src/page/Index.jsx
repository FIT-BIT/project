import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.jpg'
import Features from '../components/Features'
import About from '../components/About'
import Wrapper from '../components/Wrapper'
const Index = () => {
  return (
    <Wrapper>
      <div class="container px-6 py-16 mx-auto mt-14 sm:mt-40">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold text-gray-800  lg:text-4xl">Best place to choose <br /> your <span class="text-blue-500 ">clothes</span></h1>
              <p class="mt-3 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
              <Link to={'/auth/signup'}>
                <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
              </Link>
            </div>
          </div>
          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full lg:max-w-3xl" src={heroImage} alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>
      <Features />
      <About />
    </Wrapper>
  )
}
export default Index