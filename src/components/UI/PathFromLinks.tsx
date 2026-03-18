import Link from "next/link"
import Image from "next/image"

import Container from "./Container"
import Search from "./Search"

import arrowLinkSection from '../../../public/arrowLinkSection.png'

type Props = {
    onePath: string,
    twoPath: string,
    threePath: string,
    hideSearch?: boolean,
    hideCross?: boolean,
    hideOneImage?: boolean,
    hideTwoImage?: boolean,
    hrefOne?: string,
    hrefTwo?: string,
    noneSearch?: boolean,
    backTwo?: string,
    backThree?: string
}

export default function PathFromLinks(props: Props) {
    return (
        <Container paddingNoneY>
            <div className='flex items-center justify-between h-[50px]'>
                <div className='flex items-center gap-x-[20px] text-text text-[24px] font-semibold'>
                    <Link href={`http://localhost:3000/${props.backTwo || ''}`}
                        className={props.twoPath ? 'hover:scale-103 transition-transform duration-300' : ''}
                        style={{
                            ...(props.twoPath ? { cursor: 'pointer' } : { cursor: 'default' })
                        }}>{props.onePath}</Link>
                    <Image style={props.hideOneImage ? { display: 'none' } : {}}
                        src={arrowLinkSection} alt='' width={40} height={40} draggable='false' />
                    <Link href={`http://localhost:3000/${props.backThree || ''}`}
                        style={{
                            ...(props.twoPath ? {} : { display: 'none' }),
                            ...(props.threePath ? { cursor: 'pointer' } : { cursor: 'default' })
                        }}
                        className={props.threePath ? 'hover:scale-103 transition-transform duration-300' : ''}>{props.twoPath}</Link>
                    <Image style={props.hideTwoImage ? { display: 'none' } : {}}
                        src={arrowLinkSection} alt='' width={40} height={40} draggable='false' />
                    <Link style={{
                        ...(props.threePath ? {} : { display: 'none' }),
                        ...{ cursor: 'default' }
                    }} href=''>{props.threePath}</Link>
                </div>
                <div style={{
                    ...(props.noneSearch ? { display: 'none' } : {})
                }}>
                    <Search hideCross={props.hideCross} hideSearch={props.hideSearch} />
                </div>
            </div>
        </Container>
    )
}
