import { useState } from "react";
import DashboardSidebar, {
  DashboardTopbar,
  type DashboardSection,
} from "@/components/DashboardSidebar";
import {
  stats,
  StatCard,
  ConversationsTable,
  UsageCard,
  OrdersCard,
  AgentCard,
} from "@/components/dashboard/widgets";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Bot,
  Plus,
  Phone,
  Globe,
  Zap,
  Save,
  Trash2,
  KeyRound,
  Webhook,
  Bell,
  Languages,
} from "lucide-react";

const sectionTitles: Record<DashboardSection, string> = {
  overview: "نظرة عامة",
  agent: "وكيلي",
  conversations: "المحادثات",
  settings: "الإعدادات",
};

export default function DashboardPage() {
  const [section, setSection] = useState<DashboardSection>("overview");

  return (
    <div className="min-h-screen">
      <DashboardSidebar active={section} onChange={setSection} />

      <div className="lg:pr-64">
        <DashboardTopbar title={sectionTitles[section]} />

        <main className="p-4 sm:p-6 lg:p-8">
          {section === "overview" && <OverviewSection />}
          {section === "agent" && <AgentSection />}
          {section === "conversations" && <ConversationsSection />}
          {section === "settings" && <SettingsSection />}
        </main>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ConversationsTable />
          <OrdersCard />
        </div>
        <div className="space-y-6">
          <AgentCard />
          <UsageCard />
        </div>
      </div>
    </div>
  );
}

function AgentSection() {
  const agents = [
    {
      name: "وكيل النور",
      status: "متصل",
      channels: ["واتساب", "الموقع"],
      messages: "3,200",
      desc: "وكيل رئيسي للرد على استفسارات المنتجات واستقبال الطلبات.",
    },
    {
      name: "وكيل الدعم",
      status: "متصل",
      channels: ["واتساب"],
      messages: "1,450",
      desc: "وكيل متخصص في الشكاوى والإرجاعات وخدمة ما بعد البيع.",
    },
    {
      name: "وكيل فارغ",
      status: "معطّل",
      channels: [],
      messages: "0",
      desc: "وكيل متاح — أنشئه وفعّله من أجل قناة جديدة.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/50">
          لديك 3 وكلاء — 2 نشط، 1 معطّل (باقة فريق)
        </p>
        <Button size="sm">
          <Plus className="h-4 w-4" />
          وكيل جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((a, i) => (
          <Card
            key={a.name}
            className="animate-fade-in-up hover:border-brand-purple/30 transition-colors"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark shadow-lg shadow-brand-purple/30">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white truncate">{a.name}</h3>
                  <Badge
                    variant={a.status === "متصل" ? "success" : "secondary"}
                    className="mt-1"
                  >
                    {a.status}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">{a.desc}</p>
              <div className="flex items-center gap-2 mb-4">
                {a.channels.includes("واتساب") && (
                  <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                    <Phone className="h-3 w-3" /> واتساب
                  </span>
                )}
                {a.channels.includes("الموقع") && (
                  <span className="flex items-center gap-1 text-xs text-brand-purpleLight bg-brand-purple/10 px-2 py-1 rounded-md">
                    <Globe className="h-3 w-3" /> الموقع
                  </span>
                )}
                {a.channels.length === 0 && (
                  <span className="text-xs text-white/30">لا توجد قنوات نشطة</span>
                )}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-white/40">
                  {a.messages} رسالة
                </span>
                <Button size="sm" variant="ghost">
                  إدارة
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ConversationsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: "إجمالي المحادثات", value: "1,247" },
          { label: "نشطة الآن", value: "12" },
          { label: "مكتملة اليوم", value: "89" },
          { label: "متوسط وقت الرد", value: "2.1ث" },
        ].map((s) => (
          <Card key={s.label}>
            <div className="p-4">
              <div className="text-xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation list */}
        <Card className="lg:col-span-1">
          <div className="p-4 border-b border-white/10">
            <Input placeholder="بحث في المحادثات..." />
          </div>
          <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto">
            {[
              {
                name: "أمين بن سعيد",
                initials: "أب",
                msg: "نعم، سأطلب الحذاء مقاس 42",
                time: "قبل دقيقتين",
                active: true,
                unread: 2,
              },
              {
                name: "سارة مرزوق",
                initials: "سم",
                msg: "شكراً! تم تأكيد الطلب",
                time: "قبل 8 د",
                active: false,
                unread: 0,
              },
              {
                name: "يوسف حمدي",
                initials: "يح",
                msg: "عندكم تخفيضات؟",
                time: "قبل 15 د",
                active: false,
                unread: 1,
              },
              {
                name: "ليلى عبد الرحمن",
                initials: "لع",
                msg: "أريد إرجاع المنتج",
                time: "قبل 32 د",
                active: false,
                unread: 0,
              },
              {
                name: "كريم زيدان",
                initials: "كز",
                msg: "كم التوصيل لوهران؟",
                time: "قبل ساعة",
                active: false,
                unread: 0,
              },
              {
                name: "نور الدين خليفة",
                initials: "نخ",
                msg: "تم الدفع عبر Barbidi",
                time: "قبل ساعتين",
                active: false,
                unread: 0,
              },
            ].map((c) => (
              <button
                key={c.name}
                className={`w-full flex items-center gap-3 p-4 text-right hover:bg-white/[0.03] transition-colors ${
                  c.active ? "bg-brand-purple/10 border-r-2 border-brand-purple" : ""
                }`}
              >
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarFallback className="text-xs">{c.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white truncate">
                      {c.name}
                    </span>
                    <span className="text-xs text-white/30 shrink-0">{c.time}</span>
                  </div>
                  <p className="text-xs text-white/50 truncate mt-0.5">{c.msg}</p>
                </div>
                {c.unread > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-purple text-[10px] text-white font-bold shrink-0">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Chat view */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="text-xs">أب</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold text-white">أمين بن سعيد</div>
              <div className="text-xs text-emerald-400">● نشط الآن</div>
            </div>
            <Badge variant="success">واتساب</Badge>
          </div>

          <div className="flex-1 p-4 space-y-3 max-h-[500px] overflow-y-auto">
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-tr-none bg-white/10 p-3 text-sm text-white/90">
                مرحبا، عندكم حذاء رياضي مقاس 42؟
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-gradient-to-l from-brand-purple to-brand-purpleDark p-3 text-sm text-white">
                نعم! لدينا 3 موديلات متوفرة مقاس 42. الأسعار بين 4,500 و 7,000
                دج. تبي نبعثلك الصور؟ 👟
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-tr-none bg-white/10 p-3 text-sm text-white/90">
                اشكون الأزرق؟ شفيته في ستوريكم
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-tl-none bg-gradient-to-l from-brand-purple to-brand-purpleDark p-3 text-sm text-white">
                الأزرق متوفر بـ 6,500 دج. راح نبعتلك صورة وتفاصيل التوصيل 📦
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-tr-none bg-white/10 p-3 text-sm text-white/90">
                نعم، سأطلب الحذاء مقاس 42. متى التوصيل؟
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Input placeholder="اكتب ردك..." className="flex-1" />
              <Button size="icon">
                <Zap className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/30 mt-2">
                الوكيل الذكي يرد تلقائياً — يمكنك التدخل في أي وقت
              </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="max-w-3xl space-y-6">
      {/* General */}
      <Card>
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold text-white">الإعدادات العامة</h3>
          <p className="text-xs text-white/40 mt-1">معلومات متجرك الأساسية</p>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              اسم المتجر
            </label>
            <Input defaultValue="متجر النور" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              البريد الإلكتروني
            </label>
            <Input defaultValue="contact@alnoor.dz" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              رقم واتساب
            </label>
            <Input defaultValue="+213 555 12 34 56" />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              اللغة الافتراضية للوكيل
            </label>
            <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/15 px-4 h-11">
              <Languages className="h-4 w-4 text-white/40" />
              <select className="bg-transparent text-sm text-white outline-none flex-1">
                <option className="bg-brand-deep">العربية (الجزائر)</option>
                <option className="bg-brand-deep">Français</option>
                <option className="bg-brand-deep">عربي + فرنسي</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Notifications */}
      <Card>
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Bell className="h-4 w-4 text-brand-purpleLight" />
            الإشعارات
          </h3>
        </div>
        <div className="p-5 space-y-4">
          {[
            { label: "إشعار عند طلب جديد", defaultChecked: true },
            { label: "إشعار عند رسالة لم يرد عليها الوكيل", defaultChecked: true },
            { label: "تقرير يومي بالمبيعات", defaultChecked: false },
            { label: "تنبيه عند اقتراب حد الرسائل", defaultChecked: true },
          ].map((n) => (
            <label
              key={n.label}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-sm text-white/80">{n.label}</span>
              <div className="relative">
                <input
                  type="checkbox"
                  defaultChecked={n.defaultChecked}
                  className="peer sr-only"
                />
                <div className="h-6 w-11 rounded-full bg-white/10 peer-checked:bg-brand-purple transition-colors" />
                <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white transition-transform peer-checked:-translate-x-5" />
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* API & Integrations */}
      <Card>
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Webhook className="h-4 w-4 text-brand-purpleLight" />
            التكاملات و API
          </h3>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              مفتاح API
            </label>
            <div className="flex items-center gap-2">
              <Input
                defaultValue="bdz_live_••••••••••••••••4f2a"
                readOnly
                className="font-mono text-xs"
              />
              <Button variant="secondary" size="icon">
                <KeyRound className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-emerald-400" />
              <div>
                <div className="text-sm font-semibold text-white">واتساب بزنس</div>
                <div className="text-xs text-emerald-400">متصل</div>
              </div>
            </div>
            <Button size="sm" variant="ghost">إدارة</Button>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-brand-purpleLight" />
              <div>
                <div className="text-sm font-semibold text-white">الموقع الإلكتروني</div>
                <div className="text-xs text-emerald-400">alnoor.dz — متصل</div>
              </div>
            </div>
            <Button size="sm" variant="ghost">إدارة</Button>
          </div>
        </div>
      </Card>

      {/* Danger */}
      <Card className="border-red-500/20">
        <div className="p-5 border-b border-white/10">
          <h3 className="font-bold text-red-400">منطقة الخطر</h3>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">حذف الحساب</div>
            <div className="text-xs text-white/40 mt-1">
              سيتم حذف جميع بياناتك نهائياً
            </div>
          </div>
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4" />
            حذف
          </Button>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button>
          <Save className="h-4 w-4" />
          حفظ التغييرات
        </Button>
      </div>
    </div>
  );
}
