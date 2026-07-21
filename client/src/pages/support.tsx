import { useDocumentTitle } from "@/hooks/use-document-title";
import { useLanguage } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Language } from "@/lib/i18n";

const CONTACTS = {
  email: "support@qbids.ru",
  phone: "+7 (495) 120-00-00",
  telegram: "@qbids_support",
};

const content = {
  ru: {
    title: "Служба поддержки - QBIDS.RU",
    heading: "Служба поддержки",
    subtitle: "Мы готовы помочь в любое время. Выберите удобный способ связи или найдите ответы в разделе FAQ.",
    methods: [
      {
        icon: "fas fa-envelope",
        title: "Электронная почта",
        description: "Напишите нам для подробной помощи по аккаунту и аукционам",
        contact: CONTACTS.email,
        responseTime: "Ответ в течение 24 часов",
        action: "Написать",
        color: "blue",
      },
      {
        icon: "fab fa-whatsapp",
        title: "WhatsApp",
        description: "Быстрая помощь через WhatsApp",
        contact: CONTACTS.phone,
        responseTime: "В рабочие часы",
        action: "Связаться",
        color: "green",
      },
      {
        icon: "fab fa-telegram",
        title: "Telegram",
        description: "Оперативная поддержка в Telegram",
        contact: CONTACTS.telegram,
        responseTime: "В рабочие часы",
        action: "Связаться",
        color: "blue",
      },
    ],
    faqTitle: "Частые вопросы",
    faqDesc: "Ответы на популярные вопросы о работе QBIDS.RU",
    faq: [
      {
        question: "Как начать участвовать в аукционах?",
        answer: "Зарегистрируйтесь на сайте, пополните баланс бидов и выберите интересующий аукцион. Каждая ставка списывает 1 бид с баланса.",
      },
      {
        question: "Что такое пенни-аукцион?",
        answer: "Это формат аукциона, где цена товара растёт на небольшую сумму с каждой ставкой, а таймер продлевается после каждого бида.",
      },
      {
        question: "Как пополнить баланс бидов?",
        answer: "Откройте раздел «Пополнить баланс» и выберите пакет. Оплата отображается в рублях (₽).",
      },
      {
        question: "Что происходит после победы?",
        answer: "Поздравляем! Служба поддержки свяжется с вами, чтобы организовать доставку или самовывоз выигранного товара.",
      },
      {
        question: "Можно ли вернуть потраченные биды?",
        answer: "Биды, потраченные на аукционе, не возвращаются. Это стандартное правило пенни-аукционов.",
      },
    ],
    hoursTitle: "Часы работы поддержки",
    onlineTitle: "Онлайн-поддержка",
    weekdays: "Понедельник — пятница:",
    saturday: "Суббота:",
    sunday: "Воскресенье:",
    closed: "Выходной",
    emailSupportTitle: "Поддержка по email",
    emailSupportLines: ["Работает 24/7", "Ответ в течение 24 часов", "Все дни недели"],
  },
  en: {
    title: "Support - QBIDS.RU",
    heading: "Customer Support",
    subtitle: "We’re here to help anytime. Choose a contact method or browse the FAQ.",
    methods: [
      {
        icon: "fas fa-envelope",
        title: "Email",
        description: "Write to us for detailed help with your account and auctions",
        contact: CONTACTS.email,
        responseTime: "Reply within 24 hours",
        action: "Contact",
        color: "blue",
      },
      {
        icon: "fab fa-whatsapp",
        title: "WhatsApp",
        description: "Quick help via WhatsApp messenger",
        contact: CONTACTS.phone,
        responseTime: "During business hours",
        action: "Contact",
        color: "green",
      },
      {
        icon: "fab fa-telegram",
        title: "Telegram",
        description: "Fast support via Telegram",
        contact: CONTACTS.telegram,
        responseTime: "During business hours",
        action: "Contact",
        color: "blue",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Answers to popular questions about QBIDS.RU",
    faq: [
      {
        question: "How do I start bidding?",
        answer: "Register, top up your bid balance, and choose an auction. Each bid costs 1 bid from your balance.",
      },
      {
        question: "What is a penny auction?",
        answer: "A format where each bid raises the price by a small amount and extends the countdown timer.",
      },
      {
        question: "How do I top up my balance?",
        answer: "Open Top Up Balance and choose a package. Prices are shown in Russian rubles (₽).",
      },
      {
        question: "What happens if I win?",
        answer: "Congratulations! Support will contact you to arrange delivery or pickup of your item.",
      },
      {
        question: "Can I get spent bids back?",
        answer: "Bids spent during an auction are non-refundable. This is standard for penny auctions.",
      },
    ],
    hoursTitle: "Support Hours",
    onlineTitle: "Online support",
    weekdays: "Monday — Friday:",
    saturday: "Saturday:",
    sunday: "Sunday:",
    closed: "Closed",
    emailSupportTitle: "Email support",
    emailSupportLines: ["Available 24/7", "Reply within 24 hours", "Every day of the week"],
  },
  ka: {
    title: "მხარდაჭერა - QBIDS.RU",
    heading: "მხარდაჭერის სამსახური",
    subtitle: "მზად ვართ დაგეხმაროთ ნებისმიერ დროს. აირჩიეთ საკონტაქტო საშუალება ან იხილეთ FAQ.",
    methods: [
      {
        icon: "fas fa-envelope",
        title: "ელექტრონული ფოსტა",
        description: "მოგვწერეთ ანგარიშისა და აუქციონების შესახებ დეტალური დახმარებისთვის",
        contact: CONTACTS.email,
        responseTime: "პასუხი 24 საათში",
        action: "დაკავშირება",
        color: "blue",
      },
      {
        icon: "fab fa-whatsapp",
        title: "WhatsApp",
        description: "სწრაფი დახმარება WhatsApp-ით",
        contact: CONTACTS.phone,
        responseTime: "სამუშაო საათებში",
        action: "დაკავშირება",
        color: "green",
      },
      {
        icon: "fab fa-telegram",
        title: "Telegram",
        description: "ოპერატიული მხარდაჭერა Telegram-ში",
        contact: CONTACTS.telegram,
        responseTime: "სამუშაო საათებში",
        action: "დაკავშირება",
        color: "blue",
      },
    ],
    faqTitle: "ხშირად დასმული კითხვები",
    faqDesc: "პასუხები პოპულარულ კითხვებზე QBIDS.RU-ს შესახებ",
    faq: [
      {
        question: "როგორ დავიწყო აუქციონებში მონაწილეობა?",
        answer: "დარეგისტრირდით, შეავსეთ ბიდების ბალანსი და აირჩიეთ აუქციონი. ყოველი ფსონი = 1 ბიდი.",
      },
      {
        question: "რა არის პენი-აუქციონი?",
        answer: "აუქციონის ფორმატი, სადაც ყოველი ფსონი ზრდის ფასს მცირედ და აგრძელებს ტაიმერს.",
      },
      {
        question: "როგორ შევავსო ბალანსი?",
        answer: "გადადით «ბალანსის შევსებაზე» და აირჩიეთ პაკეტი. ფასები რუბლებშია (₽).",
      },
      {
        question: "რა ხდება გამარჯვების შემდეგ?",
        answer: "მხარდაჭერა დაგიკავშირდებათ მიწოდების ან თვითგატანის ორგანიზებისთვის.",
      },
      {
        question: "შეიძლება თუ არა დახარჯული ბიდების დაბრუნება?",
        answer: "აუქციონზე დახარჯული ბიდები არ ბრუნდება — ეს პენი-აუქციონის სტანდარტული წესია.",
      },
    ],
    hoursTitle: "მხარდაჭერის სამუშაო საათები",
    onlineTitle: "ონლაინ მხარდაჭერა",
    weekdays: "ორშაბათი - პარასკევი:",
    saturday: "შაბათი:",
    sunday: "კვირა:",
    closed: "დასვენება",
    emailSupportTitle: "ელ-ფოსტის მხარდაჭერა",
    emailSupportLines: ["მუშაობს 24/7", "პასუხი 24 საათში", "კვირის ყველა დღე"],
  },
} as const;

export default function Support() {
  const { language } = useLanguage();
  const lang = (["ru", "en", "ka"].includes(language) ? language : "ru") as Language;
  const c = content[lang];

  useDocumentTitle(c.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1504px] mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-headset text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{c.heading}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {c.methods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-support-${index}`}>
              <CardHeader>
                <div className={`w-16 h-16 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${method.icon} text-${method.color}-600 text-2xl`}></i>
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900" data-testid={`text-contact-${index}`}>{method.contact}</p>
                  <p className="text-sm text-gray-600">{method.responseTime}</p>
                  <Button className="w-full mt-4" variant="outline" data-testid={`button-contact-${index}`}>
                    {method.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <i className="fas fa-question-circle text-blue-600 mr-3"></i>
              {c.faqTitle}
            </CardTitle>
            <CardDescription>{c.faqDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {c.faq.map((item, index) => (
                <div key={index} data-testid={`faq-item-${index}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  {index < c.faq.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-clock text-blue-600 mr-3"></i>
              {c.hoursTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{c.onlineTitle}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{c.weekdays}</span>
                    <span className="font-medium">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{c.saturday}</span>
                    <span className="font-medium">10:00 — 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{c.sunday}</span>
                    <span className="font-medium">{c.closed}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{c.emailSupportTitle}</h3>
                <div className="space-y-2 text-gray-600">
                  {c.emailSupportLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
