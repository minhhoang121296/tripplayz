'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Textarea } from '../ui/textarea'

const FormSchema = z.object({
    name: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    }),
    lastname: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    }),
    Email: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    }),
    message: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    })
})

export function InputForm() {
    const t = useTranslations('')

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            lastname: '',
            Email: '',
            message: ''
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        // toast({
        //   title: "You submitted the following values:",
        //   description: (
        //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //     </pre>
        //   ),
        // })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-6'>
                <div className='block w-full md:flex md:flex-row md:gap-2'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>{t('name')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('your_name')}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='lastname'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel>{t('lastname')}</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={t('your_lastname')}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name='Email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('Email')}</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('email_example')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('message')}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t('type_your_message')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    size={'lg'}
                    className='w-full gap-2'
                    variant={'primary'}
                    type='submit'
                >
                    <ArrowRight />
                    {t('send')}
                </Button>
            </form>
        </Form>
    )
}
