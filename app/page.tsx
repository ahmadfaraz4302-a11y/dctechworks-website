import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white relative">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 flex justify-between items-center px-4 md:px-8 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="transform transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo.png" alt="DC Tech Works Logo" width={45} height={45} className="object-contain w-auto h-auto" />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-blue-900 transition-colors duration-300 group-hover:text-blue-700">
            DC Tech Works
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-wide">
          <a href="#services" className="hover:text-blue-600 transition-colors duration-300">Services</a>
          <a href="#why-us" className="hover:text-blue-600 transition-colors duration-300">Why Us</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us Today</span>
            <a href="tel:9831134066" className="font-bold text-blue-900 hover:text-blue-600 transition-colors duration-300">9831134066</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Get Leads
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-slate-50 border-b border-gray-200 pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 bg-white px-3 py-1 rounded-full border border-gray-200 text-sm font-bold text-slate-600 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Premium ACA, SSDI, & Medicare Leads Delivered Daily
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 leading-[1.1]">
              Scale Your Agency with <span className="text-blue-600">Premium ACA Transfers.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Stop chasing cold contacts. Maximize your ROI with a steady stream of high-converting, real-time inbound ACA leads.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-l-4 border-blue-600 pl-6 py-2 group">
              <div className="transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-black text-blue-950">150+</h3>
                <p className="text-xs font-bold text-slate-500 uppercase">Happy Clients</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-black text-blue-950">100K+</h3>
                <p className="text-xs font-bold text-slate-500 uppercase">Leads Delivered</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-black text-blue-950">320%</h3>
                <p className="text-xs font-bold text-slate-500 uppercase">Avg. ROI</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-black text-blue-950">98%</h3>
                <p className="text-xs font-bold text-slate-500 uppercase">Success Rate</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:8577863760" className="bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg text-center">
                Call Now: 857-786-3760
              </a>
              <a href="#contact" className="bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded font-bold hover:border-blue-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-lg text-center">
                Request a Quote
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div id="contact" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <h3 className="text-2xl font-bold text-blue-950 mb-2">Start Getting Leads</h3>
            <p className="text-slate-500 mb-6 text-sm">Fill out the form below or email us directly at <a href="mailto:ahtesham@dctechworks.net" className="text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300 hover:underline">ahtesham@dctechworks.net</a></p>
            
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" className="w-full bg-slate-50 p-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
                <input type="text" placeholder="Last Name *" className="w-full bg-slate-50 p-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
              </div>
              <input type="email" placeholder="Email Address *" className="w-full bg-slate-50 p-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
              <input type="tel" placeholder="Phone Number *" className="w-full bg-slate-50 p-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" />
              <select className="w-full bg-slate-50 p-3 rounded border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-slate-600 cursor-pointer">
                <option>Lead Type Needed</option>
                <option>ACA Transfers</option>
                <option>Medicare Leads</option>
                <option>Auto Insurance Leads</option>
                <option>Final Expense / SSDI</option>
              </select>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded mt-2 hover:bg-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Get Exclusive Leads
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-950 mb-4">Our Premium Services</h2>
          <p className="text-slate-600 text-lg">Targeted, high-intent lead generation across the most competitive verticals.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Inbound ACA Transfers</h3>
            <p className="text-slate-600">Live, pre-qualified inbound calls from consumers actively seeking Affordable Care Act plans. 100% real-time connection.</p>
          </div>
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Exclusive Leads</h3>
            <p className="text-slate-600">Never compete for the same prospect. Our exclusive campaigns guarantee the lead is sold only to your agency.</p>
          </div>
          <div className="bg-white p-8 rounded border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Medicare & Final Expense</h3>
            <p className="text-slate-600">High-converting leads for Medicare and Final Expense, fully compliant and ready to convert.</p>
          </div>
        </div>

        {/* --- NEW ACA LIVE TRANSFERS BANNER --- */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-default">
          <h3 className="text-3xl md:text-5xl font-black mb-4">ACA Live Transfers</h3>
          <p className="text-blue-200 text-sm md:text-lg font-bold tracking-widest uppercase flex flex-wrap justify-center gap-2 md:gap-4">
            <span>High-Intent</span> <span className="text-blue-400">•</span> <span>Real-Time</span> <span className="text-blue-400">•</span> <span>Quality Traffic</span>
          </p>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section id="why-us" className="bg-blue-950 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Why Choose DC Tech Works?</h2>
            <p className="text-blue-200 text-lg">Backed by 5+ years of experience delivering scalable volume.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
             <div className="p-6 rounded-xl hover:bg-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 transform transition-transform duration-300 hover:scale-110">✅</div>
                <h4 className="font-bold text-lg mb-2">TCPA Compliant</h4>
                <p className="text-blue-200 text-sm">Strict adherence to regulations.</p>
             </div>
             <div className="p-6 rounded-xl hover:bg-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 transform transition-transform duration-300 hover:scale-110">🛡️</div>
                <h4 className="font-bold text-lg mb-2">Trusted Form Verified</h4>
                <p className="text-blue-200 text-sm">Guaranteed lead authenticity.</p>
             </div>
             <div className="p-6 rounded-xl hover:bg-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 transform transition-transform duration-300 hover:scale-110">⚡</div>
                <h4 className="font-bold text-lg mb-2">Real-Time Delivery</h4>
                <p className="text-blue-200 text-sm">Zero delay from capture to contact.</p>
             </div>
             <div className="p-6 rounded-xl hover:bg-blue-900/50 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4 transform transition-transform duration-300 hover:scale-110">📈</div>
                <h4 className="font-bold text-lg mb-2">Scalable Volume</h4>
                <p className="text-blue-200 text-sm">Grow your campaigns seamlessly.</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 py-12 px-6 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
          <div>
             <h4 className="text-white font-bold text-lg mb-4">DC Tech Works</h4>
             <p className="mb-2 hover:text-slate-200 transition-colors duration-300 cursor-default">1420 Centre Avenue, Apt 908<br/>Pittsburgh, PA 15219</p>
          </div>
          <div>
             <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
             <p className="mb-1"><a href="mailto:ahtesham@dctechworks.net" className="hover:text-blue-400 transition-colors duration-300">Email: ahtesham@dctechworks.net</a></p>
             <p className="mb-1"><a href="tel:9831134066" className="hover:text-blue-400 transition-colors duration-300">Phone 1: 9831134066</a></p>
             <p className="mb-1"><a href="tel:8577863760" className="hover:text-blue-400 transition-colors duration-300">Phone 2: 8577863760</a></p>
          </div>
          <div>
             <h4 className="text-white font-bold text-lg mb-4">Business Hours</h4>
             <p className="hover:text-slate-200 transition-colors duration-300 cursor-default">Monday - Friday<br/>8:30 AM to 6:30 PM</p>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2026 DC Tech Works. All rights reserved.</p>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href="https://wa.me/9831134066"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

    </main>
  );
}