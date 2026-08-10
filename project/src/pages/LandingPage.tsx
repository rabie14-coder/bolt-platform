import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Globe,
  CreditCard,
  Sparkles,
  Bot,
  Zap,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Phone,
  Languages,
  Server,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: MessageCircle,
    emoji: "🤖",
    title: "رد آلي واتساب",
    fr: "Réponse WhatsApp",
    desc: "وكيل ذكي يرد على عملائك على واتساب 24/7، يفهم اللهجة الجزائرية، ويستقبل الطلبات تلقائياً.",
  },
  {
    icon: Globe,
    emoji: "🌐",
    title: "إدارة الموقع",
    fr: "Gestion du site",
    desc: "تحكّم في صفحات منتجاتك، المخزون، والأسعار — كل شيء من لوحة تحكم واحدة بسيطة.",
  },
  {
    icon: CreditCard,
    emoji: "💳",
    title: "دفع بالدينار الجزائري",
    fr: "Paiement en DZD",
    desc: "اقبل المدفوعات بالدينار الجزائري عبر Barbidi و CIB و Edahabia — بدون وسطاء أجانب.",
  },
];

const steps = [
  {
    icon: Bot,
    title: "أنشئ وكيلك",
    desc: "اختر اسم وكيلك وارفع كتالوج منتجاتك — لا حاجة لأي برمجة.",
  },
  {
    icon: Zap,
    title: "درّبه على متجرك",
    desc: "الوكيل يتعلّم من منتجاتك وأسئلة العملاء الشائعة تلقائياً.",
  },
  {
    icon: TrendingUp,
    title: "ابدأ البيع",
    desc: "اربط واتساب وموقعك، واستقبل الطلبات من اليوم الأول.",
  },
];

const stats = [
  { value: "500+", label: "تاجر جزائري" },
  { value: "1M+", label: "رسالة مُعالجة" },
  { value: "24/7", label: "دعم متواصل" },
  { value: "99.9%", label: "وقت تشغيل" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-brand-purpleDark/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="default"
              className="mb-6 animate-fade-in py-1.5 px-4"
            >
              <Sparkles className="h-3.5 w-3.5 ml-1.5" />
              منصة جزائرية 100% — مدعومة بالذكاء الاصطناعي
            </Badge>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white animate-fade-in-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              وكيل ذكي لمتجرك —{" "}
              <span className="text-gradient">24 ساعة على واتساب</span>
            </h1>

            <p
              className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.25s", opacity: 0 }}
            >
              أنشئ وكيل ذكاء اصطناعي يرد على عملائك، يستقبل الطلبات، ويُدير موقعك —
              بدون برمجة
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Link to="/pricing">
                <Button size="lg" className="w-full sm:w-auto glow">
                  ابدأ مجاناً
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  شاهد لوحة التحكم
                </Button>
              </Link>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50 animate-fade-in"
              style={{ animationDelay: "0.55s", opacity: 0 }}
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                بدون بطاقة ائتمان
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                إعداد في 5 دقائق
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                دعم بالعربية
              </span>
            </div>
          </div>

          {/* Hero preview */}
          <div
            className="mt-16 mx-auto max-w-5xl animate-fade-in-up"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            <div className="relative rounded-2xl glass-strong p-2 glow-strong">
              <div className="rounded-xl bg-brand-deep/60 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400/70" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-xs text-white/60">واتساب</span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg rounded-tr-none bg-brand-purple/30 p-2 text-xs text-white/80">
                        مرحبا، عندكم حذاء رياضي مقاس 42؟
                      </div>
                      <div className="rounded-lg rounded-tl-none bg-white/10 p-2 text-xs text-white/80">
                        نعم! لدينا 3 موديلات متوفرة مقاس 42. الأسعار بين 4500 و 7000 دج. تبي نبعثلك الصور؟ 👟
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-brand-purpleLight" />
                      </div>
                      <span className="text-xs text-white/60">الطلبات</span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex justify-between text-xs text-white/70">
                        <span>طلب #1042</span>
                        <span className="text-emerald-400">مؤكد</span>
                      </div>
                      <div className="flex justify-between text-xs text-white/70">
                        <span>طلب #1043</span>
                        <span className="text-amber-400">انتظار</span>
                      </div>
                      <div className="flex justify-between text-xs text-white/70">
                        <span>طلب #1044</span>
                        <span className="text-emerald-400">مؤكد</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-xs text-white/60">اليوم</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1,284</div>
                    <div className="text-xs text-white/50 mt-1">رسالة مُعالجة</div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-purple to-brand-purpleLight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in"
            style={{ animationDelay: "0.9s", opacity: 0 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">المميزات</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              كل ما يحتاجه متجرك في منصة واحدة
            </h2>
            <p className="mt-4 text-white/60">
              من الرد على العملاء إلى استقبال الطلبات والدفع — botdz يتعامل مع
              كل شيء بالعربية وبالدينار الجزائري.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card
                key={f.title}
                className="group hover:border-brand-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 animate-fade-in-up"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-purpleDark/20 border border-brand-purple/20 text-3xl mb-5 group-hover:scale-110 transition-transform">
                    {f.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{f.title}</h3>
                  <p className="text-xs text-white/40 mb-4">{f.fr}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">كيف يعمل</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              ثلاث خطوات فقط
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purpleDark shadow-lg shadow-brand-purple/30 mb-5">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-sm text-brand-purpleLight font-bold mb-2">
                  الخطوة {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 max-w-xs mx-auto">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-l from-brand-purple/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra features strip */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, title: "دعم صوتي", desc: "ردود صوتية بالعربية" },
              { icon: Languages, title: "عربي / فرنسي", desc: "لهجة جزائرية" },
              { icon: Server, title: "تخزين آمن", desc: "بياناتك في الجزائر" },
              { icon: ShieldCheck, title: "حماية كاملة", desc: "تشفير TLS" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl glass p-5 hover:border-brand-purple/30 transition-colors"
              >
                <item.icon className="h-6 w-6 text-brand-purpleLight mb-3" />
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-white/50 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple/30 via-brand-purpleDark/20 to-brand-deep/40 border border-brand-purple/20 p-10 sm:p-16 text-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-purple/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-purpleDark/20 blur-3xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              جاهز تزيّد مبيعاتك؟
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              انضم لأكثر من 500 تاجر جزائري يستعملون botdz لردّ على عملائهم
              تلقائياً.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button size="lg" className="w-full sm:w-auto glow">
                  ابدأ مجاناً
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  استكشف لوحة التحكم
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
