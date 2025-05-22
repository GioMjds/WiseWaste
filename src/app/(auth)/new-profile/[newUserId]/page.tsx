'use client';

import { updateProfile } from '@/services/Auth';
import { useMutation } from '@tanstack/react-query';
import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    firstName: string;
    lastName: string;
    phone_number: string;
    address: string;
    profileImage?: FileList;
};

export default function CompleteProfilePage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (data: FormData) => {
            let profileImageUrl: string | undefined = undefined;
            if (data.profileImage && data.profileImage[0]) {
                const file = data.profileImage[0];
                const reader = new FileReader();
                const fileReadPromise = new Promise<string>((resolve, reject) => {
                    reader.onloadend = () => {
                        if (typeof reader.result === 'string') {
                            resolve(reader.result);
                        } else {
                            reject('Failed to read file as base64');
                        }
                    };
                    reader.onerror = reject;
                });
                reader.readAsDataURL(file);
                profileImageUrl = await fileReadPromise;
            }
            return await updateProfile({
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone_number,
                address: data.address,
                profileImage: profileImageUrl,
            });
        },
        onSuccess: (data) => {
            if (data?.user?.profile_image) {
                setPreviewImage(data.user.profile_image);
            }
            router.push('/resident');
        }
    });

    const onSubmit = (data: FormData) => {
        animate([
            ['.form-element', { y: -5, opacity: 0.8 }, { duration: 0.1 }],
            ['.form-element', { y: 0, opacity: 1 }, { at: '-0.1' }]
        ]);
        mutation.mutate(data);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-b from-base-green-light/20 to-bg-primary"
        >
            <div className="max-w-2xl mx-auto p-8" ref={scope}>
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-bg-secondary/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-border-accent/30"
                >
                    <div className="text-center mb-10">
                        <motion.h1
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            className="text-4xl font-bold text-text-primary bg-clip-text bg-gradient-to-r from-base-green-dark to-base-green-medium inline-block"
                        >
                            Grow Your Profile
                        </motion.h1>
                        <p className="mt-2 text-text-secondary">Cultivate your digital identity</p>
                    </div>

                    {/* Profile Image Upload */}
                    <motion.div
                        className="flex flex-col items-center mb-12"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-base-green-medium to-base-green-dark rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-border-accent/50 hover:border-base-green-medium transition-all">
                                <Image
                                    src={previewImage || '/Default_pfp.jpg'}
                                    alt="Profile"
                                    width={144}
                                    height={144}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="mt-4 px-4 py-2 bg-bg-primary rounded-full text-sm text-text-primary hover:text-base-green-medium transition-all flex items-center gap-2 border border-border-primary hover:border-base-green-medium"
                            >
                                <LeafIcon className="w-4 h-4" />
                                Change Photo
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </div>
                    </motion.div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {['firstName', 'lastName'].map((field, i) => (
                                <motion.div
                                    key={field}
                                    className="form-element"
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <label className="block text-sm font-medium text-text-secondary mb-3 ml-1">
                                        {field === 'firstName' ? 'First Name' : 'Last Name'}
                                    </label>
                                    <div className="relative">
                                        <input
                                            {...register(field as keyof FormData, {
                                                required: `${field === 'firstName' ? 'First' : 'Last'} name is required`
                                            })}
                                            className="w-full px-5 py-3 bg-bg-primary rounded-2xl border-2 border-border-primary/30 focus:border-base-green-medium focus:ring-2 focus:ring-base-green-medium/30 transition-all"
                                        />
                                        <LeafIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                                    </div>
                                    {errors[field as keyof FormData] && (
                                        <p className="text-button-danger text-sm mt-2 ml-1 flex items-center gap-1">
                                            <WarningIcon className="w-4 h-4" />
                                            {errors[field as keyof FormData]?.message}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="form-element"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <label className="block text-sm font-medium text-text-secondary mb-3 ml-1">
                                Phone Number (PH)
                            </label>
                            <div className="relative">
                                <input
                                    {...register('phone_number', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^(\+63\s*9\d{2}\s*\d{3}\s*\d{4}|09\s*\d{4}\s*\d{4}|\+639\d{9}|09\d{9})$/,
                                            message: 'Invalid Philippine phone number format'
                                        }
                                    })}
                                    placeholder="+63 912 345 6789"
                                    className="w-full px-5 py-3 bg-bg-primary rounded-2xl border-2 border-border-primary/30 focus:border-base-green-medium focus:ring-2 focus:ring-base-green-medium/30 transition-all"
                                />
                                <PhoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                            </div>
                            {errors.phone_number && (
                                <p className="text-button-danger text-sm mt-2 ml-1 flex items-center gap-1">
                                    <WarningIcon className="w-4 h-4" />
                                    {errors.phone_number.message}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            className="form-element"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <label className="block text-sm font-medium text-text-secondary mb-3 ml-1">
                                Address
                            </label>
                            <div className="relative">
                                <textarea
                                    {...register('address', { required: 'Address is required' })}
                                    rows={5}
                                    className="w-full px-5 py-3 resize-none bg-bg-primary rounded-2xl border-2 border-border-primary/30 focus:border-base-green-medium focus:ring-2 focus:ring-base-green-medium/30 transition-all"
                                />
                                <LocationIcon className="absolute right-4 top-4 w-5 h-5 text-text-secondary" />
                            </div>
                            {errors.address && (
                                <p className="text-button-danger text-sm mt-2 ml-1 flex items-center gap-1">
                                    <WarningIcon className="w-4 h-4" />
                                    {errors.address.message}
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            className="form-element"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {mutation.isError && (
                                <div className="text-center p-4 bg-button-danger/10 rounded-xl flex items-center justify-center gap-2 text-button-danger">
                                    <WarningIcon className="w-6 h-6" />
                                    Failed to complete profile. Please try again.
                                </div>
                            )}
                            {mutation.isSuccess && (
                                <div className="text-center p-4 bg-base-green-dark/10 rounded-xl flex items-center justify-center gap-2 text-base-green-dark">
                                    <CheckIcon className="w-6 h-6" />
                                    Profile completed successfully!
                                </div>
                            )}
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            disabled={mutation.isPending}
                            className="w-full cursor-pointer py-4 px-8 bg-gradient-to-r from-base-green-dark to-base-green-medium rounded-2xl font-semibold text-text-on-dark hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            {mutation.isPending ? (
                                <>
                                    <Spinner />
                                    Cultivating Profile...
                                </>
                            ) : (
                                <>
                                    <GardenIcon className="w-6 h-6" />
                                    Complete Your Profile
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

const LeafIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.8 3 19c-1 .7 3.6-8 10-8m4 4c3 0 6-2 6-5s-3-4-9-4-9 2-9 4 2.5 5 9 5" />
    </svg>
);

const WarningIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22M12 6l7.5 13h-15M11 10v4h2v-4m-2 6v2h2v-2" />
    </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const Spinner = () => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-6 h-6 border-2 border-current border-t-transparent rounded-full"
    />
);

const LocationIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
);

const GardenIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm-7 8c-1.1 0-2 .9-2 2 0 2.21 3.58 6.5 9 6.5s9-4.29 9-6.5c0-1.1-.9-2-2-2H5zm7 10c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
    </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
    </svg>
);