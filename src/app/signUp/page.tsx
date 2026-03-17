'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Input from '@/components/UI/Input'
import Container from '@/components/UI/Container'
import useProfile from '@/store/profile/profileStore'

export default function SignUpPage() {
    const router = useRouter()
    const [error, setError] = React.useState<string>('')
    const [loading, setLoading] = React.useState<boolean>(false)

    const [nameUse, setNameUse] = React.useState<string>('')
    const [emailUse, setEmailUse] = React.useState<string>('')
    const [passwordUse, setPasswordUse] = React.useState<string>('')

    const {
        setEmail,
        FIO, setFIO,
    } = useProfile()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const result = await signIn('credentials', {
                email: emailUse,
                password: passwordUse,
                name: nameUse,
                signup: 'true',
                redirect: false,
            })

            if (result?.error) {
                setError(result.error)
            } else {
                router.push('/profile')
                router.refresh()
            }
        } catch (err: any) {
            setError(err.message || 'Ошибка регистрации')
        } finally {
            setLoading(false)
            setFIO(nameUse.split(' ')[0])
            setEmail(emailUse)
        }
    }

    return (
        <Container minH>
            <div className="w-[500px] mx-auto mt-10">
                <h1 className="text-(--color-btn-and-title) text-[44px] font-extrabold text-center mb-[50px]">Регистрация</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-(--text) text-[16px] font-medium block mb-[20px]">Имя</label>
                        <Input maxLength={100} onChange={setNameUse} placeholder='Иван'
                            value={nameUse} width={500} height={50} />
                    </div>

                    <div>
                        <label className="text-(--text) text-[16px] font-medium block mb-[20px]">Email</label>
                        <Input maxLength={100} onChange={setEmailUse} placeholder='email'
                            value={emailUse} width={500} height={50} />
                    </div>

                    <div>
                        <label className="text-(--text) text-[16px] font-medium block mb-[20px]">Пароль</label>
                        <Input maxLength={100} onChange={setPasswordUse} placeholder='password'
                            value={passwordUse} width={500} height={50} />
                    </div>

                    <button type="submit" disabled={loading}
                        className="w-full bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700 disabled:opacity-50
                            hover:scale-105 transition-transform duration-300 cursor-pointer text-[20px] mt-[20px]">
                        {loading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Уже есть аккаунт?{' '}
                        <a href="/signIn" className="text-blue-600 hover:underline">
                            Войти
                        </a>
                    </p>
                </div>
            </div>
        </Container>
    )
}
