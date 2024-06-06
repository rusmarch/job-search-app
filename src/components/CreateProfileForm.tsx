'use client'
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useAuth } from "@/hooks/use-auth";
import type { UserProfileData } from '@/types/user';

export default function CreateProfileForm() {
  const { login } = useAuth();
  const router = useRouter();

  const userProfileSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(150, 'Name must be at most 150 characters')
      .min(2, 'Name must be at least 2 character'),
    jobTitle: Yup.string()
      .required('Job Title is required')
      .max(150, 'Job Title be at most 150 characters')
      .min(2, 'Job Title must be at least 2 character'),
    aboutMe: Yup.string().required('About Me is required')
  });

  const defaultValues = {
    name: '',
    jobTitle: '',
    aboutMe: '',
  };

  const methods = useForm<UserProfileData>({
    resolver: yupResolver(userProfileSchema),
    defaultValues,
  });

  const onSubmit = methods.handleSubmit(
    (formData: UserProfileData) => {
      login(formData);
      methods.reset();
      router.push('/jobs');
    });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center bg-white p-4 rounded shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Create Profile</h2>
      <input
        {...methods.register('name')}
        type="text"
        name="name"
        placeholder="Name"
        className="mb-2 p-2 border rounded"
      ></input>
      {methods.formState.errors.name &&
        <p className="text-red-500">{methods.formState.errors.name.message}</p>}
      <input
        {...methods.register('jobTitle')}
        type="text"
        name="jobTitle"
        placeholder="Job title"
        className="mb-2 p-2 border rounded"
      ></input>
      {methods.formState.errors.jobTitle &&
        <p className="text-red-500">{methods.formState.errors.jobTitle.message}</p>}
      <textarea
        {...methods.register('aboutMe')}
        name="aboutMe"
        placeholder="Tell about yourself"
        className="mb-2 p-2 border rounded"
      ></textarea>
      {methods.formState.errors.aboutMe &&
        <p className="text-red-500">{methods.formState.errors.aboutMe.message}</p>}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Create Profile</button>
    </form>
  );
}
