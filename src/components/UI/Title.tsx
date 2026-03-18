type Props = {
    text: string,
    marginNone?: boolean
}

export default function Title(props: Props) {
    return (
        <div className='text-[40px] font-extrabold text-center text-btn-and-title mb-15 mx-auto

            max-md:text-[35px]

            4xl:w-[1500px]
            3xl:w-[1300px]
            2xl:w-[1200px]
            xl:w-[1140px]
            lg:w-[960px]
            md:w-[690px]'
            style={{
                ...(props.marginNone ? { marginBottom: '0' } : {})
            }}>
            {props.text}
        </div>
    )
}
