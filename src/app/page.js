import Image from 'next/image'
import Result from '@/components/Result';
import Sum from '@/components/Sum';

export default function Home() {
  return (      
    <main className='lg:flex'>
     <Result />
     <Sum />
    </main>    
  )
}
