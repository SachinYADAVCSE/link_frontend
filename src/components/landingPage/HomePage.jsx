import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            {/* <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-200">
        <h1 className="text-xl font-semibold tracking-tight">liinks</h1>
        <div className="space-x-8 text-sm">
          <button className="hover:text-black text-gray-600">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </nav> */}

            {/* Hero Section */}
            <div className="grid md:grid-cols-2 items-center px-10 py-20 mt-30">
                {/* Left */}
                <div className="max-w-xl">
                    <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ creators -- not yet --</p>

                    <h1 className="text-6xl font-bold leading-tight mb-6">
                        One link for <br />
                        <span className="bg-blue-500 text-white px-2">everything</span>
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Share all your online content from one beautiful link-in-bio page.
                        Claim your link today. -- start by creating an Account.
                    </p>

                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-fit">
                        <span className="px-4 text-gray-500 text-sm">liinks.co/</span>
                        <input
                            placeholder="yourname"
                            className="px-2 py-3 outline-none text-sm"
                        />
                        <Link to="/register">
                            <button className="bg-black text-white px-6 py-3 text-sm">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Mock UI */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-10 md:mt-0"
                >
                    <div className="relative">
                        {/* Back card */}
                        <div className="w-56 h-96 bg-gray-100 rounded-3xl shadow-md absolute -left-10 top-10" />

                        {/* Middle card */}
                        <div className="w-56 h-96 bg-white rounded-3xl shadow-lg border border-gray-200 absolute left-0 top-0 p-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2" />
                            <p className="text-center text-sm font-medium">@yourname</p>
                            <div className="mt-4 space-y-2">
                                {["Instagram", "YouTube", "Portfolio"].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-100 py-2 rounded-lg text-center text-sm"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Front card */}
                        <div className="w-56 h-96 bg-blue-50 rounded-3xl shadow-xl border border-gray-200 absolute left-20 top-5 p-4">
                            <div className="w-12 h-12 bg-blue-400 rounded-full mx-auto mb-2" />
                            <p className="text-center text-sm font-medium">Creator</p>
                            <div className="mt-4 space-y-2">
                                {["Shop", "Newsletter", "Links"].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white py-2 rounded-lg text-center text-sm border"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Feature Bar */}
            <div className="border-t border-b border-gray-200 py-6 flex justify-around text-sm text-gray-600">
                <span>Fully Customizable</span>
                <span>Set up in minutes</span>
                <span>No coding required</span>
            </div>

            {/* Why Choose Section */}
            <div className="grid md:grid-cols-2 border-t border-gray-200">
                {/* Left */}
                <div className="px-10 py-20 bg-white">
                    <h2 className="text-4xl font-semibold mb-6">
                        Why choose <span className="bg-blue-500 text-white px-2">liinks</span>?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-md">
                        Design a profile that matches your brand with advanced customization
                        and unique blocks—at a fraction of the cost.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90">
                        Get Started
                    </button>
                </div>

                {/* Right grid */}
                <div className="grid grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-blue-100 p-10 flex flex-col justify-center items-center text-center border-l border-b border-gray-200">
                        <div className="w-10 h-10 bg-white border rounded-lg mb-3" />
                        <h3 className="font-medium mb-1">More customizable</h3>
                        <p className="text-xs text-gray-600 max-w-[180px]">
                            Fine-tune colors, fonts, layouts and more.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-yellow-100 p-10 flex flex-col justify-center items-center text-center border-b border-gray-200">
                        <div className="w-10 h-10 bg-white border rounded-lg mb-3" />
                        <h3 className="font-medium mb-1">More powerful</h3>
                        <p className="text-xs text-gray-600 max-w-[180px]">
                            Videos, forms, embeds and more blocks.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-orange-100 p-10 flex flex-col justify-center items-center text-center border-l border-gray-200">
                        <div className="w-10 h-10 bg-white border rounded-lg mb-3" />
                        <h3 className="font-medium mb-1">More affordable</h3>
                        <p className="text-xs text-gray-600 max-w-[180px]">
                            Premium features starting at low cost.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-pink-100 p-10 flex flex-col justify-center items-center text-center">
                        <div className="w-10 h-10 bg-white border rounded-lg mb-3" />
                        <h3 className="font-medium mb-1">Great for teams</h3>
                        <p className="text-xs text-gray-600 max-w-[180px]">
                            Manage multiple profiles easily.
                        </p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-50 py-16 px-10 border-t border-gray-200">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Loved by <span className="bg-blue-500 text-white px-2">10,000+</span> creators --Not Yet--
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            text: "Super easy to set up. Clean UI and works perfectly.",
                            name: "Urban Farmer TV",
                        },
                        {
                            text: "Best link-in-bio tool I've used. Fast and simple.",
                            name: "SNYC Media",
                        },
                        {
                            text: "Helps me organize everything in one place.",
                            name: "Katie Doble",
                        },
                        {
                            text: "Very smooth experience and great customization.",
                            name: "Angela Bierman",
                        },
                        {
                            text: "Perfect for creators and professionals alike.",
                            name: "Out in Tech",
                        },
                        {
                            text: "I've been using it for years. Love it.",
                            name: "Ben L",
                        },
                    ].map((t, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-yellow-400 mb-2">★★★★★</div>
                            <p className="text-sm text-gray-700 mb-4">{t.text}</p>
                            <p className="text-xs text-gray-500">{t.name}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:opacity-90">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#0f172a] text-gray-300 px-10 py-16">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-3">liinks</h2>
                        <p className="text-sm text-gray-400">
                            Centralizing your online presence since 2026.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white mb-3 text-sm font-medium">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Help Center</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Features</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Customers */}
                    <div>
                        <h3 className="text-white mb-3 text-sm font-medium">Customers</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Creators</li>
                            <li>Agencies</li>
                            <li>Businesses</li>
                            <li>Influencers</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white mb-3 text-sm font-medium">Stay up to date</h3>
                        <div className="flex items-center bg-white rounded-full overflow-hidden">
                            <input
                                placeholder="Email address"
                                className="px-4 py-2 text-sm text-black outline-none w-full"
                            />
                            <button className="bg-black text-white px-4 py-2">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                    © 2026 liinks. All rights reserved.
                </div>
            </footer>
        </div >
    );
}
