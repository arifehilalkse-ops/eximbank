/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  HelpCircle, 
  Users, 
  ChevronRight, 
  Globe, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  FileText,
  DollarSign,
  Building2,
  Eye,
  Target,
  RefreshCcw
} from 'lucide-react';

// Currency Item Component
const CurrencyItem = ({ code, value, change }: { code: string, value: string, change: string }) => (
  <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-zinc-100 min-w-[120px]">
    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{code}</span>
    <span className="text-lg font-bold text-zinc-900">{value}</span>
    <span className={`text-[10px] font-bold ${change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
      {change}
    </span>
  </div>
);

// Navigation Item Component
const NavItem = ({ label, href, onClick }: { label: string, href: string, onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm whitespace-nowrap"
  >
    {label}
  </a>
);

// Section Header Component
const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <h2 className={`text-3xl font-bold tracking-tight mb-2 ${light ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl ${light ? 'text-zinc-400' : 'text-zinc-500'}`}>{subtitle}</p>}
    <div className={`h-1 w-12 mt-4 rounded-full ${light ? 'bg-zinc-400' : 'bg-zinc-900'}`} />
  </div>
);

// Application Card Component
const AppCard = ({ icon: Icon, title, description, items }: { icon: any, title: string, description: string, items: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-zinc-900" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-xs text-zinc-600">
          <CheckCircle2 className="w-3 h-3 text-zinc-400" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">{question}</span>
        <ChevronRight className={`w-5 h-5 text-zinc-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Anasayfa' },
    { id: 'applications', label: 'Applications' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'about', label: 'Bizi Tanıyın' },
    { id: 'faq', label: 'S.S.S.' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-zinc-900 selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-bold text-lg tracking-tight text-zinc-900 block leading-none">EximBank</span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Uygulamaları</span>
              </div>
            </button>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === item.id ? 'text-zinc-900 font-bold underline underline-offset-8 decoration-2' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="px-5 py-2.5 bg-zinc-900 text-white text-xs font-bold rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                Raporu İndir
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-zinc-600 hover:text-zinc-900"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-zinc-100 shadow-xl"
            >
              <div className="px-4 py-8 space-y-6 flex flex-col items-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg font-medium ${
                      activeTab === item.id ? 'text-zinc-900 font-bold' : 'text-zinc-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section (Anasayfa) */}
              <section className="relative pt-40 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03]">
                  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase bg-zinc-100 rounded-full mb-8 inline-block">
                        Uluslararası Ticaret ve Finansman
                      </span>
                      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tighter mb-8 leading-[1.1]">
                        Export Financing & <br /> <span className="text-zinc-400 italic">EximBank</span>
                      </h1>
                      <p className="text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed">
                        İhracat finansmanı, küresel pazarda rekabet gücünü artırmanın anahtarıdır. EximBank uygulamaları ile riskleri yönetin ve büyümenizi finanse edin.
                      </p>
                      
                      <div className="flex flex-wrap gap-4">
                        <button 
                          onClick={() => setActiveTab('applications')}
                          className="px-10 py-5 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all flex items-center gap-3 group shadow-xl shadow-zinc-200"
                        >
                          Uygulamaları İncele
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                        <img 
                          src="https://picsum.photos/seed/finance/1200/900" 
                          alt="Finance background" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Currency Widget */}
                      <div className="absolute -bottom-10 right-0 left-0 md:left-auto md:right-10 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] shadow-2xl border border-white/20">
                        <div className="flex items-center justify-between mb-4 px-2">
                          <div className="flex items-center gap-2">
                            <RefreshCcw className="w-3 h-3 text-zinc-400 animate-spin-slow" />
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Canlı Kurlar</span>
                          </div>
                          <span className="text-[10px] font-medium text-zinc-300">19 Mart 2026</span>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                          <CurrencyItem code="USD/TRY" value="32.45" change="+0.12%" />
                          <CurrencyItem code="EUR/TRY" value="35.12" change="+0.08%" />
                          <CurrencyItem code="GBP/TRY" value="41.20" change="-0.03%" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* General Info Cards */}
                  <div className="grid md:grid-cols-3 gap-8 mt-32">
                    <div className="p-8 bg-white rounded-3xl border border-zinc-100">
                      <h3 className="font-bold text-zinc-900 mb-4">İhracat Finansmanı Nedir?</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        İhracatçıların üretimden sevkiyata kadar olan süreçte ihtiyaç duydukları işletme sermayesini sağlamak amacıyla sunulan finansal araçların bütünüdür.
                      </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-zinc-100">
                      <h3 className="font-bold text-zinc-900 mb-4">EximBank'ın Rolü</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Resmi destekli ihracat kredi kuruluşu olarak, ticari bankaların üstlenemediği riskleri yönetir ve uzun vadeli stratejik finansman sağlar.
                      </p>
                    </div>
                    <div className="p-8 bg-white rounded-3xl border border-zinc-100">
                      <h3 className="font-bold text-zinc-900 mb-4">Küresel Etki</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Doğru finansman modelleri ile yerel üreticilerin dünya devleriyle aynı şartlarda rekabet etmesine olanak tanır.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Expanded Vision & Mission Section */}
              <section className="py-32 bg-zinc-900 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col justify-center"
                    >
                      <span className="text-zinc-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Geleceğe Bakış</span>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                        İhracatın Geleceğini <br /> <span className="text-zinc-400 italic">Birlikte Şekillendiriyoruz</span>
                      </h2>
                      <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                        EximBank olarak sadece finansman sağlamıyoruz; Türk ihracatçısının küresel arenadaki gücünü perçinleyecek stratejik bir yol arkadaşlığı sunuyoruz.
                      </p>
                      <div className="flex gap-4">
                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-widest">Sürdürülebilirlik</div>
                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-widest">İnovasyon</div>
                      </div>
                    </motion.div>

                    <div className="grid gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] group hover:bg-white/10 transition-all"
                      >
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
                        <p className="text-zinc-400 leading-relaxed">
                          Türk ihracatçısının küresel ticaretteki en güvenilir, en dinamik ve en yenilikçi finansal partneri olarak; yerel gücümüzü küresel başarı hikayelerine dönüştürmek.
                        </p>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-10 bg-zinc-100 rounded-[40px] group hover:bg-white transition-all"
                      >
                        <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">Misyonumuz</h3>
                        <p className="text-zinc-500 leading-relaxed">
                          İhracatçılarımıza sunduğumuz sürdürülebilir ve rekabetçi finansman modelleri ile Türkiye'nin dış ticaret hacmini artırmak ve küresel pazarda kalıcı bir üstünlük sağlamak.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'applications' && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Applications Section */}
              <section className="py-40 bg-zinc-50/50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                  <SectionHeader 
                    title="EximBank Applications" 
                    subtitle="İhracatçıların finansal ihtiyaçlarına yönelik sunulan temel çözüm ve uygulamalar." 
                  />
                  <div className="grid md:grid-cols-3 gap-8">
                    <AppCard 
                      icon={DollarSign} 
                      title="İhracat Kredileri" 
                      description="Kısa, orta ve uzun vadeli finansman seçenekleri ile ihracat öncesi ve sonrası nakit akışınızı yönetin."
                      items={["İhracat Hazırlık Kredisi", "Sevk Öncesi Kredi", "Döviz Kazandırıcı Hizmetler"]}
                    />
                    <AppCard 
                      icon={ShieldCheck} 
                      title="Kredi Sigortası" 
                      description="Ticari ve politik risklere karşı alacaklarınızı güvence altına alarak güvenle yeni pazarlara açılın."
                      items={["Kısa Vadeli Sigorta", "Orta/Uzun Vadeli Sigorta", "Politik Risk Koruması"]}
                    />
                    <AppCard 
                      icon={Briefcase} 
                      title="Garanti Programları" 
                      description="Yurt dışı projeler ve banka teminatları için EximBank garantörlüğünden faydalanın."
                      items={["Teminat Mektupları", "Yurt Dışı Müteahhitlik", "Banka Garantileri"]}
                    />
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'case-study' && (
            <motion.div
              key="case-study"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Case Study Section */}
              <section className="py-40 px-4 min-h-screen">
                <div className="max-w-7xl mx-auto">
                  <div className="bg-zinc-900 rounded-[48px] overflow-hidden p-8 md:p-20 relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                      <div>
                        <SectionHeader 
                          title="Case Study: Global Expansion" 
                          subtitle="Bir Türk tekstil firmasının EximBank desteğiyle Avrupa pazarına giriş hikayesi." 
                          light
                        />
                        <div className="space-y-8">
                          <div className="flex gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold mb-2">Problem Tanımı</h4>
                              <p className="text-zinc-400 text-sm leading-relaxed">Firma, yüksek hammadde maliyetleri ve alacak riskleri nedeniyle büyük siparişleri kabul edemiyordu.</p>
                            </div>
                          </div>
                          <div className="flex gap-6">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold mb-2">Uygulanan Çözüm</h4>
                              <p className="text-zinc-400 text-sm leading-relaxed">EximBank'ın Sevk Öncesi İhracat Kredisi ve Alacak Sigortası paketleri eş zamanlı olarak devreye alındı.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12">
                        <h4 className="text-white font-bold text-2xl mb-8">Sonuçlar</h4>
                        <div className="space-y-6">
                          <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <span className="text-zinc-400 text-sm">İhracat Hacmi</span>
                            <span className="text-white font-bold text-3xl">+120%</span>
                          </div>
                          <div className="flex justify-between items-end border-b border-white/10 pb-4">
                            <span className="text-zinc-400 text-sm">Yeni Pazar Girişi</span>
                            <span className="text-white font-bold text-3xl">4 Ülke</span>
                          </div>
                          <div className="flex justify-between items-end pb-4">
                            <span className="text-zinc-400 text-sm">Risk Oranı</span>
                            <span className="text-emerald-400 font-bold text-3xl">-95%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Bizi Tanıyın Section */}
              <section className="py-40 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden">
                          <img src="https://picsum.photos/seed/team1/400/400" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="aspect-square rounded-3xl bg-zinc-100 overflow-hidden mt-8">
                          <img src="https://picsum.photos/seed/team2/400/400" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <SectionHeader 
                        title="Bizi Tanıyın" 
                        subtitle="Bu proje, ihracat finansmanı ve EximBank'ın ekonomik etkilerini incelemek amacıyla hazırlanmış bir akademik çalışmadır." 
                      />
                      <p className="text-zinc-500 mb-8 leading-relaxed">
                        Ekibimiz, uluslararası ticaretin finansal boyutlarını derinlemesine analiz ederek, ihracatçıların karşılaştığı zorluklara EximBank perspektifinden çözümler sunmayı hedeflemektedir.
                      </p>
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden">
                              <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" />
                            </div>
                          ))}
                        </div>
                        <div className="text-sm">
                          <p className="font-bold text-zinc-900">Proje Grubu</p>
                          <p className="text-zinc-400">3 Kişilik Araştırma Ekibi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* FAQ Section */}
              <section className="py-40 bg-zinc-50/50 min-h-screen">
                <div className="max-w-3xl mx-auto px-4">
                  <SectionHeader 
                    title="Sıkça Sorulan Sorular" 
                    subtitle="İhracat finansmanı ve EximBank süreçleri hakkında merak edilenler." 
                  />
                  <div className="bg-white rounded-[32px] border border-zinc-100 p-8 md:p-12 shadow-sm">
                    <FAQItem 
                      question="EximBank kredilerinden kimler faydalanabilir?" 
                      answer="Türkiye'de yerleşik, ihracat yapan veya döviz kazandırıcı faaliyetlerde bulunan tüm firmalar, KOBİ'ler ve büyük ölçekli işletmeler faydalanabilir." 
                    />
                    <FAQItem 
                      question="İhracat kredi sigortası neleri kapsar?" 
                      answer="Alıcının iflası, ödeme güçlüğü gibi ticari risklerin yanı sıra savaş, transfer kısıtlamaları ve ithalat yasakları gibi politik riskleri de kapsar." 
                    />
                    <FAQItem 
                      question="Başvuru süreci ne kadar sürer?" 
                      answer="Başvuru türüne ve firmanın mali yapısına bağlı olarak genellikle 2-4 hafta arasında sonuçlanmaktadır." 
                    />
                    <FAQItem 
                      question="Teminat olarak neler kabul edilir?" 
                      answer="Banka teminat mektupları, KGF kefaleti, gayrimenkul ipoteği ve ihracat alacak sigortası poliçeleri teminat olarak değerlendirilebilir." 
                    />
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-zinc-900">EximBank Projesi</span>
            </div>
            <div className="flex gap-8">
              <a href="mailto:arifehilalkse@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-xs">© 2026 Export Financing & EximBank Applications. Akademik Sunum.</p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-zinc-900 text-xs font-medium">Gizlilik Politikası</a>
              <a href="#" className="text-zinc-400 hover:text-zinc-900 text-xs font-medium">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
