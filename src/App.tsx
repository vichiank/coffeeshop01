/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from './constants/images';
import { 
  Menu, 
  X, 
  Coffee, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  ChevronRight,
  Star
} from 'lucide-react';

// --- Types & Constants ---

type Page = 'home' | 'products';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Hot' | 'Cold' | 'Specialty';
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'เอสเพรสโซ่คลาสสิก',
    description: 'ช็อตกาแฟเข้มข้นที่ให้พลังงานเต็มเปี่ยม รสชาติลุ่มลึก นุ่มนวลด้วยครีมม่าสีทอง',
    price: '$3.50',
    image: IMAGES.products.espresso,
    category: 'Hot'
  },
  {
    id: 2,
    name: 'ลาเต้อาร์ทิซาน',
    description: 'เอสเพรสโซ่รสนุ่มผสมผสานกับนมสดที่ผ่านการสตรีมจนได้ฟองนมที่ละเอียดอ่อน',
    price: '$4.75',
    image: IMAGES.products.latte,
    category: 'Hot'
  },
  {
    id: 3,
    name: 'ซิกเนเจอร์ คาปูชิโน่',
    description: 'ส่วนผสมที่ลงตัวของเอสเพรสโซ่ นมสตรีม และฟองนมนุ่มฟู เมนูโปรดสำหรับยามเช้า',
    price: '$4.50',
    image: IMAGES.products.cappuccino,
    category: 'Hot'
  },
  {
    id: 4,
    name: 'ไอซ์ วานิลลา บีน',
    description: 'กาแฟสกัดเย็นคุณภาพเยี่ยม ผสมผสานกับไซรัปวานิลลาออร์แกนิกและครีมสด',
    price: '$5.25',
    image: IMAGES.products.vanillaCold,
    category: 'Cold'
  },
  {
    id: 5,
    name: 'คาราเมล มัคคิอาโต้',
    description: 'ชั้นของฟองนม เอสเพรสโซ่ และนมสด ปิดท้ายด้วยซอสคาราเมลรสหวานหอม',
    price: '$4.95',
    image: IMAGES.products.caramel,
    category: 'Hot'
  },
  {
    id: 6,
    name: 'มัทฉะ กรีนที ลาเต้',
    description: 'ผงมัทฉะเกรดพรีเมียมพิถีพิถันชงกับนมโอ๊ตสตรีมร้อน มอบรสชาติที่กลมกล่อม',
    price: '$5.50',
    image: IMAGES.products.matcha,
    category: 'Specialty'
  }
];

// --- Components ---

interface NavbarProps {
  activePage: Page;
  setPage: (p: Page) => void;
}

const Navbar = ({ activePage, setPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-coffee-border">
      <div className="max-w-7xl mx-auto px-10 lg:px-16 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
          <span className="text-xl font-sans font-extrabold tracking-[2px] uppercase">AURA<span className="text-coffee-orange">ROASTS</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 font-sans">
          <button 
            onClick={() => setPage('home')}
            className={`accent-link ${activePage === 'home' ? 'text-coffee-orange border-b-2 border-coffee-orange pb-1' : ''}`}
          >
            หน้าแรก
          </button>
          <button 
            onClick={() => setPage('products')}
            className={`accent-link ${activePage === 'products' ? 'text-coffee-orange border-b-2 border-coffee-orange pb-1' : ''}`}
          >
            เมนูของเรา
          </button>
          <button className="accent-link">เกี่ยวกับเรา</button>
          <button className="accent-link">ติดต่อเรา</button>
          <button 
            onClick={() => setPage('products')}
            className="btn-coffee py-2 px-6 ml-4"
          >
            สั่งเลย
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden"
          >
            <button onClick={() => { setPage('home'); setIsOpen(false); }} className="text-left py-2 font-medium">หน้าแรก</button>
            <button onClick={() => { setPage('products'); setIsOpen(false); }} className="text-left py-2 font-medium">เมนูของเรา</button>
            <button className="text-left py-2 font-medium">เกี่ยวกับเรา</button>
            <button className="text-left py-2 font-medium">ติดต่อเรา</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-coffee-border h-[60px] flex items-center">
    <div className="max-w-7xl mx-auto px-10 lg:px-16 w-full flex justify-between items-center text-[11px] text-coffee-muted uppercase tracking-widest font-bold">
      <div>&copy; {new Date().getFullYear()} Aura Coffee Roasters.</div>
      <div className="hidden md:flex gap-8">
        <span className="hover:text-coffee-orange cursor-pointer">Privacy Policy</span>
        <span className="hover:text-coffee-orange cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </footer>
);

interface HomeProps {
  setPage: (p: Page) => void;
  key?: string;
}

const Home = ({ setPage }: HomeProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-coffee-white border-b border-coffee-border">
        <div className="max-w-7xl mx-auto px-10 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-8 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-coffee-border shadow-soft"
          >
            <div className="space-y-4">
              <span className="label-minimal">Establish Since 2012</span>
              <h1 className="text-5xl md:text-6xl font-sans font-bold leading-[1.1] text-coffee-dark uppercase tracking-tight">
                Brewing Moments<br />
                One Cup <span className="text-coffee-orange">at a Time.</span>
              </h1>
            </div>
            <p className="text-base text-coffee-muted leading-relaxed max-w-sm">
              สัมผัสศิลปะแห่งกาแฟทำมือ เราคัดสรรเมล็ดกาแฟที่ดีที่สุดจากทั่วโลกและคั่วอย่างพิถีพิถันเพื่อช่วงเวลาสุดพิเศษของคุณ
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setPage('products')}
                className="btn-coffee"
              >
                Explore Menu
              </button>
              <button className="px-8 py-3 rounded-lg border border-coffee-border text-coffee-dark font-bold text-[10px] uppercase tracking-widest hover:bg-coffee-gray transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:block relative h-[600px]"
          >
            <img 
              src={IMAGES.hero} 
              alt="Luxury Coffee Experience" 
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <main className="grid grid-cols-1 lg:grid-cols-[1fr_360px] max-w-7xl mx-auto border-x border-coffee-border bg-white">
        <div className="content-primary border-r border-coffee-border">
          {/* Featured Products */}
          <section className="section-spacing border-b border-coffee-border">
            <div className="space-y-2 mb-12">
              <span className="label-minimal font-bold">Featured Roasts</span>
              <h2 className="text-3xl font-serif font-bold">กาแฟแนะนำ</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.slice(0, 3).map((item) => (
                <div key={item.id} className="coffee-card card-hover group cursor-pointer overflow-hidden flex flex-col">
                  <div className="aspect-square overflow-hidden border-b border-coffee-border">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 text-center space-y-1">
                    <h3 className="text-base font-bold text-coffee-dark">{item.name}</h3>
                    <p className="text-xs text-coffee-orange font-bold font-sans tracking-wider">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="section-spacing">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold leading-tight">
                Small Batch Roasting, <br />
                Huge Heart.
              </h2>
              <p className="text-base text-coffee-muted leading-relaxed">
                ที่ ออร่า เราเชื่อว่ากาแฟเป็นมากกว่าเครื่องดื่ม—มันคือช่วงเวลาแห่งความกระจ่างแจ้ง เราทำงานร่วมกับเกษตรกรโดยตรงเพื่อให้แน่ใจว่าจะเกิดความยั่งยืนและเมล็ดกาแฟที่มีคุณภาพสูงสุด
              </p>
              <button className="btn-coffee">Read Our Story</button>
            </div>
          </section>
        </div>

        <aside className="sidebar-container">
          <div className="sidebar-section space-y-4">
            <h3 className="label-minimal !mb-0">Special Offer</h3>
            <div className="bg-coffee-orange text-white p-8 rounded-2xl space-y-4 shadow-lg shadow-coffee-orange/20">
              <h4 className="text-2xl font-serif font-bold leading-tight">ชุดมอร์นิ่ง เซเรนิตี้</h4>
              <p className="text-xs opacity-90 leading-relaxed">
                รับเมล็ดกาแฟ House Blend และแก้วมัคที่สวยงามของเราในราคาเพียง $29.99 สุดสัปดาห์นี้เท่านั้น
              </p>
              <button className="w-full py-3 bg-white text-coffee-orange rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-opacity-90 transition-all">
                รับข้อเสนอนี้
              </button>
            </div>
          </div>

          <div className="sidebar-section space-y-6 pt-6 border-t border-coffee-border">
            <h3 className="label-minimal !mb-0">Visit Us</h3>
            <div className="space-y-4">
              <div className="text-sm leading-relaxed text-coffee-muted">
                <strong className="text-coffee-dark block mb-1">Main Street Roastery</strong>
                124 ถนนโรสต์เวย์, ซีแอตเทิล, วอชิงตัน<br />
                จันทร์ - ศุกร์: 7:00 - 19:00<br />
                วันเสาร์ - อาทิตย์: 8:00 - 20:00
              </div>
              <div className="text-sm">
                <strong className="text-coffee-dark block mb-1">Phone</strong>
                (555) 123-4567
              </div>
            </div>
          </div>
        </aside>
      </main>
    </motion.div>
  );
};

interface ProductsProps {
  key?: string;
}

const Products = ({}: ProductsProps) => {
  const [filter, setFilter] = useState<'All' | 'Hot' | 'Cold' | 'Specialty'>('All');
  const [formSent, setFormSent] = useState(false);

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 min-h-screen bg-coffee-gray"
    >
      <div className="max-w-7xl mx-auto border-x border-coffee-border bg-white min-h-screen">
        <div className="section-spacing border-b border-coffee-border">
          <div className="text-center space-y-4 mb-20">
            <span className="label-minimal">คอลเลกชันของเรา</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold">Our Coffee Portfolio</h1>
            <p className="text-coffee-muted max-w-2xl mx-auto text-base">
              จากคลาสสิกเอสเพรสโซ่ไปจนถึงเมนูสร้างสรรค์ตามฤดูกาล ค้นพบแก้วโปรดของคุณที่ผ่านการชงอย่างพิถีพิถัน
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { tag: 'All', label: 'ทั้งหมด' },
              { tag: 'Hot', label: 'ร้อน' },
              { tag: 'Cold', label: 'เย็น' },
              { tag: 'Specialty', label: 'เมนูพิเศษ' }
            ].map((cat) => (
              <button
                key={cat.tag}
                onClick={() => setFilter(cat.tag as any)}
                className={`px-8 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all border ${
                  filter === cat.tag 
                  ? 'bg-coffee-dark text-white border-coffee-dark' 
                  : 'bg-white text-coffee-muted border-coffee-border hover:bg-coffee-gray'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProducts.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                className="coffee-card card-hover flex flex-col h-full bg-white border border-coffee-border rounded-xl group overflow-hidden"
              >
                <div className="relative aspect-square border-b border-coffee-border overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-lg text-xs font-bold shadow-sm border border-coffee-border z-10">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-coffee-orange">{item.category}</span>
                    <h3 className="text-xl font-bold text-coffee-dark">{item.name}</h3>
                    <p className="text-coffee-muted leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                  <button className="w-full py-3 rounded-lg border border-coffee-border text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-coffee-dark hover:text-white">
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <section className="bg-coffee-sidebar section-spacing px-10 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="label-minimal !mb-0">Group Orders</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Have a Bulk Order?</h2>
            <p className="text-coffee-muted text-base">
              กำลังวางแผนจัดงานอีเวนต์หรือต้องการจัดเลี้ยงในสำนักงานใช่ไหม? ติดต่อเราเพื่อรับใบเสนอราคาพิเศษ
            </p>
            <div className="space-y-4 pt-4 border-t border-coffee-border">
              {[
                'เมล็ดกาแฟคั่วพิเศษตามความต้องการ',
                'บริการบาริสต้ามืออาชีพ',
                'บรรจุภัณฑ์ที่เป็นมิตรต่อสิ่งแวดล้อม'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-coffee-dark font-medium">
                  <div className="w-2 h-2 rounded-full bg-coffee-orange" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border border-coffee-border shadow-soft">
            {formSent ? (
              <div className="text-center py-20 space-y-4 text-coffee-dark">
                <div className="w-16 h-16 bg-coffee-orange/10 text-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-serif font-bold">ส่งข้อความแล้ว!</h3>
                <p className="text-coffee-muted text-sm tracking-wide">ทีมงานของเราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-coffee-muted">ชื่อ</label>
                    <input type="text" required className="w-full bg-coffee-gray border border-coffee-border rounded-lg px-4 py-3 focus:outline-none focus:border-coffee-orange transition-all font-sans text-sm" placeholder="คุณสมพงษ์" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-coffee-muted">อีเมล</label>
                    <input type="email" required className="w-full bg-coffee-gray border border-coffee-border rounded-lg px-4 py-3 focus:outline-none focus:border-coffee-orange transition-all font-sans text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-coffee-muted">ประเภทบริการ</label>
                  <select className="w-full bg-coffee-gray border border-coffee-border rounded-lg px-4 py-3 focus:outline-none focus:border-coffee-orange transition-all appearance-none cursor-pointer font-sans text-sm">
                    <option className="bg-white text-coffee-dark">จัดเลี้ยงสำนักงาน</option>
                    <option className="bg-white text-coffee-dark">งานเลี้ยงส่วนตัว</option>
                    <option className="bg-white text-coffee-dark">ข้อมูลการขายส่ง</option>
                    <option className="bg-white text-coffee-dark">อื่นๆ</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-coffee-muted">ข้อความ</label>
                  <textarea rows={4} required className="w-full bg-coffee-gray border border-coffee-border rounded-lg px-4 py-3 focus:outline-none focus:border-coffee-orange transition-all resize-none font-sans text-sm" placeholder="บอกเราเกี่ยวกับความต้องการของคุณ..." />
                </div>
                <button type="submit" className="w-full btn-coffee py-4">
                  ส่งคำขอข้อมูล
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Smooth scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen">
      <Navbar activePage={page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' ? (
            <Home key="home" setPage={setPage} />
          ) : (
            <Products key="products" />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
