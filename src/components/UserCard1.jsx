import React, { useEffect, useState } from 'react'

const UserCard1 = ({ userName }) => {

  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [repo, setRepo] = useState([])

  useEffect(() => {

    if (!userName) {
      return
    }

    const fetchUserData = async () => {

      try {

        setLoading(true)
        setError("")

        const response = await fetch(
          `https://api.github.com/users/${userName}`
        )

        if (!response.ok) {
          throw new Error("User Name Not Found")
        }

        const data = await response.json()

        setUserData(data)

        const repoResponse = await fetch(
          `https://api.github.com/users/${userName}/repos`
        )

        const repoData = await repoResponse.json()

        setRepo(repoData)

      }
      catch (err) {
        setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchUserData()

  }, [userName])

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading...
      </h1>
    )
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-2xl mt-10">
        {error}
      </h1>
    )
  }

  if (!userData) {
    return null
  }

  const datObj = new Date(userData.created_at)

  const normalDate = datObj.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (

    <div className="mt-10">

      {/* User Info Card */}
      <div className="bg-white text-black rounded-2xl shadow-lg p-6">

        <div className="flex flex-col md:flex-row items-center gap-6">

          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-40 h-40 rounded-full border-4 border-blue-500"
          />

          <div className="text-center md:text-left space-y-2">

            <h2 className="text-3xl font-bold">
              {userData.name}
            </h2>

            <p className="text-gray-600">
              @{userData.login}
            </p>

            <p>
              {userData.bio || "No bio available"}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-bold">
                  Followers
                </p>
                <p>{userData.followers}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-bold">
                  Following
                </p>
                <p>{userData.following}</p>
              </div>

              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="font-bold">
                  Repositories
                </p>
                <p>{userData.public_repos}</p>
              </div>

            </div>

            <p>
              📍 {userData.location || "Not Available"}
            </p>

            <p>
              🏢 {userData.company || "Not Available"}
            </p>

            <p>
              📅 Joined: {normalDate}
            </p>

            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View Profile
            </a>

          </div>
        </div>
      </div>

      {/* Repositories */}
      <div className="mt-10">

        <h1 className="text-3xl font-bold mb-6">
          Repositories
        </h1>

        {
          repo.length === 0
            ?
            <div>No Repositories Available</div>
            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {
                repo.map((item, index) => {

                  return (

                    <div
                      key={index}
                      className="bg-white text-black p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                    >

                      <h1 className="text-xl font-bold mb-3">
                        {item.name}
                      </h1>

                      <p className="mb-2">
                        ⭐ Stars: {item.stargazers_count}
                      </p>

                      <p className="mb-2">
                        🍴 Forks: {item.forks_count}
                      </p>

                      <p className="mb-4">
                        💻 Language: {item.language || "Not specified"}
                      </p>

                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        View Repository
                      </a>

                    </div>
                  )
                })
              }

            </div>
        }
      </div>

    </div>
  )
}

export default UserCard1