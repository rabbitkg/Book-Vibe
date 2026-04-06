import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router-dom'; // or use window.location for plain React



const ErrorPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Example: navigate to search results
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-950 flex items-center justify-center px-6 py-12 overflow-hidden">
            {/* Background subtle grid or particles can be added via CSS or libraries */}
            <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-40"></div>

            <div className="relative max-w-2xl mx-auto text-center z-10">
                {/* Large 404 with glow effect */}
                <div className="relative mb-8">
                    <h1 className="text-[180px] md:text-[220px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-600 select-none">
                        404
                    </h1>
                    {/* Glow layer */}
                    <div className="absolute inset-0 text-[180px] md:text-[220px] font-black tracking-tighter leading-none text-purple-500/20 blur-3xl select-none">
                        404
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
                    Oops! Page not found
                </h2>
                
                <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto mb-10">
                    The page you're looking for doesn't exist or has been moved. 
                    Let's get you back on track.
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="max-w-md mx-auto mb-12">
                    <div className="relative group">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search the site..."
                            className="w-full bg-zinc-900 border border-zinc-700 focus:border-purple-500 text-white placeholder-zinc-500 rounded-2xl px-6 py-4 text-lg outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500/30"
                        />
                        <button
                            type="submit"
                            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-medium transition-all active:scale-95"
                        >
                            Search
                        </button>
                    </div>
                </form>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="cursor-pointer group bg-white hover:bg-zinc-100 text-black font-semibold px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
                    >
                        <span>← Back to Home</span>
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="cursor-pointer group border border-zinc-700 hover:border-zinc-500 text-white font-medium px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
                    >
                        Go Back
                    </button>
                </div>

                {/* Optional helpful links */}
                <div className="mt-16 text-sm text-zinc-500 flex flex-wrap justify-center gap-x-8 gap-y-2">
                    <a href="/about" className="hover:text-zinc-300 transition-colors">About</a>
                    <a href="/contact" className="hover:text-zinc-300 transition-colors">Contact Support</a>
                    <a href="/sitemap" className="hover:text-zinc-300 transition-colors">Sitemap</a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;