// import Error from 'next/error'
import { NextPage } from 'next'

 
// export default function Page (props) {
//     console.log("🚀 ~ file: _error.tsx:4 ~ Page ~ props:", props)
//         return <Error />
    
 
//     // return <div>{'message'}</div>
// }

interface Props {
    statusCode?: number;
  }

import Link from 'next/link'

const Error:NextPage<Props> = ({statusCode}:Props)  => {
    console.log('🚀 ~ file: _error.tsx:20 ~ statusCode:', statusCode)
    return (
        <div className='error-container'>
            {/* <img src='https://rickandmortyapi.com/api/character/avatar/234.jpeg' alt='a dead morty...'/> */}
            {statusCode && <h1>Error: {statusCode}</h1>}
            <p>We are sorry! There was an error</p>
            <Link href='/'>
                Go back home
            </Link>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error