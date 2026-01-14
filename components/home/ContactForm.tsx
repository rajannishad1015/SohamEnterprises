"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    reset();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="mb-8">
        <h3 className="text-2xl font-serif text-white mb-2">Get in Touch</h3>
        <p className="text-white/60 text-sm">We'd love to hear from you. Fill out the form below.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FloatingInput
            label="Full Name"
            {...register("name")}
            error={errors.name?.message}
          />
          <FloatingInput
            label="Email Address"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <FloatingInput
          label="Phone Number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <div className="relative group">
          <textarea
            {...register("message")}
            placeholder=" "
            rows={4}
            className={`peer w-full bg-white/5 border-b-2 border-white/10 text-white placeholder-transparent focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all resize-none p-3 pt-6 text-sm ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          <label className="absolute left-3 top-2 text-xs font-bold uppercase text-white/40 tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#d4af37]">
            Tell us about your needs
          </label>
          {errors.message && (
            <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-[#d4af37] text-[#1A3C2F] py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Send Message <Send size={18} />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}

function FloatingInput({ label, error, type = "text", ...props }: any) {
  // Extract ref from props to handle it manually or pass it properly if needed, 
  // but simpler to just spread props since react-hook-form handles refs.
  // Note: react-hook-form's register returns a ref.
  return (
    <div className="relative group">
      <input
        type={type}
        placeholder=" "
        className={`peer w-full bg-white/5 border-b-2 border-white/10 text-white placeholder-transparent focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all p-3 pt-6 text-sm ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      <label className="absolute left-3 top-2 text-xs font-bold uppercase text-white/40 tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#d4af37]">
        {label}
      </label>
      {error && <span className="text-red-400 text-xs mt-1 block">{error}</span>}
    </div>
  );
}
