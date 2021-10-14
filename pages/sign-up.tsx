import Link from 'next/link'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import { Layout } from "../components/Layout";
import { WhatsAppIcon } from '../components/WhatsappIcon';

export default function SignUp() {
    return (
        <Layout mainClassName="flex-grow">
            <Example />
        </Layout>
    )
}

export function Example() {
    return (
        <div className="">
            <main className="">
                {/* Header */}
                <div className="bg-gray-50">
                    <div className="py-24 lg:py-32">
                        <div className="max-w-3xl text-right flex flex-col justify-end relative z-10 mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                                تواصل معنا الآن
                            </h1>
                            <p className="mt-6 text-xl text-warm-gray-500">
                                تواصل معنا لنشر مشروعك هنا لتسهيل التعامل مع زبائنك
                            </p>
                            <dl className="mt-8 space-y-6">
                                <dt>
                                    <span className="sr-only">Phone number</span>
                                </dt>
                                <dd>
                                    <Link href="https://wa.me/96590005243">
                                        <a className="flex justify-end text-base text-green-700">
                                            <span className="mr-3">+965 9000 5243</span>
                                            <WhatsAppIcon className="flex-shrink-0 w-6 h-6 text-green-700" aria-hidden="true" />
                                        </a>
                                    </Link>
                                </dd>
                                <dt>
                                    <span className="sr-only">Email</span>
                                </dt>
                                <dd>
                                    <Link href="mailto:support@mshroo3i.com">
                                        <a className="flex justify-end text-base text-green-700">
                                            <span className="mr-3">support@mshroo3i.com</span>
                                            <MailIcon className="flex-shrink-0 w-6 h-6 text-green-700" aria-hidden="true" />
                                        </a>
                                    </Link>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}
