'use client'

import React, { useState } from 'react';
import { NewsletterCard ,Newsletter } from './newslettercard';

const newsletters: Newsletter[] = [
    {
      title: "Newsletter Title",
      date: "24th March, 2024",
      content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
      It feels really good to write to you guys once more.
      I'm genuinely curious. How are you doing though?
      We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
      You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
      link: "#",
    },
    {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
        title: "Newsletter Title",
        date: "24th March, 2024",
        content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
        It feels really good to write to you guys once more.
        I'm genuinely curious. How are you doing though?
        We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
        You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
        link: "#",
      },
      {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
          title: "Newsletter Title",
          date: "24th March, 2024",
          content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
          It feels really good to write to you guys once more.
          I'm genuinely curious. How are you doing though?
          We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
          You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
          link: "#",
        },
        {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
            title: "Newsletter Title",
            date: "24th March, 2024",
            content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
            It feels really good to write to you guys once more.
            I'm genuinely curious. How are you doing though?
            We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
            You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
            link: "#",
          },
          {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
              title: "Newsletter Title",
              date: "24th March, 2024",
              content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
              It feels really good to write to you guys once more.
              I'm genuinely curious. How are you doing though?
              We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
              You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
              link: "#",
            },
            {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                title: "Newsletter Title",
                date: "24th March, 2024",
                content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                It feels really good to write to you guys once more.
                I'm genuinely curious. How are you doing though?
                We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                link: "#",
              },
              {
                  title: "Newsletter Title",
                  date: "24th March, 2024",
                  content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                  It feels really good to write to you guys once more.
                  I'm genuinely curious. How are you doing though?
                  We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                  You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                  link: "#",
                },
                {
                  title: "Newsletter Title",
                  date: "24th March, 2024",
                  content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                  It feels really good to write to you guys once more.
                  I'm genuinely curious. How are you doing though?
                  We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                  You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                  link: "#",
                },
                {
                  title: "Newsletter Title",
                  date: "24th March, 2024",
                  content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                  It feels really good to write to you guys once more.
                  I'm genuinely curious. How are you doing though?
                  We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                  You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                  link: "#",
                },
                {
                  title: "Newsletter Title",
                  date: "24th March, 2024",
                  content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                  It feels really good to write to you guys once more.
                  I'm genuinely curious. How are you doing though?
                  We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                  You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                  link: "#",
                },
                {
                  title: "Newsletter Title",
                  date: "24th March, 2024",
                  content: `As Salaamu Alaykum Warahmatullah Wabarakatuh,
                  It feels really good to write to you guys once more.
                  I'm genuinely curious. How are you doing though?
                  We understand that the semester is reaching its peak and the pressure is getting 'worse' but this isn't the time to fold.
                  You did not come this far just to break down and lose now, you are a winner! You're going to win!!`,
                  link: "#",
                },

  ];
  

const NewsletterList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsletters.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsletters.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((newsletter, index) => (
          <NewsletterCard key={index} newsletter={newsletter} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsletterList;
