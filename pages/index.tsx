// import Head from 'next/head'
import Stories from 'react-insta-stories'

export default function Home() {
  const stories = [
    {
      url: 'https://cdn.dribbble.com/userupload/3810776/file/original-2a8742b53c412df673c49a7d6c6332e3.png?compress=1&resize=2048x1536',
    },
    {
      url: 'https://cdn.dribbble.com/userupload/4029329/file/original-0e7f081fa340f5544370583687371c62.png?compress=1&resize=1504x1128' ,
    },

  ]

  return (
    <div className=''>
      <Stories 
        stories={stories}
        defaultInterval={1500}
      />
    </div>
  )
}
