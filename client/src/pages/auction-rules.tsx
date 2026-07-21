import { useDocumentTitle } from "@/hooks/use-document-title";
import { useLanguage } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/lib/i18n";

const content = {
  ru: {
    title: "Правила аукциона - QBIDS.RU",
    heading: "Правила аукциона",
    subtitle: "Ознакомьтесь с правилами пенни-аукционов и условиями участия",
    sections: [
      {
        icon: "fas fa-play-circle",
        title: "Как начать участвовать",
        color: "green",
        rules: [
          "Зарегистрируйтесь на QBIDS.RU",
          "Пополните баланс бидов удобным способом оплаты",
          "Выберите интересующий аукцион",
          "Дождитесь старта и делайте ставки",
        ],
      },
      {
        icon: "fas fa-gavel",
        title: "Правила ставок",
        color: "blue",
        rules: [
          "Каждая ставка списывает 1 бид с вашего баланса",
          "Ставка повышает цену товара на 0,01 ₽",
          "Таймер продлевается на 10–15 секунд после каждой ставки",
          "Отменить ставку после размещения нельзя",
          "Минимальный интервал между ставками одного пользователя — 1 секунда",
        ],
      },
      {
        icon: "fas fa-trophy",
        title: "Определение победителя",
        color: "yellow",
        rules: [
          "Побеждает пользователь, сделавший последнюю ставку",
          "Аукцион завершается, когда таймер достигает 0",
          "Победитель оплачивает итоговую цену товара",
          "Товар резервируется за победителем на 48 часов",
          "При отказе от покупки товар может перейти предыдущему участнику",
        ],
      },
      {
        icon: "fas fa-coins",
        title: "Биды и оплата",
        color: "orange",
        rules: [
          "Биды списываются сразу при размещении ставки",
          "Потраченные биды не возвращаются независимо от результата",
          "Минимальная покупка — пакет от 50 бидов",
          "Биды действуют 365 дней с момента покупки",
          "Неиспользованные биды денежному возврату не подлежат",
        ],
      },
    ],
    prohibitedTitle: "Запрещённые действия",
    prohibitedDesc: "Нарушение этих правил ведёт к блокировке аккаунта без возврата средств",
    prohibited: [
      "Использование ботов и автоматических программ",
      "Создание нескольких аккаунтов одним пользователем",
      "Попытки взлома или нарушения работы сайта",
      "Оскорбительное поведение к другим участникам",
      "Мошенничество или обман системы",
      "Продажа или передача аккаунта третьим лицам",
    ],
    deliveryTitle: "Правила доставки",
    deliveryDesc: "Условия получения выигранных товаров",
    delivery: [
      { title: "Самовывоз", description: "Бесплатно из пункта выдачи в Москве", time: "Будни 9:00–18:00" },
      { title: "Доставка по Москве", description: "Курьерская доставка", time: "от 300 ₽, 1–2 рабочих дня" },
      { title: "Доставка по России", description: "СДЭК, Почта России и другие службы", time: "от 400 ₽, 2–7 рабочих дней" },
    ],
    notesTitle: "Важные замечания",
    notes: [
      {
        tone: "yellow",
        title: "Ответственность участника",
        text: "Участвуя в аукционах, вы подтверждаете, что понимаете принцип пенни-аукционов и принимаете возможные риски.",
      },
      {
        tone: "blue",
        title: "Техническая поддержка",
        text: "При технических сбоях во время аукциона сразу обратитесь в поддержку. Компенсация возможна только при подтверждённых технических проблемах.",
      },
      {
        tone: "green",
        title: "Честная игра",
        text: "QBIDS.RU стремится обеспечить честные и прозрачные аукционы для всех участников и контролирует систему от мошенничества.",
      },
    ],
  },
  en: {
    title: "Auction Rules - QBIDS.RU",
    heading: "Auction Rules",
    subtitle: "Learn the penny auction rules and participation terms",
    sections: [
      {
        icon: "fas fa-play-circle",
        title: "How to start",
        color: "green",
        rules: [
          "Register on QBIDS.RU",
          "Top up your bid balance",
          "Choose an auction",
          "Wait for the start and place bids",
        ],
      },
      {
        icon: "fas fa-gavel",
        title: "Bidding rules",
        color: "blue",
        rules: [
          "Each bid costs 1 bid from your balance",
          "Each bid raises the price by ₽0.01",
          "The timer extends by 10–15 seconds after each bid",
          "Bids cannot be cancelled after placement",
          "Minimum interval between one user’s bids is 1 second",
        ],
      },
      {
        icon: "fas fa-trophy",
        title: "Determining the winner",
        color: "yellow",
        rules: [
          "The last bidder wins",
          "The auction ends when the timer reaches 0",
          "The winner pays the final item price",
          "The item is reserved for 48 hours",
          "If the winner refuses, the item may go to the previous bidder",
        ],
      },
      {
        icon: "fas fa-coins",
        title: "Bids and payments",
        color: "orange",
        rules: [
          "Bids are deducted immediately when placed",
          "Spent bids are non-refundable",
          "Minimum purchase starts from 50-bid packs",
          "Bids are valid for 365 days from purchase",
          "Unused bids are not redeemable for cash",
        ],
      },
    ],
    prohibitedTitle: "Prohibited actions",
    prohibitedDesc: "Violations lead to account blocking without refunds",
    prohibited: [
      "Using bots or automation tools",
      "Creating multiple accounts",
      "Attempts to hack or disrupt the site",
      "Abusive behavior toward others",
      "Fraud or system abuse",
      "Selling or transferring accounts",
    ],
    deliveryTitle: "Delivery rules",
    deliveryDesc: "How winners receive their items",
    delivery: [
      { title: "Pickup", description: "Free from a Moscow pickup point", time: "Weekdays 9:00–18:00" },
      { title: "Moscow delivery", description: "Courier delivery", time: "from ₽300, 1–2 business days" },
      { title: "Russia-wide", description: "CDEK, Russian Post and other carriers", time: "from ₽400, 2–7 business days" },
    ],
    notesTitle: "Important notes",
    notes: [
      {
        tone: "yellow",
        title: "Participant responsibility",
        text: "By joining auctions you confirm you understand penny auctions and accept related risks.",
      },
      {
        tone: "blue",
        title: "Technical support",
        text: "Contact support immediately if technical issues occur during an auction. Compensation applies only to confirmed technical problems.",
      },
      {
        tone: "green",
        title: "Fair play",
        text: "QBIDS.RU aims for fair, transparent auctions and monitors the system against fraud.",
      },
    ],
  },
  ka: {
    title: "აუქციონის წესები - QBIDS.RU",
    heading: "აუქციონის წესები",
    subtitle: "გაეცანით პენი-აუქციონების წესებს და მონაწილეობის პირობებს",
    sections: [
      {
        icon: "fas fa-play-circle",
        title: "როგორ დავიწყოთ მონაწილეობა",
        color: "green",
        rules: [
          "დარეგისტრირდით QBIDS.RU-ზე",
          "შეავსეთ ბიდების ბალანსი",
          "აირჩიეთ სასურველი აუქციონი",
          "დაელოდეთ დაწყებას და დაიწყეთ ფსონები",
        ],
      },
      {
        icon: "fas fa-gavel",
        title: "ფსონების წესები",
        color: "blue",
        rules: [
          "თითოეული ფსონი = 1 ბიდი ბალანსიდან",
          "ფსონი ზრდის ფასს 0,01 ₽-ით",
          "ტაიმერი გრძელდება 10–15 წამით ყოველი ფსონის შემდეგ",
          "ფსონის გაუქმება შეუძლებელია",
          "მინიმალური ინტერვალი ერთი მომხმარებლის ფსონებს შორის — 1 წამი",
        ],
      },
      {
        icon: "fas fa-trophy",
        title: "გამარჯვებულის განსაზღვრა",
        color: "yellow",
        rules: [
          "იმარჯვებს ბოლო ფსონის ავტორი",
          "აუქციონი სრულდება ტაიმერის 0-ზე",
          "გამარჯვებული იხდის საბოლოო ფასს",
          "პროდუქტი რეზერვირებულია 48 საათით",
          "უარის შემთხვევაში შეიძლება გადავიდეს წინა მონაწილეზე",
        ],
      },
      {
        icon: "fas fa-coins",
        title: "ბიდები და გადახდა",
        color: "orange",
        rules: [
          "ბიდები იჭრება ფსონისთანავე",
          "დახარჯული ბიდები არ ბრუნდება",
          "მინიმალური პაკეტი — 50 ბიდიდან",
          "ბიდები მოქმედებს 365 დღე",
          "გამოუყენებელი ბიდები ფულად არ ანაზღაურდება",
        ],
      },
    ],
    prohibitedTitle: "აკრძალული ქმედებები",
    prohibitedDesc: "წესების დარღვევა იწვევს ანგარიშის დაბლოკვას თანხის დაბრუნების გარეშე",
    prohibited: [
      "ბოტებისა და ავტომატური პროგრამების გამოყენება",
      "მრავალი ანგარიშის შექმნა",
      "საიტის გატეხვის მცდელობები",
      "შეურაცხმყოფელი ქცევა",
      "თაღლითობა",
      "ანგარიშის გაყიდვა/გადაცემა",
    ],
    deliveryTitle: "მიწოდების წესები",
    deliveryDesc: "მოგებული პროდუქტების მიღების პირობები",
    delivery: [
      { title: "თვითგატანა", description: "უფასოდ მოსკოვის პუნქტიდან", time: "სამუშაო დღეები 9:00–18:00" },
      { title: "მიწოდება მოსკოვში", description: "კურიერი", time: "300 ₽-დან, 1–2 სამუშაო დღე" },
      { title: "მიწოდება რუსეთში", description: "CDEK, Почта России და სხვა", time: "400 ₽-დან, 2–7 სამუშაო დღე" },
    ],
    notesTitle: "მნიშვნელოვანი შენიშვნები",
    notes: [
      {
        tone: "yellow",
        title: "მონაწილის პასუხისმგებლობა",
        text: "აუქციონებში მონაწილეობით ადასტურებთ, რომ გესმით პენი-აუქციონების პრინციპი და იღებთ რისკებს.",
      },
      {
        tone: "blue",
        title: "ტექნიკური მხარდაჭერა",
        text: "ტექნიკური პრობლემისას დაუყოვნებლივ დაუკავშირდით მხარდაჭერას. კომპენსაცია მხოლოდ დადასტურებული პრობლემებისას.",
      },
      {
        tone: "green",
        title: "სამართლიანი თამაში",
        text: "QBIDS.RU უზრუნველყოფს სამართლიან და გამჭვირვალე აუქციონებს და აკონტროლებს თაღლითობას.",
      },
    ],
  },
} as const;

const noteStyles = {
  yellow: { box: "bg-yellow-50 border-yellow-200", title: "text-yellow-800", text: "text-yellow-700" },
  blue: { box: "bg-blue-50 border-blue-200", title: "text-blue-800", text: "text-blue-700" },
  green: { box: "bg-green-50 border-green-200", title: "text-green-800", text: "text-green-700" },
} as const;

export default function AuctionRules() {
  const { language } = useLanguage();
  const lang = (["ru", "en", "ka"].includes(language) ? language : "ru") as Language;
  const c = content[lang];

  useDocumentTitle(c.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1504px] mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-balance-scale text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-rules">{c.heading}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {c.sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow" data-testid={`card-rules-${index}`}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className={`w-12 h-12 bg-${section.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${section.icon} text-${section.color}-600 text-xl`}></i>
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start" data-testid={`rule-${index}-${ruleIndex}`}>
                      <i className="fas fa-check-circle text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <i className="fas fa-ban mr-3"></i>
              {c.prohibitedTitle}
            </CardTitle>
            <CardDescription>{c.prohibitedDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.prohibited.map((action, index) => (
                <div key={index} className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100" data-testid={`prohibited-${index}`}>
                  <i className="fas fa-times-circle text-red-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-red-700">{action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-shipping-fast text-blue-600 mr-3"></i>
              {c.deliveryTitle}
            </CardTitle>
            <CardDescription>{c.deliveryDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.delivery.map((delivery, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow" data-testid={`delivery-${index}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">{delivery.title}</h3>
                  <p className="text-gray-600 mb-2">{delivery.description}</p>
                  <Badge variant="outline" className="text-sm">{delivery.time}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-exclamation-triangle text-yellow-600 mr-3"></i>
              {c.notesTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {c.notes.map((note, index) => {
                const styles = noteStyles[note.tone];
                return (
                  <div key={index} className={`p-4 border rounded-lg ${styles.box}`} data-testid={`note-${index}`}>
                    <h3 className={`font-semibold mb-2 ${styles.title}`}>{note.title}</h3>
                    <p className={styles.text}>{note.text}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
