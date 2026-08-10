import {
  MessageSquare,
  Send,
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Bot,
  Phone,
  Globe,
  Zap,
  Plus,
  MoreVertical,
  Activity,
  CheckCircle2,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const stats = [
  {
    label: "محادثات نشطة",
    value: "12",
    change: "+3",
    trend: "up",
    icon: MessageSquare,
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    label: "رسائل اليوم",
    value: "1,284",
    change: "+18%",
    trend: "up",
    icon: Send,
    color: "from-brand-purple/20 to-brand-purpleDark/5",
    iconColor: "text-brand-purpleLight",
  },
  {
    label: "العملاء الجدد",
    value: "47",
    change: "+12",
    trend: "up",
    icon: Users,
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    label: "حالة الاشتراك",
    value: "فريق",
    change: "نشط",
    trend: "up",
    icon: CreditCard,
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
  },
];

export const conversations = [
  {
    id: "#1042",
    customer: "أمين بن سعيد",
    initials: "أب",
    channel: "واتساب",
    channelIcon: Phone,
    lastMessage: "نعم، سأطلب الحذاء مقاس 42. متى التوصيل؟",
    status: "نشط",
    statusVariant: "success" as const,
    time: "قبل دقيقتين",
    messages: 8,
  },
  {
    id: "#1041",
    customer: "سارة مرزوق",
    initials: "سم",
    channel: "الموقع",
    channelIcon: Globe,
    lastMessage: "شكراً! تم تأكيد الطلب بنجاح 🎉",
    status: "مكتمل",
    statusVariant: "secondary" as const,
    time: "قبل 8 دقائق",
    messages: 5,
  },
  {
    id: "#1040",
    customer: "يوسف حمدي",
    initials: "يح",
    channel: "واتساب",
    channelIcon: Phone,
    lastMessage: "عندكم تخفيضات على الملابس الشتوية؟",
    status: "انتظار",
    statusVariant: "warning" as const,
    time: "قبل 15 دقيقة",
    messages: 3,
  },
  {
    id: "#1039",
    customer: "ليلى عبد الرحمن",
    initials: "لع",
    channel: "الموقع",
    channelIcon: Globe,
    lastMessage: "أريد إرجاع المنتج، كيف الإجراء؟",
    status: "نشط",
    statusVariant: "success" as const,
    time: "قبل 32 دقيقة",
    messages: 12,
  },
  {
    id: "#1038",
    customer: "كريم زيدان",
    initials: "كز",
    channel: "واتساب",
    channelIcon: Phone,
    lastMessage: "كم سعر التوصيل إلى وهران؟",
    status: "مكتمل",
    statusVariant: "secondary" as const,
    time: "قبل ساعة",
    messages: 4,
  },
  {
    id: "#1037",
    customer: "نور الدين خليفة",
    initials: "نخ",
    channel: "واتساب",
    channelIcon: Phone,
    lastMessage: "تم الدفع عبر Barbidi، أكدوا الطلب",
    status: "مكتمل",
    statusVariant: "secondary" as const,
    time: "قبل ساعتين",
    messages: 7,
  },
];

export const recentOrders = [
  { id: "#ORD-2042", customer: "أمين بن سعيد", total: "6,500 DZD", status: "مؤكد" },
  { id: "#ORD-2041", customer: "سارة مرزوق", total: "3,200 DZD", status: "مؤكد" },
  { id: "#ORD-2040", customer: "يوسف حمدي", total: "12,000 DZD", status: "انتظار" },
  { id: "#ORD-2039", customer: "ليلى عبد الرحمن", total: "1,800 DZD", status: "مؤكد" },
  { id: "#ORD-2038", customer: "كريم زيدان", total: "8,400 DZD", status: "مؤكد" },
];

export function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <Card
      className={cn(
        "animate-fade-in-up hover:border-white/20 transition-colors",
        "bg-gradient-to-br",
        stat.color
      )}
      style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10", stat.iconColor)}>
            <stat.icon className="h-5 w-5" />
          </div>
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-semibold",
              stat.trend === "up" ? "text-emerald-400" : "text-red-400"
            )}
          >
            {stat.trend === "up" ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            {stat.change}
          </div>
        </div>
        <div className="text-2xl font-extrabold text-white">{stat.value}</div>
        <div className="text-sm text-white/50 mt-1">{stat.label}</div>
      </div>
    </Card>
  );
}

export function ConversationsTable() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-white">المحادثات الأخيرة</h3>
          <p className="text-xs text-white/40 mt-0.5">آخر 6 محادثات</p>
        </div>
        <Button size="sm" variant="ghost">
          عرض الكل
          <ArrowLeft className="h-3.5 w-3.5" />
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs text-white/40">
              <th className="text-right p-4 font-medium">العميل</th>
              <th className="text-right p-4 font-medium hidden sm:table-cell">القناة</th>
              <th className="text-right p-4 font-medium hidden md:table-cell">آخر رسالة</th>
              <th className="text-right p-4 font-medium">الحالة</th>
              <th className="text-right p-4 font-medium hidden sm:table-cell">الرسائل</th>
              <th className="text-right p-4 font-medium">الوقت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {conversations.map((c) => (
              <tr key={c.id} className="hover:bg-white/[0.03] transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 shrink-0">
                      <AvatarFallback className="text-xs">{c.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <div className="font-semibold text-white truncate">{c.customer}</div>
                      <div className="text-xs text-white/40">{c.id}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden sm:table-cell">
                  <div className="flex items-center gap-2 text-white/60">
                    <c.channelIcon className="h-4 w-4" />
                    <span className="text-xs">{c.channel}</span>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell max-w-xs">
                  <p className="text-white/60 truncate">{c.lastMessage}</p>
                </td>
                <td className="p-4">
                  <Badge variant={c.statusVariant}>{c.status}</Badge>
                </td>
                <td className="p-4 hidden sm:table-cell">
                  <span className="text-white/50">{c.messages}</span>
                </td>
                <td className="p-4">
                  <span className="text-xs text-white/40">{c.time}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function UsageCard() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">استهلاك الرسائل</h3>
          <Badge variant="default">باقة فريق</Badge>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/60">الرسائل المُستهلكة</span>
              <span className="text-white font-semibold">3,650 / 5,000</span>
            </div>
            <Progress value={73} />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/60">الوكلاء النشطون</span>
              <span className="text-white font-semibold">2 / 3</span>
            </div>
            <Progress value={66} />
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-white/40 mb-1">القناة الأكثر نشاطاً</div>
            <div className="flex items-center gap-2 text-sm text-white font-semibold">
              <Phone className="h-4 w-4 text-emerald-400" />
              واتساب
            </div>
          </div>
          <div>
            <div className="text-xs text-white/40 mb-1">معدل الرد</div>
            <div className="flex items-center gap-2 text-sm text-white font-semibold">
              <Activity className="h-4 w-4 text-brand-purpleLight" />
              98.4%
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function OrdersCard() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.25s", opacity: 0 }}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">الطلبات الأخيرة</h3>
          <Button size="sm" variant="ghost">
            <ArrowLeft className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="space-y-2">
          {recentOrders.map((o) => (
            <div
              key={o.id}
              className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3 hover:bg-white/[0.05] transition-colors"
            >
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white truncate">
                  {o.customer}
                </div>
                <div className="text-xs text-white/40">{o.id}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-sm font-bold text-white">{o.total}</span>
                {o.status === "مؤكد" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Clock className="h-4 w-4 text-amber-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function AgentCard() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark shadow-lg shadow-brand-purple/30">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white">وكيل النور</h3>
              <Badge variant="success">متصل</Badge>
            </div>
            <p className="text-xs text-white/40">يستجيب خلال ~2 ثانية</p>
          </div>
          <button className="text-white/40 hover:text-white">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-lg bg-white/5 p-3 text-center">
            <Phone className="h-4 w-4 text-emerald-400 mx-auto mb-1" />
            <div className="text-xs text-white/50">واتساب</div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">نشط</div>
          </div>
          <div className="rounded-lg bg-white/5 p-3 text-center">
            <Globe className="h-4 w-4 text-brand-purpleLight mx-auto mb-1" />
            <div className="text-xs text-white/50">الموقع</div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">نشط</div>
          </div>
          <div className="rounded-lg bg-white/5 p-3 text-center">
            <Zap className="h-4 w-4 text-amber-400 mx-auto mb-1" />
            <div className="text-xs text-white/50">Voice</div>
            <div className="text-xs font-semibold text-white/30 mt-0.5">معطّل</div>
          </div>
        </div>

        <Button variant="secondary" className="w-full">
          <Plus className="h-4 w-4" />
          إضافة وكيل جديد
        </Button>
      </div>
    </Card>
  );
}
