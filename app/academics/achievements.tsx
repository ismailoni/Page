import Image from 'next/image'
import image from '@/public/achievements.svg'

export const Achievements = () => {
    return (
        <div className='bg-white'>
            <div className='m-16 gap-11'>
                <div className='mb-10'>
                    <h1 className='font-semibold text-3xl mb-6'>Achievements of the Academic Board over the years</h1>
                    <p className='mb-3 text-gray-600'>Human makes a society. There is no us without you and that’s what makes your need our utmost concern. We have curated resources to aid your academic surgeon on campus. Check the files via the link below We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.We have curated resources to aid your academic surgeon on campus. Check the files via the link below We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.</p>
                    <p className='text-gray-600'>We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.We have curated resources to aid your academic surgeon on campus. Check the files via the link below We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.</p>
                </div>
                <div>
                    <Image src={image} alt="Achievements" width={2000} height={2000} />
                </div>
            </div>
        </div>
    )
}