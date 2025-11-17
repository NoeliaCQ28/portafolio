import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      // Para obtener estas credenciales, ve a https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tu Nombre', // Cambia esto por tu nombre
        },
        publicKey
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');

      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" ref={ref} className="relative bg-slate-50 dark:bg-slate-950/50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            ¿Listo para crear algo increíble?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Estoy disponible para nuevos proyectos o una charla sobre tecnología. ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400 text-center"
                >
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400 text-center"
                >
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Conectemos
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tu visión. No dudes en contactarme a través del formulario o por las siguientes redes:
            </p>

            <div className="space-y-4">
              <a
                href="mailto:tu.email@example.com"
                className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                  <MailIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">tu.email@example.com</p>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <LinkedinIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">@tunombre</p>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                  <GithubIcon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900 dark:text-white">GitHub</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">@tunombre</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;