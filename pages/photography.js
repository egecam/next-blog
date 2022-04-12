import Head from "next/head";

function PhotoPage() {
  return (
    <>
      <Head>
        <title>Photography - Ege Çam</title>
      </Head>
      <div className="site-container">
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="/photography/betrayal.jpg"
            alt=""
            className="wide-img"
            title="Betrayal, "
          />
          <img
            src="/photography/the sky is crying.jpg"
            alt=""
            className="tight-img"
            title="The sky is crying, September 2019"
          />
          <img
            src="/photography/betrayal.jpg"
            alt=""
            className="tight-img"
            title=""
          />
        </div>
      </div>
    </>
  );
}

export default PhotoPage;
