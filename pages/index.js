import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb  Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm: px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore nearby
            </h2>
          <div className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8"
          >Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll 
          scrollbar-hide p-3 -ml-3">
            {cardsData?.map(item =>
              (
                <MediumCard
                  key={item.img}
                  img={item.img}
                  title={item.title}
                />
              )
            )}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />

    </div>
  )
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then(
      (response) => response.json()
    );

  const cardsData = await fetch("https://links.papareact.com/zp1")
    .then(
      (response) => response.json()
    )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}