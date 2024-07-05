'use client'


import React, { useState } from 'react';

export const About: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('about');

    const renderContent = () => {
        switch (selectedTab) {
            case 'about':
                return (
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p className="text-gray-500">
                            The Muslim Students Society of Nigeria, University of Lagos (MSSN UNILAG) is an active group that supports Muslim students. Through various programs and activities, MSSN UNILAG aims to create a supportive Islamic environment that promotes both academic success and personal growth.
                        </p>
                        <p className="mt-4 text-gray-500">
                            The society is dedicated to the well-being of its members and encourages them to be responsible and active in both the university and the larger community.
                        </p>
                    </div>
                );
            case 'mission':
                return (
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-500">
                            Our mission is to foster a supportive Islamic environment for Muslim students, encouraging academic excellence and personal growth. We strive to provide various programs and activities that promote a balanced and fulfilling student life.
                        </p>
                        <p className="mt-4 text-gray-500">
                            We are committed to the well-being of our members and aim to instill a sense of responsibility and active participation within the university and the larger community.
                        </p>
                    </div>
                );
            case 'vision':
                return (
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-gray-500">
                            Our vision is to be a leading student organization that embodies the principles of Islam while fostering academic and personal growth. We aim to create an inclusive environment where every member feels valued and supported.
                        </p>
                        <p className="mt-4 text-gray-500">
                            We envision a community where students are empowered to excel in their academic pursuits and contribute positively to society, guided by Islamic values and ethics.
                        </p>
                    </div>
                );
            case 'history':
                return (
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Our History/Background</h2>
                        <p className="text-gray-500">
                            The Muslim Students Society of Nigeria (MSSN) was established to support Muslim students in their academic and personal endeavors. MSSN UNILAG has a rich history of promoting Islamic values and providing a supportive community for its members.
                        </p>
                        <p className="mt-4 text-gray-500">
                            Over the years, we have grown and evolved, but our commitment to fostering a positive and enriching environment for Muslim students remains steadfast. Our history is a testament to our dedication and the impact we have had on countless students.
                        </p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex p-4 mx-16 justify-center">
            <div className="w-2/5 p-4">
                <div
                    className={`p-4 border rounded-2xl ${selectedTab === 'about' ? 'border-green-400' : ''}`}
                    onClick={() => setSelectedTab('about')}
                >
                    About Us
                </div>
                <div
                    className={`p-4 border mt-2 rounded-2xl ${selectedTab === 'mission' ? 'border-green-400' : ''}`}
                    onClick={() => setSelectedTab('mission')}
                >
                    Our Mission
                </div>
                <div
                    className={`p-4 border mt-2 rounded-2xl ${selectedTab === 'vision' ? 'border-green-400' : ''}`}
                    onClick={() => setSelectedTab('vision')}
                >
                    Our Vision
                </div>
                <div
                    className={`p-4 border mt-2 rounded-2xl ${selectedTab === 'history' ? 'border-green-400' : ''}`}
                    onClick={() => setSelectedTab('history')}
                >
                    Our History/Background
                </div>
            </div>
            <div className="w-3/5 p-4">
                {renderContent()}
            </div>
        </div>
    );
};


