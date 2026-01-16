"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name is too long").regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z.string().trim().email("Invalid email address").toLowerCase(),
  phone: z.string().trim().min(10, "Phone number is required").max(15, "Phone number is too long").regex(/^\+?[0-9\s-]*$/, "Invalid phone number format"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long").refine(val => !/<script|onload|onclick/i.test(val), "Invalid characters detected"),
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
    
    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    
    console.log({ ...data, date: formattedDate });
    setIsSubmitting(false);
    reset();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="mb-6 lg:mb-10">
        <h3 className="text-xl lg:text-2xl font-serif text-white mb-2">Send us a Message</h3>
        <p className="text-white/60 text-xs lg:text-sm font-light">We'll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
          <UnderlineInput
            label="Full Name"
            {...register("name")}
            error={errors.name?.message}
          />
          <UnderlineInput
            label="Email Address"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <UnderlineInput
          label="Phone Number"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <div className="relative group pt-2 lg:pt-4">
          <textarea
            {...register("message")}
            placeholder=" "
            rows={4}
            className={`peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-[#d4af37] transition-all resize-none py-2 text-sm lg:text-base ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          <label className="absolute left-0 top-2 text-xs lg:text-sm text-white/50 transition-all peer-placeholder-shown:text-sm lg:peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[10px] lg:peer-focus:text-xs peer-focus:text-[#d4af37]">
            Tell us about your needs
          </label>
          {errors.message && (
            <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-[#d4af37] text-[#1A3C2F] py-3 lg:py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#eace6e] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 lg:mt-4 shadow-lg shadow-[#d4af37]/10 text-sm lg:text-base"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Send Message <Send size={16} className="lg:w-[18px] lg:h-[18px]" />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}

function UnderlineInput({ label, error, type = "text", ...props }: any) {
  return (
    <div className="relative group pt-4">
      <input
        type={type}
        placeholder=" "
        className={`peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent focus:outline-none focus:border-[#d4af37] transition-all py-2 text-base ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      <label className="absolute left-0 top-2 text-sm text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#d4af37]">
        {label}
      </label>
      {error && <span className="text-red-400 text-xs mt-1 block">{error}</span>}
    </div>
  );
}
