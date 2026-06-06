// import React, { useEffect, useState } from 'react'

// const UserCard = ({username}) => {

//   const [userData, setUserData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [err, setErr] = useState("")


//   useEffect(() => {

//         if(!username) 
//         {
//            return ;
//         }



//     const fetchData = async () => {

//         try
//         {
//               setLoading(true)
//               setErr("")

//               const response = await fetch( `https://api.github.com/users/${username}`)

//               if(!response.ok)
//               {
//                   throw new Error("User Not Found")
//               }

//               const fetchUserInfo = await response.json()

//               setUserData(fetchUserInfo)
//         }
//         catch(error) 
//         {
//             setErr(error.message)
//         }
//         finally
//         {
//             setLoading(false)
//         }

//     }

//     fetchData()

//   },[username])

//     if(loading)
//     {
//         return <div>Loading ...</div>
//     }

//     if(err)
//     {
//         return <div>{err}</div>
//     }

//   if(!userData)
//   {
//     return null
//   }



//   return (
//     <div className='mt-5 border p-4'>
//         <img src={userData.avatar_url} alt={userData.login} width="150"/> 
//         <h2>{userData.name}</h2>
//         <p>@{userData.login}</p>
//         <p>{userData.bio}</p>
//         <p>Followers : {userData.followers}</p>
//         <p>Following : {userData.following}</p>
//         <p>Repositories : {userData.public_repos}</p>
//     </div>
//   )
// }

// export default UserCard