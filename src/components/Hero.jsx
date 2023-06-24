import HeroImg from '../assets/images/hero.png'

function Hero() {
  return (
    <section className="bg-teal-500 flex-grow flex">
      <div className="container h-full mx-auto px-10 mt-auto flex items-center">
        <div className="max-w-2xl me-auto">
          <h1 className="text-[4rem] leading-[1] font-bold">Notre etudiante EL ABDOUNI Imane A reussi son toel Niveau C2</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img className='w-96' src={HeroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
