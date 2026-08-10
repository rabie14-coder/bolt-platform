import { Link } from "react-router-dom";
import { Bot, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-deep/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white">botdz</span>
            </Link>
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              منصة جزائرية تُمكّن التجار من إنشاء وكلاء ذكاء اصطناعي يردون على
              العملاء ويُديرون الطلبات على واتساب والموقع — بدون برمجة، وبالدفع
              بالدينار الجزائري.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-brand-purple/20 hover:border-brand-purple/30 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">المنتج</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/" className="hover:text-brand-purpleLight transition-colors">الرئيسية</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-purpleLight transition-colors">الأسعار</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-purpleLight transition-colors">لوحة التحكم</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">الشركة</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-purpleLight transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-brand-purpleLight transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-brand-purpleLight transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-brand-purpleLight transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 botdz. صُنع في الجزائر 🇩🇿
          </p>
          <p className="text-xs text-white/40">
            الدفع بالدينار الجزائري (DZD) — Barbidi / CIB / Edahabia
          </p>
        </div>
      </div>
    </footer>
  );
}
