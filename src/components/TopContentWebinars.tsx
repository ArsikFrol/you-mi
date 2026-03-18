
import Container from './UI/Container'
import Search from './UI/Search'
import useWebinars from '@/store/webinars/webinarsStore'

type Props = {}

export default function TopContentWebinars(props: Props) {
    const {
        activeBtn, setActiveBtn
    } = useWebinars()

    return (
        <Container>
            <>
                <div className='flex justify-between'>
                    <div className='flex gap-x-[20px] items-center'>
                        <div onClick={() => setActiveBtn('upcomingOnes')}
                            className='text-text text-[24px] font-medium px-[20px] leading-[50px] rounded-2xl
                                hover:scale-105 transition-transform duration-300 cursor-pointer'
                            style={{
                                ...(activeBtn === 'upcomingOnes' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                            }}>
                            Предстоящие
                        </div>
                        <div onClick={() => setActiveBtn('archive')}
                            className='text-text text-[24px] font-medium px-[20px] leading-[50px] rounded-2xl
                                hover:scale-105 transition-transform duration-300 cursor-pointer'
                            style={{
                                ...(activeBtn === 'archive' ? { background: 'rgba(120, 114, 185, 1)', color: 'white' } : {})
                            }}>
                            Архив
                        </div>
                    </div>
                    <Search />
                </div>
            </>
        </Container>
    )
}
