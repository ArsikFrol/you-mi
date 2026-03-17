'use client'

import Image from "next/image"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import type { FormEventHandler } from "react"
import { Suspense } from "react"

import Container from "./UI/Container"
import Input from "./UI/Input"

import useProfile from "@/store/profile/profileStore"

import entrance from '../../public/entrance.png'
import google from '../../public/entrance/google.png'
import github from '../../public/entrance/github.png'
import bg from '../../public/bgBtn.png'
import toast from "react-hot-toast"

function EntranceContent() {
    const {
        email, setEmail,
        password, setPassword,
    } = useProfile()

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'

    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res && !res.error) {
            router.push('/profile')
            toast.success('Вы вошли в профиль!')
        } else {
            console.log(res)
        }
    }

    return (
        <Container purple minH>
            <div className="flex justify-between items-center w-[1000px] mx-auto">
                <div className="">
                    <div className="text-(--color-btn-and-title) text-[44px] font-extrabold">Вход в YouMi</div>
                    <div className="text-[24px] text-(--text)font-medium w-[380px]">
                        Введите свою почту и пароль или войдите по любому провайдеру
                    </div>
                    <div className='flex gap-x-[10px] w-[380px] my-[20px]'>
                        <Image onClick={() => signIn('google', { callbackUrl })}
                            className="block mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                            src={google} alt='' width={50} height={50} draggable='false' />
                        <Image onClick={() => signIn('github', { callbackUrl })}
                            className="block mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                            src={github} alt='' width={50} height={50} draggable='false' />
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-[20px] mb-[20px]'>
                        <Input maxLength={100} onChange={setEmail} value={email} name='email'
                            placeholder="email" width={380} height={50} oneTypeData="email"/>
                        <Input maxLength={100} onChange={setPassword} value={password} name='password'
                            placeholder="password" width={380} height={50} />
                        <button className='relative group block w-[380px]'>
                            <div className='w-[380px] relative z-10 cursor-pointer rounded-2xl
                                bg-(--color-btn-and-title) text-white text-[20px] font-bold text-center leading-[70px]'>Войти</div>
                            <Image style={{ height: '70px' }} className='absolute top-2.5 left-2.5 transition-transform
                                group-hover:translate-[-5px]' src={bg} alt='' width={380} />
                        </button>
                    </form>
                    <Link href='/signUp' className="block hover:scale-105 transition-transform duration-300 w-[200px] cursor-pointer
                        text-[18px] text-(--color-btn-and-title) font-semibold mt-[20px]">Зарегистрироваться</Link>
                </div>
                <div className='relative'>
                    <Image src={entrance} alt='' width={480} height={376} draggable='false' />
                    <Link href='/formPartTeam/one' className="absolute right-0 -bottom-[70px] block hover:scale-105
                        transition-transform duration-300 w-[220px] cursor-pointer
                        text-[18px] text-(--color-btn-and-title) font-semibold mt-[10px]">Стать частью команды</Link>
                </div>
            </div>
        </Container>
    )
}

export default function Entrance() {
    return (
        <Suspense fallback={<div className="text-center py-20">Загрузка страницы входа...</div>}>
            <EntranceContent />
        </Suspense>
    )
}
