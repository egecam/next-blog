import Contact from "../components/contact";

function HomePage() {
  return (
    <>
          <div className="site-container mt-10 float-right">
            <img src="/img/me.jpg" alt=""/>
          </div>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Ege Çam</h1>
          <span className="text-xl text-gray-500">/a-geh ch-ahm/</span>
          <p>I am a software developer based in İstanbul.</p>

          <p>
            I am interested in app development, music, writing and photography.
          </p>

          <Contact />
        </div>
      </div>
    </>
  );
}

export default HomePage;
