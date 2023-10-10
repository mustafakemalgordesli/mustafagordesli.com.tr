'use client';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';
import { useImmer } from 'use-immer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon, CheckIcon } from '@radix-ui/react-icons';

export default function ContactForm() {
    const [isLoading, SetLoading] = useState(false);

    const [isSuccess, SetSuccess] = useState(null);

    const [data, updateData] = useImmer({
        title: '',
        email: '',
        content: '',
    });

    const onSubmit = (event) => {
        event.preventDefault();
        SetLoading(true);
        axios
            .post('/api/contact', data)
            .then((res) => {
                if (res?.data?.success) {
                    SetSuccess(true);
                    SetLoading(false);
                    updateData({
                        title: '',
                        email: '',
                        content: '',
                    });
                    setTimeout(() => {
                        SetSuccess(null);
                    }, 3000);
                } else {
                    SetSuccess(false);
                    SetLoading(false);
                    setTimeout(() => {
                        SetSuccess(null);
                    }, 5000);
                }
            })
            .catch((err) => {
                SetSuccess(false);
                SetLoading(false);
                setTimeout(() => {
                    SetSuccess(null);
                }, 5000);
            });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={data.title}
                    onChange={(e) => {
                        updateData((draft) => {
                            draft.title = e.target.value;
                        });
                    }}
                    required
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={data.email}
                    onChange={(e) => {
                        updateData((draft) => {
                            draft.email = e.target.value;
                        });
                    }}
                    required
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
            </div>
            <div className="mb-4">
                <textarea
                    rows="6"
                    placeholder="Your Message"
                    value={data.content}
                    onChange={(e) => {
                        updateData((draft) => {
                            draft.content = e.target.value;
                        });
                    }}
                    className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
            </div>
            <div>
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary border-primary w-full rounded border p-3 py-6 text-white transition hover:bg-opacity-90"
                >
                    {isLoading && (
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Message
                </Button>
            </div>
            {isSuccess !== null && (
                <Alert
                    className={`mt-2 rounded p-2 flex items-center ${
                        isSuccess === true
                            ? 'border-green-600 text-green-600'
                            : ''
                    } ${
                        isSuccess === false ? 'border-red-600 text-red-600' : ''
                    }`}
                >
                    <div>
                        {isSuccess ? (
                            <CheckIcon className="h-5 w-5" />
                        ) : (
                            <ExclamationTriangleIcon className="h-5 w-5" />
                        )}
                    </div>
                    {/* <AlertTitle>Error</AlertTitle> */}
                    <AlertDescription>
                        {isSuccess
                            ? 'Your message has been delivered'
                            : 'Your message could not be delivered'}
                    </AlertDescription>
                </Alert>
            )}
        </form>
    );
}
