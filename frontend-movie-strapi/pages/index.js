import Card from "../components/Card"

export default function Home({ movies }) {
  // console.log(movies)
  return (
    <div className="px-4 py-8 md:py-32 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      <aside className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">My First Strapi App</h2>
        <p className=" text-gray-400 font-light text-sm ">In this project I created a database with strapi. I tried next.js Static generation and Server-side Rendering.</p>
      </aside>
      <div className="grid  md:grid-cols-3 gap-4  ">
        {movies.map((movie, index) => {
          return (
            <Card key={movie.id} movie={movie} />
          )
        })}
      </div>


    </div>
  )
}

export async function getServerSideProps() {
  // const API_URL = process.env.API_URL
  // const res = await fetch(`${API_URL}/movies/`)
  const res = await fetch(`http://localhost:1337/api/movies?populate=*`)
  const data = await res.json()

  return {
    props: {
      movies: data.data
    }
  }

}
