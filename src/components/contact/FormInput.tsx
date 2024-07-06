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
                <div className='block w-full md:flex md:flex-row md:gap-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='flex w-full flex-col p-1.5'>
                                <FormLabel className='text-smxm font-medium'>
                                    {t('contact_form_name')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='text-base'
                                        placeholder={t('contact_form_yourname')}
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
                            <FormItem className='flex w-full flex-col p-1.5'>
                                <FormLabel className='text-smxm font-medium'>
                                    {t('contact_form_lastname')}
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='text-base'
                                        placeholder={t(
                                            'contact_form_yourlastname'
                                        )}
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
                        <FormItem className='flex flex-col p-1.5'>
                            <FormLabel className='text-smxm font-medium'>
                                {t('contact_form_email')}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className='text-base'
                                    placeholder={t('contact_form_youremail')}
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
                        <FormItem className='flex flex-col p-1.5'>
                            <FormLabel className='text-smxm font-medium'>
                                {t('contact_form_message')}
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t('contact_form_yourmessage')}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex w-full flex-row justify-end'>
                    <Button
                        size={'md'}
                        className=' w-full md:w-auto'
                        variant={'primaryShadow'}
                        type='submit'
                    >
                        <ArrowRight />
                        {t('bt_contact_send')}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
