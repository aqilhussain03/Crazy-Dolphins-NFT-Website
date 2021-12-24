import Head from "next/head";

export default function Home() {
  return (
    <div
      id="bodyy"
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Crazy Dolphins NFT</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Crazy Dolphins NFT" key="ogtitle" />
        <meta
          property="og:description"
          content="Amazing , Smartest & Craziest Dolphins in Your Wallet"
          key="ogdesc"
        />
        <meta property="og:type" content="website" key="ogtype" />
        <meta
          property="og:url"
          content="https://crazydolphinsnft.ml/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://crazydolphinsnft.ml/images/Hola.gif"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="https://crazydolphinsnft.ml/"
          key="ogsitename"
        />

        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta
          property="twitter:domain"
          content="crazydolphinsnft.ml"
          key="twdomain"
        />
        <meta
          property="twitter:url"
          content="https://crazydolphinsnft.ml/"
          key="twurl"
        />
        <meta name="twitter:title" content="Crazy Dolphins NFT" key="twtitle" />
        <meta
          name="twitter:description"
          content="Here at Crazy Dolphins NFT, we specialise in the world's Supreme Colorful digital Dolphins. We've put together a team spanning 3 continents, to bring you some of the most ‍AMAZING and SMARTEST"
          key="twdesc"
        />
        <meta
          name="twitter:image"
          content="https://crazydolphinsnft.ml/images/Hola.gif"
          key="twimage"
        />
      </Head>

      <div>
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/" className="">
            <img
              src="images/Hola.gif"
              width="108"
              alt=""
              className="logo-image"
            />
          </a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a
              href="#about"
              className="text-4xl text-white hover:text-black m-6"
            >
              About
            </a>
            <a
              target="_blank"
              href="/mint"
              className="text-4xl text-white hover:text-black m-6"
            >
              MINT!
            </a>
            <a
              href="#traits"
              className="text-4xl text-white hover:text-black m-6"
            >
              Dolphins
            </a>
            <a
              href="#roadmap"
              className="text-4xl text-white hover:text-black m-6"
            >
              Roadmap
            </a>
            <a
              href="#team"
              className="text-4xl text-white hover:text-black m-6"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-4xl text-white hover:text-black m-6"
            >
              Contact
            </a>
            <a
              target="_blank"
              href="https://twitter.com/crazy_dolphins_"
              className="text-4xl  hover:text-white m-6 text-blau"
            >
              TWITTER
            </a>
            <a
              target="_blank"
              href="https://discord.gg/GjKdFtuuWU"
              className="text-4xl  hover:text-white m-6 text-blau"
            >
              DISCORD
            </a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl Poppitandfinchsans text-white ">
                Hye, meet <br />
                <span className="text-blau">
                  Crazy Dolphins | Weird Whales Killer
                </span>
              </h1>
              <p className="text-2xl text-white my-6  montserrat">
                Here at <span className="text-5xl Poppitandfinch ">Crazy</span>{" "}
                <span className="text-blau text-5xl Poppitandfinchsans">
                  Dolphins
                </span>{" "}
                <span className="text-5xl Poppitandfinch">N F T</span>, we
                specialize in the world's{" "}
                <span className="text-span-2 font-bold">Craziest Dolphins</span>{" "}
                .<br />‍<br />
                Crazy Dolphins NFT is a collection of NFTs - unique digital
                collectibles, swimming on the Polygon Blockchain. 10,000
                dolphins have been programmatically generated from an ocean of
                combinations, each with unique characteristics and different
                colors.
                <br />‍
                <span className="text-blau text-5xl Poppitandfinchsans">
                  Own a Smartest{" "}
                </span>
                <span className="text-5xl Poppitandfinch ">and</span>
                <span className="text-blau text-5xl Poppitandfinchsans">
                  {" "}
                  CRAZIEST
                </span>{" "}
                <br />
                Dolphins out there . <br /> And Surf the NFT Revolution !
              </p>
              <p className="text-2xl text-white my-6  montserrat">
                <strong>PUBLIC-LAUNCH DATE:</strong> 30 December 2021. Surprise
                Time <br />‍
                <span className="text-white text-2xl montserrat">
                  <strong>TOTAL SUPPLY: 10,000</strong> Crazy Dolphins.
                  <br />
                  <strong>PUBLIC-SALE-PRICE: 49 POLYGON(MATIC) ONLY </strong>each. <br />{" "}
                </span>
              </p>
              <iframe
                src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-12-30T21:00:00"
                allowtransparency="true"
                frameBorder="0"
                width="425"
                height="25"
              ></iframe>
            </div>
            <img
              className="lg:w-1/2 w-3/4"
              src="images/Hola.gif"
              width="500px"
            />
          </div>
          <div className="flex flex-col items-center">
            <a
              href="/mint"
              className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 "
            >
              GO TO MINTING PAGE!
            </a>
          </div>
        </div>

        <div
          id="traits"
          className="flex flex-wrap justify-around items-center  mx-6 py-6"
        >
          <div className="border-4 border-blue-300 p-4">
            <img
              src="images/Traits4.gif"
              alt=""
              width="400px"
              className="feature-image"
            />
          </div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
            <h2 className="text-blau Poppitandfinchsans text-6xl text-center">
              10,000 Unique <br/>
              DOLPHINS SUPREMACY
            </h2>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              Following the recent worldwide pandemic,{" "}
              <span className="font-bold"> emerging reports </span> suggest that
              several <span className="font-bold"> dolphins species </span> have
              begun exhibiting{" "}
              <span className="font-bold"> strange characteristics. </span> Our
              team located across the globe has commenced efforts to{" "}
              <span className="font-bold"> study and document </span> these
              unusual phenomena.
            </p>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              Concerned about parties trying to suppress our research, the team
              has opted to store our findings on the blockchain to prevent
              interference. Although this is a costly endeavour, our mission has
              never been clearer.
            </p>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              The fate of the world's dolphins depends on it.
            </p>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              Your support in this time of need is greatly appreciated!
            </p>
          </div>
        </div>

        <div id="gallery" className="   mx-6 py-6">
          <h2 className="text-blau Poppitandfinchsans text-7xl text-center">
            SUPREME DOLPHIN GALLERY
          </h2>
          <div className="flex flex-wrap  items-center mx-6   py-6 ">
            <div className="md:w-1/2">
              <div className=" border-blue-300 p-2">
                <img
                  src="images/gallery1.png"
                  alt=""
                  width="600px"
                  className="feature-image"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-wrap">
              <div className=" p-2 w-1/2">
                <img
                  src="images/gallery2.png"
                  alt=""
                  width="400px"
                  className="feature-image"
                />
              </div>
              <div className=" p-2 w-1/2">
                <img
                  src="images/gallery3.png"
                  alt=""
                  width="400px"
                  className="feature-image"
                />
              </div>
              <div className=" p-2 w-1/2">
                <img
                  src="images/gallery4.png"
                  alt=""
                  width="400px"
                  className="feature-image"
                />
              </div>
              <div className=" p-2 w-1/2">
                <img
                  src="images/gallery5.png"
                  alt=""
                  width="400px"
                  className="feature-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="roadmap" className="">
          <img src="/images/Roadmap.png" />
          <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">
            OUR UPCOMING MISSION
          </h2>
          <p className="text-xl text-white text-center my-6  montserrat">
            {" "}
            Simple. To be the largest contributor to charity in the NFT space,
            as measured by %{" "}
            <span className="font-bold"> of primary sales. </span>
          </p>
          <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">
            HOW WE'RE GIVING BACK
          </h2>
          <p className="text-xl text-white my-6  montserrat">
            Ever since the inception of the{" "}
            <span className="text-5xl Poppitandfinch ">crazy</span>{" "}
            <span className="text-blau text-5xl Poppitandfinchsans">
              Dolphins
            </span>{" "}
            <span className="text-5xl Poppitandfinch">NFT</span>
          </p>
          <p className="text-xl text-white my-6  montserrat">
            {" "}
            A minimum of
            <span className="font-bold"> 25% of all sales</span> are donated to
            charity.
          </p>
          <p className="text-xl text-white my-6  montserrat">
            {" "}
            At 100% sellout, we pledge to donate{" "}
            <span className="font-bold"> 10000 POLYGON(MATIC) </span> from
            primary sales.
          </p>
          <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">
            ROADMAP
          </h2>
          <ul className="">
            <li className="text-xl text-black my-6  montserrat">
              <span className="font-bold">
                {" "}
                3333 POLYGON(MATIC) to Community Wallet:{" "}
              </span>{" "}
              Directed towards supporting creators that want to make a positive
              contribution to the NFT space.
            </li>
            <li className="text-xl text-white my-6  montserrat">
              <span className="font-bold">
                {" "}
                3333 POLYGON(MATIC) to Team Seas:{" "}
              </span>{" "}
              Directed towards supporting Mr.Beast that want to make a positive
              contribution to the NFT space.
            </li>
            <li className="text-xl text-black my-6  montserrat">
              <span className="font-bold">
                {" "}
                3334 POLYGON(MATIC) to Boxing Bullies Foundation:{" "}
              </span>{" "}
              Directed towards supporting Jake Paul that want to make a positive
              contribution to the NFT space.
            </li>
            <li className="text-xl text-white my-6  montserrat">
              <span className="font-bold"> Secondary sales: 5% royalty </span>{" "}
              (2.5% donation, 2.5% to the team). Secondary sales are directed
              towards charities voted on by the community monthly.
            </li>
          </ul>
          <p className="text-xl text-black my-6  montserrat">
            {" "}
            In addition, we have been, and continue to make{" "}
            <span className="font-bold underline">
              {" "}
            high quality content for the Crypto & NFT community{" "}
            </span>{" "}
            through our{" "}
            <span className="font-bold underline">
              {" "}
            UPCOMING PROJECT IN PROGRESS{" "}
            </span>{" "}
            series, to help budding creators to along their journey.
            <br /> <br /> Thanks and Huge Shoutout to Boring Bananas Co & Weird
            Whales for Inspiring Us ...
          </p>
        </div>

        <div id="team" className="mx-12 my-16 ">
        <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">
            FEATURES
        </h2>

        <div className="flex justify-around flex-wrap">
        <div className="flex flex-col  my-6" style={{ width: "360px" }}>

        <a target="_blank" href="https://nftcalendar.io/event/crazy-dolphins-nft/">
        <img alt="nftcalendar" src="images/nft_calendar.png"
          width="150" height="70"/>
        </a>
        </div>
        </div>
        
        <div className="flex justify-around flex-wrap">
        <div className="flex flex-col  my-6" style={{ width: "360px" }}>

        <a target="_blank" href="https://upcomingnft.net/event/crazy-dolphins-nft/">
        <img alt="upcomingnft" src="images/upcomingnft.png"
          width="250" height="80"/>
        </a>
        </div>
        </div>

        <div className="flex justify-around flex-wrap">
        <div className="flex flex-col  my-6" style={{ width: "360px" }}>
        <a target="_blank" href="https://www.nextnftdrop.com/projects/crazy-dolphins-nft/">
         <img alt="nextnft" src="images/next_nft.png"
          width="150" height="80"/>
          </a>
          </div>
          </div>
        </div>



        <div id="team" className="mx-12 my-16 ">
          <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">
            CORE TEAM
          </h2>
          <div className="flex justify-around flex-wrap">
            <div className="flex flex-col  my-6" style={{ width: "360px" }}>
              <div className="cards-image-mask">
                <img
                  src="/images/Aqil.jpg"
                  width="360px"
                  alt=""
                  className="cards-image"
                />
              </div>
              <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">
                Aqil
              </h3>
              <a
                target="_blank"
                href="https://twitter.com/aqil_nft"
                className="text-center text-4xl text-center Poppitandfinchsans underline text-white"
              >
                {" "}
                (@aqil_nft)
              </a>
            </div>
            <div className="flex flex-col  my-6" style={{ width: "360px" }}>
              <div className="cards-image-mask">
                <img
                  src="/images/Junaid.jpg"
                  width="360px"
                  alt=""
                  className="cards-image"
                />
              </div>
              <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">
                Junaid
              </h3>
              <a
                target="_blank"
                href="https://twitter.com/Junaid_NFT_888"
                className="text-center text-4xl text-center Poppitandfinchsans underline text-white"
              >
                {" "}
                (@Junaid_NFT_888)
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="flex flex-wrap justify-around items-center  mx-6 py-6"
        >
          <div className=" p-4">
            <img
              src="images/letstalk.png"
              alt=""
              width="400px"
              className="feature-image"
            />
          </div>
          <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
            <h2 className="text-blau Poppitandfinchsans text-6xl text-center">
              CONTACT DOLPHIN TEAM
            </h2>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              We'd love to hear from you!
            </p>
            <p className="text-xl text-white my-6  montserrat">
              {" "}
              Drop us a line at{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="mailto:crazydolphinsnft@gmail.com"
              >
                crazydolphinsnft@gmail.com
              </a>
              ,<br />
              or alternatively reach out to us on Twitter{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="https://twitter.com/Crazy_Dolphins_"
              >
                @Crazy_Dolphins_
              </a>
              <br />
              Or alternatively, join our{" "}
              <a
                className="text-black underline font-bold"
                target="_blank"
                href="https://discord.gg/GjKdFtuuWU"
              >
                Discord Server
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
