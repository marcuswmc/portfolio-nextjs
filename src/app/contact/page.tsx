"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { toast } from "sonner";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .regex(/^\+?[0-9\s-()]*$/, "Invalid phone number format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormErrors = {
  [K in keyof ContactFormData]?: string;
};

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+351) 912 981 585",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "marcus.relation@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Porto, Portugal",
  },
] as const;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ContactFormData];
        return newErrors;
      });
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse(formData);
      const response = fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),

    
      })

      if(!response){
        throw new Error('failed to send message')
      }

      setErrors({});

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors: FormErrors = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            formattedErrors[error.path[0] as keyof ContactFormData] =
              error.message;
          }
        });
        setErrors(formattedErrors);
        toast.error("Please check the form for errors");
      } else {
        console.error("An unexpected error occurred:", err);
      }
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s Talk</h3>
              <p className="text-white/60">
              Use the form below or the details on the right to get in touch.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <Input
                    name="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    placeholder="Firstname"
                    className={errors.firstname ? "border-red-500" : ""}
                  />
                  {errors.firstname && (
                    <span className="text-red-500 text-sm">
                      {errors.firstname}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Lastname"
                    className={errors.lastname ? "border-red-500" : ""}
                  />
                  {errors.lastname && (
                    <span className="text-red-500 text-sm">
                      {errors.lastname}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone}</span>
                  )}
                </div>
              </div>
              {/* textarea */}
              <div className="flex flex-col gap-1">
                <Textarea
                  name="message"
                  className={`h-[200px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </div>
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={`contact-item-${index}`}
                  className="flex items-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
