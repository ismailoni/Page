import Image from 'next/image'
import tutorialImage from '@/public/about masjid.svg'
import { TutorialText } from './tutorialtext'


export const Tutorial = () => {
    return (
        <div style={{ backgroundColor: '#F4FCFB' }} className='flex gap-5'>
            <div className='flex-1 m-8'>
                <Image src={tutorialImage} alt="Tutorial" width={800} height={800} />
            </div>
            <div className='flex-1 m-8'>
                <TutorialText />
            </div>
        </div>
    )
}