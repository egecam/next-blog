import Head from "next/head";
import NextImage from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

function MusicPage() {
  return (
    <>
      <Head>
        <title>Music - Ege Çam</title>
      </Head>
      <div className="site-container mt-10">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">The Piano</h1>
          <p>
            I've been playing the piano since I was a little kid. I was taught
            the piano in a local music society called SANSEV which was founded
            by excellent Turkish state musicians.
          </p>
          <div className="mt-20">
            <NextImage
              src="/img/piano.jpg"
              alt="Me playing piano in a concert at the age of approx. 14. (2017)"
              width={1200}
              height={800}
              layout="responsive"
            />
          </div>
          <span>Me playing piano in a concert at the age of approx. 14, 2017.</span>
          <p>
            For several years, I studied Hanon, Czerny, and others for building
            a technique. I've worked on classical pieces by J.S. Bach, Ludvig
            van Beethoven, W.A. Mozart, A. Vivaldi, M. Clementi, R. Schumann,
            Frederic Chopin.
          </p>
          <p>
            Attended the piano certification programs such as ABRSM (Royal
            Schools of Music, London, UK) and SAGEP (Mimar Sinan Fine Arts
            University, İstanbul, Turkey) around the globe and played in many
            concerts with very talented people.
          </p>
          <p>
            Check out my
            <Link href="https://www.linkedin.com/in/egecam">
              <a
                className="link hover:text-amber-500 hover:underline"
                target={"_blank"}
              >
                LinkedIn <BsArrowUpRight className="inline-flex" />
              </a>
            </Link>
            page to see my certificates.
          </p>
          
          <h2 className="text-lg font-bold">What am I doing these days?</h2>
          <p>
            After years of years in classical music, I just started to learn
            jazz piano at the beginning of 2022. I study the jazz theory and the
            standards on piano.
          </p>
          <div className="mt-20">
            <NextImage
              src="/img/jam.jpeg"
              alt='A photo of me playing "My Favourite Things" by Coltrane with friends in a jam session. (2022)'
              width={956}
              height={1273}
              layout="responsive"
            />
          </div>
          <span>
            A photo of me playing "My Favourite Things" by Coltrane with friends
            in a jam session, 2022.
          </span>
          <p>
            I make my own music for 3 years. I'm influenced by composers like
            Erik Satie, Claude Debussy, Philip Glass, Ludovico Einaudi and Fazıl Say. So, I
            have created a minimalist and abstract vision of music by years.
          </p>
          <p>
            Check out my
            <Link href="https://www.soundcloud.com/egecam">
              <a
                className="link hover:text-amber-500 hover:underline"
                target={"_blank"}
              >
                SoundCloud <BsArrowUpRight className="inline-flex" />
              </a>
            </Link>
            to listen my music. If you have an idea and would like to have
            conversation about that, feel free to contact me.
          </p>
          <h2 className="text-lg font-bold">Oh, Harmonica!</h2>
          <p>
            Also I'm learning to play the diatonic harmonica which is a very
            cool instrument I think. I am a total beginner in harmonica and
            currently learning
            <Link href="https://youtu.be/DNZUKm0ApEM">
              <a
                className="link hover:text-amber-500 hover:underline"
                target={"_blank"}
              >
                this <BsArrowUpRight className="inline-flex" />
              </a>
            </Link>
            piece from Toy Story of Pixar.
          </p>
        </div>
      </div>
    </>
  );
}

export default MusicPage;
