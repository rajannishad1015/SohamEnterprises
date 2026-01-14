"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        alert("Thank you! Your message has been sent.");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                    <label className="text-xs uppercase font-bold text-white/40 tracking-widest pl-1 group-focus-within:text-[#34d399] transition-colors">First Name</label>
                    <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#34d399]/50 focus:bg-white/10 transition-all"
                        required
                    />
                </div>
                <div className="space-y-2 group">
                    <label className="text-xs uppercase font-bold text-white/40 tracking-widest pl-1 group-focus-within:text-[#34d399] transition-colors">Last Name</label>
                    <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#34d399]/50 focus:bg-white/10 transition-all"
                        required
                    />
                </div>
            </div>
            
            <div className="space-y-2 group">
                <label className="text-xs uppercase font-bold text-white/40 tracking-widest pl-1 group-focus-within:text-[#34d399] transition-colors">Email Address</label>
                <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#34d399]/50 focus:bg-white/10 transition-all"
                    required
                />
            </div>

            <div className="space-y-2 group">
                <label className="text-xs uppercase font-bold text-white/40 tracking-widest pl-1 group-focus-within:text-[#34d399] transition-colors">Message</label>
                <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#34d399]/50 focus:bg-white/10 transition-all resize-none min-h-[120px]"
                    required
                />
            </div>

            <button className="w-full bg-gradient-to-r from-[#34d399] to-[#2c4a3b] text-white py-4 rounded-xl font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg shadow-[#34d399]/20 flex items-center justify-center gap-3 group">
                Send Message
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </form>
    );
}
