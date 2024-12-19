import { ICat } from '@/interface/cat.interface'
import { getCats } from '@/services/getCats'
import Image from 'next/image'
import React from 'react'

interface catPageProps {
    params:{
        id:string
    }
}

export async function generateStaticParams(){
    const cats:ICat[] =  await getCats()

    return cats.map((cat) => ({
        slug:cat.id.toString()
    }))
}

const fetchCat = async (id:string) => {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
    return res.json()
}

export default async function catPage({params:{id}}:catPageProps) {
    const cat:ICat = await fetchCat(id)
  return (
    <div>
        <Image 
            src={cat.url} 
            alt={cat.url} 
            fill={true} 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
        />
    </div>
  )
}
