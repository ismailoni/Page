// import { SetStateAction } from "react";
'use client';

import React, { useState } from "react";
import { Input } from "../components/atoms/input";
import { BlogNavbar } from "./navbar";
import { BlogPagination } from "./pagination";
import { BlogCard, BlogCardProps } from "./blogcard";
import blogcardimage from '@/public/blogimage.svg'
import { BlogHero } from "./hero";
import Nav from "../components/molecules/Nav";

const blogData: BlogCardProps[] = [
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] },
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] },
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] },
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] },
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] },
    { firstname: 'Musa', lastname: 'AbdulKareem', date: 'October 02, 2021', title: 'I’m Religious, But I Can’t Stop Masturbating.', content: 'I am a university student who is about to graduate. I have a secured job after graduation. I have found a girl whom I plan to marry after graduation. I attend the Masjid regularly. I pray the 5 prayers. I help organize community events. I have good friend group. I eat halal. I exercise a few  times a week. I visit parents on some weekends. I am memorizing Quran. Alhamdulillah. Yet, despite these things, I’ve had trouble with porn and masturbation. I’ve consciously fought for over three years, yet to no avail. I’m ashamed.', minsRead: 5, image: blogcardimage, post: 'Naibul Amir', tags: [{ tag: 'Aqeedah', color: '#4BC1F0' }] }]

export const BlogsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="bg-white">
            <Nav />
            <BlogHero />
            <div className="flex mx-12 -mt-48">
                <div className="w-2/3">
                    <BlogNavbar />
                </div>
                <div className="w-1/3">
                    <Input
                        type="text"
                        placeholder="Search Blogs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-full bg-white/20 px-10 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9b59b6] focus:w-[300px] transition-width duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-8 m-12">
                {blogData.map((blog, i) => (
                    <BlogCard key={i} firstname={blog.firstname} post={blog.post} lastname={blog.lastname} date={blog.date} title={blog.title} content={blog.content} minsRead={blog.minsRead} image={blog.image} tags={blog.tags} />
                ))
                }
            </div>
            <div className="flex justify-center">
                <BlogPagination currentPage={1} totalPages={10} />
            </div>
        </div>
    )
}

export default BlogsPage;