import Feed from '@Components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
     <h1 className="head_text text-center">
      Discover and Share
      <br className="max-md:hidden"  />
      <span className="orange_gradient text-center"> AI Powered Prompts</span>
     </h1> 
     <p className = "desc text-center">
      Promptopia is a open-source modern tool in the AI world to dicover, create and 
      and share creative prompts
      </p>     
      <Feed/> 
      </section>
  )
}

export default Home