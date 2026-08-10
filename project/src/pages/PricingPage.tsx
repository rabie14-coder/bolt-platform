import { Link } from "react-router-dom";
import { Check, ArrowLeft, Sparkles, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    arabicName: "وكيل",
    tagline: "للتاجر الذي يبدأ",
    price: "3,500",
    period: "DZD / شهر",
    icon: "🤖",
    features: [
      "وكيل ذكاء اصطناعي واحد (1)",
      "1,000 رسالة شهرياً",
      "واتساب أو الموقع (اختر قناة واحدة)",
      "ردود تلقائية بالعربية والفرنسية",
      "لوحة تحكم كاملة",
      "دعم عبر البريد",
    ],
    cta: "اشترك الآن",
    highlighted: false,
  },
  {
    name: "Advanced",
    arabicName: "فريق",
    tagline: "للنمو المتسارع",
    price: "8,500",
    period: "DZD / شهر",
    icon: "⚡",
    features: [
      "3 وكلاء ذكاء اصطناعي",
      "5,000 رسالة شهرياً",
      "واتساب + الموقع معاً",
      "RAG — بحث في كتالوج منتجاتك",
      "استقبال الطلبات تلقائياً",
      "تحليلات متقدمة",
      "دعم ذو أولوية",
    ],
    cta: "اشترك الآن",
    highlighted: true,
  },
  {
    name: "Pro",
    arabicName: "مؤسسة",
    tagline: "للمؤسسات الكبرى",
    price: "18,000",
    period: "DZD / شهر",
    icon: "🏆",
    features: [
      "وكلاء غير محدودين",
      "رسائل غير محدودة",
      "جميع القنوات (واتساب، موقع، صوت)",
      "ذكاء اصطناعي صوتي (Voice AI)",
      "سير عمل مخصّص (Custom Workflows)",
      "API كامل وتكاملات",
      "مدير حساب مخصّص",
      "دعم 24/7",
    ],
    cta: "اشترك الآن",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "هل الدفع بالدينار الجزائري؟",
    a: "نعم، جميع الباقات تُدفع بالدينار الجزائري عبر Barbidi و CIB و Edahabia. لا حاجة لبطاقة ائتمان أجنبية.",
  },
  {
    q: "هل أحتاج لمعرفة البرمجة؟",
    a: "إطلاقاً. تُنشئ وكيلك في دقائق عبر واجهة بسيطة — ارفع منتجاتك والوكيل يتعلّم تلقائياً.",
  },
  {
    q: "هل يفهم الوكيل اللهجة الجزائرية؟",
    a: "نعم، الوكيل مُدرّب على اللهجة الجزائرية والدارجة مع دعم كامل للعربية الفصحى والفرنسية.",
  },
  {
    q: "هل يمكنني الترقية لاحقاً؟",
    a: "بالتأكيد، يمكنك الترقية أو التخفيض في أي وقت من لوحة التحكم دون فقدان بياناتك.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="default" className="mb-6 py-1.5 px-4">
              <Sparkles className="h-3.5 w-3.5 ml-1.5" />
              أسعار شفافة — بالدينار الجزائري
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              اختر الباقة المناسبة لمتجرك
            </h1>
            <p className="mt-5 text-lg text-white/60">
              ابدأ مجاناً وارتقِ متى ما احتجت. كل الباقات تشمل الدعم بالعربية
              والدفع بالدينار الجزائري.
            </p>
          </div>

          {/* Plans */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative animate-fade-in-up",
                  plan.highlighted &&
                    "border-brand-purple/40 bg-gradient-to-b from-brand-purple/15 to-white/[0.03] glow",
                  !plan.highlighted && "hover:border-white/20"
                )}
                style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="py-1.5 px-4 shadow-lg shadow-brand-purple/40 gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      الأكثر شعبية
                    </Badge>
                  </div>
                )}
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{plan.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {plan.arabicName}
                      </h3>
                      <p className="text-xs text-white/40">{plan.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mb-6">{plan.tagline}</p>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/50">{plan.period}</span>
                  </div>
                  <p className="text-xs text-white/40 mb-6">دفع شهري، بدون التزام</p>

                  <Link to="/dashboard" className="block">
                    <Button
                      className={cn("w-full", !plan.highlighted && "variant-secondary")}
                      variant={plan.highlighted ? "default" : "secondary"}
                    >
                      {plan.cta}
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>

                  <div className="mt-7 space-y-3.5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20">
                          <Check className="h-3 w-3 text-brand-purpleLight" />
                        </div>
                        <span className="text-sm text-white/70 leading-relaxed">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-white/40">
              جميع الأسعار شاملة لرسوم الضرائب. الدفع عبر{" "}
              <span className="text-white/60 font-medium">Barbidi</span>،{" "}
              <span className="text-white/60 font-medium">CIB</span>، و{" "}
              <span className="text-white/60 font-medium">Edahabia</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            مقارنة الباقات
          </h2>
          <div className="overflow-x-auto rounded-2xl glass">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-right p-4 text-white/60 font-medium">الميزة</th>
                  <th className="p-4 text-white/60 font-medium">وكيل</th>
                  <th className="p-4 text-brand-purpleLight font-bold">فريق</th>
                  <th className="p-4 text-white/60 font-medium">مؤسسة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: "الوكلاء", values: ["1", "3", "غير محدود"] },
                  { label: "الرسائل الشهرية", values: ["1,000", "5,000", "غير محدود"] },
                  { label: "واتساب", values: [true, true, true] },
                  { label: "الموقع", values: ["أو واتساب", true, true] },
                  { label: "RAG / كتالوج", values: [false, true, true] },
                  { label: "استقبال الطلبات", values: [false, true, true] },
                  { label: "Voice AI", values: [false, false, true] },
                  { label: "سير عمل مخصص", values: [false, false, true] },
                  { label: "API كامل", values: [false, false, true] },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-white/[0.02]">
                    <td className="p-4 text-white/80 font-medium">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {v === true ? (
                          <Check className="h-4 w-4 text-emerald-400 mx-auto" />
                        ) : v === false ? (
                          <span className="text-white/20">—</span>
                        ) : (
                          <span className="text-white/70">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl glass p-5">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-purple/30 via-brand-purpleDark/20 to-brand-deep/40 border border-brand-purple/20 p-10 sm:p-14 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              ما زلت متردداً؟ جرّب مجاناً
            </h2>
            <p className="mt-3 text-white/70">
              ابدأ بتجربة مجانية بدون بطاقة ائتمان. ارفع متجرك خلال 5 دقائق.
            </p>
            <Link to="/dashboard" className="inline-block mt-6">
              <Button size="lg" className="glow">
                ابدأ مجاناً
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
