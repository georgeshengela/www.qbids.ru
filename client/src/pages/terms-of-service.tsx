import { useDocumentTitle } from "@/hooks/use-document-title";
import { useLanguage } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Language } from "@/lib/i18n";

const CONTACTS = {
  email: "legal@qbids.ru",
  phone: "+7 (495) 120-00-00",
  locationRu: "Москва, Россия",
  locationEn: "Moscow, Russia",
  locationKa: "მოსკოვი, რუსეთი",
};

const content = {
  ru: {
    title: "Условия использования - QBIDS.RU",
    heading: "Условия использования",
    subtitle: "Пользовательское соглашение определяет правила использования платформы QBIDS.RU.",
    effective: "Вступило в силу: 01.01.2025",
    updated: "Последнее обновление: 21.07.2026",
    sections: [
      {
        title: "1. Что такое пенни-аукцион",
        content: [
          "Пенни-аукцион — онлайн-формат, где участники делают ставки за небольшую плату (бид), а каждая ставка повышает цену товара на небольшую сумму (как правило, на 0,01 ₽).",
          "Победителем становится пользователь, сделавший последнюю ставку до окончания таймера.",
          "Пользователи не могут создавать собственные аукционы. Товары размещает только оператор сайта.",
          "Настоящие условия регулируют отношения между оператором QBIDS.RU и пользователем сервиса.",
        ],
      },
      {
        title: "2. Общие условия",
        content: [
          "Использование сайта означает согласие с условиями. При несогласии прекратите использование сервиса.",
          "Оператор вправе изменять условия. Изменения публикуются на сайте и вступают в силу с момента публикации, если не указано иное.",
          "QBIDS.RU — платформа пенни-аукционов в России, обеспечивающая прозрачные аукционы.",
          "Сервис позволяет участвовать в аукционах, делать ставки и приобретать товары на выгодных условиях.",
        ],
      },
      {
        title: "3. Права пользователя",
        content: [
          "Право на достоверную информацию о товарах, условиях аукциона и ценах.",
          "Товары соответствуют описанию, основанному на данных поставщиков.",
          "При несоответствии описания пользователь может обратиться в поддержку для обмена или компенсации бидов на баланс.",
          "Товары и услуги должны соответствовать описанию и требованиям законодательства Российской Федерации.",
        ],
      },
      {
        title: "4. Безопасность и участие",
        content: [
          "Товары не должны создавать угрозу жизни, здоровью или имуществу.",
          "Пользователь может свободно участвовать в аукционах при соблюдении правил сайта и законов РФ.",
          "Персональные данные защищаются в соответствии с 152-ФЗ «О персональных данных».",
          "Пользователь вправе требовать удаления, изменения и реализации иных прав на свои данные.",
        ],
      },
      {
        title: "5. Условия доставки",
        content: [
          "По Москве возможна курьерская доставка или самовывоз из пункта выдачи.",
          "По России доставка осуществляется службами вроде СДЭК и Почты России по действующим тарифам.",
          "Если курьер не смог доставить товар по вине платформы, ответственность несёт платформа.",
          "При нарушении прав пользователь может обратиться в поддержку или уполномоченные органы РФ.",
        ],
      },
      {
        title: "6. Ответственность и спецусловия",
        content: [
          "Пользователь обязан использовать только законные платёжные средства.",
          "Оператор не отвечает за оплату украденными или несанкционированными средствами.",
          "Пользователь сам отвечает за легитимность используемого способа оплаты.",
          "Оператор вправе приостановить услугу при обоснованном подозрении в незаконных действиях.",
        ],
      },
    ],
    prohibitionsTitle: "Запрещённые действия",
    prohibitionsDesc: "Следующие действия строго запрещены и могут привести к блокировке аккаунта",
    prohibitions: [
      "Использование ботов и скриптов",
      "Попытки взлома или нарушения работы сайта",
      "Размещение вредоносного контента",
      "Мошенничество и обман других пользователей",
      "Нарушение авторских прав третьих лиц",
      "Распространение спама и рекламы",
      "Оскорбительное поведение",
      "Обход технических ограничений сайта",
    ],
    liabilityTitle: "Ответственность и гарантии",
    liabilityDesc: "Важная информация об ограничении ответственности",
    liability: [
      { title: "Ограничение ответственности", description: "QBIDS.RU не отвечает за косвенные убытки, упущенную выгоду или моральный вред." },
      { title: "Качество товаров", description: "Администрация стремится давать точную информацию, но не гарантирует полное отсутствие ошибок." },
      { title: "Технические сбои", description: "При технических проблемах администрация принимает меры для их скорейшего устранения." },
      { title: "Действия пользователей", description: "Каждый пользователь лично отвечает за свои действия на платформе." },
    ],
    disputesTitle: "Разрешение споров",
    disputes: [
      { tone: "blue", title: "Досудебное урегулирование", text: "Споры сначала рассматриваются путём переговоров. Обращайтесь в службу поддержки." },
      { tone: "orange", title: "Применимое право", text: "Настоящие условия регулируются законодательством Российской Федерации. Споры рассматриваются судами РФ." },
      { tone: "green", title: "Сроки обращения", text: "Претензии направляются в течение 30 дней с момента возникновения спорной ситуации." },
    ],
    contactTitle: "Контактная информация",
    changesTitle: "Изменение условий",
    changes: [
      "Администрация вправе изменять условия в любое время.",
      "Изменения вступают в силу с момента публикации на сайте.",
      "Продолжение использования сервиса означает согласие с новыми условиями.",
    ],
    version: "Версия 1.0",
    location: CONTACTS.locationRu,
  },
  en: {
    title: "Terms of Service - QBIDS.RU",
    heading: "Terms of Service",
    subtitle: "This agreement defines the rules for using the QBIDS.RU platform.",
    effective: "Effective: 01.01.2025",
    updated: "Last updated: 21.07.2026",
    sections: [
      {
        title: "1. What is a penny auction",
        content: [
          "A penny auction is an online format where participants place bids for a small fee, and each bid raises the item price by a small amount (usually ₽0.01).",
          "The winner is the user who places the last bid before the timer ends.",
          "Users cannot create their own auctions. Only the site operator lists items.",
          "These terms govern the relationship between the QBIDS.RU operator and the user.",
        ],
      },
      {
        title: "2. General terms",
        content: [
          "Using the site means you accept these terms. If you disagree, stop using the service.",
          "The operator may change the terms. Changes are published on the site and take effect upon publication unless otherwise stated.",
          "QBIDS.RU is a penny-auction platform in Russia providing transparent auctions.",
          "The service lets users join auctions, place bids, and buy items on favorable terms.",
        ],
      },
      {
        title: "3. User rights",
        content: [
          "Right to accurate information about products, auction terms, and prices.",
          "Products match descriptions based on supplier data.",
          "If a description is inaccurate, contact support for an exchange or bid credit.",
          "Products and services must comply with Russian Federation requirements.",
        ],
      },
      {
        title: "4. Safety and participation",
        content: [
          "Products must not endanger life, health, or property.",
          "Users may freely participate if they follow site rules and RF laws.",
          "Personal data is protected under Federal Law No. 152-FZ.",
          "Users may request deletion, correction, and other data rights.",
        ],
      },
      {
        title: "5. Delivery terms",
        content: [
          "In Moscow, courier delivery or pickup is available.",
          "Across Russia, delivery is via carriers such as CDEK and Russian Post.",
          "If delivery fails due to the platform, the platform bears responsibility.",
          "Users may contact support or RF authorities if their rights are violated.",
        ],
      },
      {
        title: "6. Liability and special terms",
        content: [
          "Users must use only lawful payment methods.",
          "The operator is not liable for payments made with stolen or unauthorized instruments.",
          "Users are responsible for the legitimacy of their payment method.",
          "The operator may suspend service if illegal activity is reasonably suspected.",
        ],
      },
    ],
    prohibitionsTitle: "Prohibited actions",
    prohibitionsDesc: "The following actions are strictly prohibited and may lead to account blocking",
    prohibitions: [
      "Using bots and scripts",
      "Attempts to hack or disrupt the site",
      "Posting harmful content",
      "Fraud and deceiving other users",
      "Infringing third-party copyrights",
      "Spam and unauthorized advertising",
      "Abusive behavior",
      "Bypassing technical restrictions",
    ],
    liabilityTitle: "Liability and warranties",
    liabilityDesc: "Important information about liability limitations",
    liability: [
      { title: "Limitation of liability", description: "QBIDS.RU is not liable for indirect damages, lost profits, or moral harm." },
      { title: "Product quality", description: "We strive for accurate product information but do not guarantee zero errors." },
      { title: "Technical outages", description: "We take steps to resolve technical issues as quickly as possible." },
      { title: "User actions", description: "Each user is personally responsible for their actions on the platform." },
    ],
    disputesTitle: "Dispute resolution",
    disputes: [
      { tone: "blue", title: "Pre-trial settlement", text: "Disputes are first handled by negotiation. Contact support." },
      { tone: "orange", title: "Governing law", text: "These terms are governed by the laws of the Russian Federation. Disputes are heard in RF courts." },
      { tone: "green", title: "Claim deadlines", text: "Claims must be submitted within 30 days of the disputed situation." },
    ],
    contactTitle: "Contact information",
    changesTitle: "Changes to the terms",
    changes: [
      "The administration may change the terms at any time.",
      "Changes take effect when published on the site.",
      "Continued use of the service means acceptance of the new terms.",
    ],
    version: "Version 1.0",
    location: CONTACTS.locationEn,
  },
  ka: {
    title: "მომსახურების პირობები - QBIDS.RU",
    heading: "მომსახურების პირობები",
    subtitle: "მომხმარებლის შეთანხმება განსაზღვრავს QBIDS.RU პლატფორმის გამოყენების წესებს.",
    effective: "ძალაშია: 01.01.2025",
    updated: "ბოლო განახლება: 21.07.2026",
    sections: [
      {
        title: "1. რა არის პენი-აუქციონი",
        content: [
          "პენი-აუქციონი არის ონლაინ ფორმატი, სადაც მონაწილეები დებენ ფსონს მცირე საფასურით, ხოლო ყოველი ფსონი ზრდის ფასს მცირედ (როგორც წესი 0,01 ₽).",
          "გამარჯვებულია მომხმარებელი, რომელმაც ბოლო ფსონი დადო ტაიმერის დასრულებამდე.",
          "მომხმარებლებს არ შეუძლიათ საკუთარი აუქციონების შექმნა — ნივთებს ათავსებს მხოლოდ ოპერატორი.",
          "ეს პირობები არეგულირებს ურთიერთობას QBIDS.RU ოპერატორსა და მომხმარებელს შორის.",
        ],
      },
      {
        title: "2. ზოგადი პირობები",
        content: [
          "საიტის გამოყენება ნიშნავს პირობებზე თანხმობას. არაკომპლიანტობისას შეწყვიტეთ გამოყენება.",
          "ოპერატორს შეუძლია შეცვალოს პირობები. ცვლილებები ქვეყნდება საიტზე.",
          "QBIDS.RU არის პენი-აუქციონების პლატფორმა რუსეთში.",
          "სერვისი საშუალებას იძლევა მონაწილეობა მიიღოთ აუქციონებში და შეიძინოთ პროდუქტები ხელსაყრელ პირობებში.",
        ],
      },
      {
        title: "3. მომხმარებლის უფლებები",
        content: [
          "სანდო ინფორმაციის მიღების უფლება პროდუქტებსა და პირობებზე.",
          "პროდუქტები შეესაბამება აღწერას მომწოდებლის მონაცემების მიხედვით.",
          "შეუსაბამობისას მიმართეთ მხარდაჭერას გაცვლის ან ბიდების კომპენსაციისთვის.",
          "პროდუქტები უნდა შეესაბამებოდეს რუსეთის ფედერაციის მოთხოვნებს.",
        ],
      },
      {
        title: "4. უსაფრთხოება და მონაწილეობა",
        content: [
          "პროდუქტი არ უნდა საფრთხობდეს სიცოცხლეს, ჯანმრთელობას ან ქონებას.",
          "მონაწილეობა თავისუფალია საიტის წესებისა და რუსეთის კანონების დაცვით.",
          "პირადი მონაცემები დაცულია 152-ФЗ-ის შესაბამისად.",
          "გაქვთ უფლება მოითხოვოთ მონაცემების წაშლა/შეცვლა.",
        ],
      },
      {
        title: "5. მიწოდების პირობები",
        content: [
          "მოსკოვში შესაძლებელია კურიერი ან თვითგატანა.",
          "რუსეთში მიწოდება ხდება CDEK, Почта России და სხვა სამსახურებით.",
          "პლატფორმის ბრალით მიწოდების ჩავარდნისას პასუხისმგებელია პლატფორმა.",
          "უფლებების დარღვევისას მიმართეთ მხარდაჭერას ან უფლებამოსილ ორგანოებს.",
        ],
      },
      {
        title: "6. პასუხისმგებლობა",
        content: [
          "გამოიყენეთ მხოლოდ კანონიერი გადახდის საშუალებები.",
          "ოპერატორი არ აგებს პასუხს არასანქცირებული გადახდისას.",
          "მომხმარებელი პასუხისმგებელია გადახდის ლეგიტიმურობაზე.",
          "ოპერატორს შეუძლია შეწყვიტოს მომსახურება უკანონო ქმედების ეჭვისას.",
        ],
      },
    ],
    prohibitionsTitle: "აკრძალული ქმედებები",
    prohibitionsDesc: "შემდეგი ქმედებები აკრძალულია და შეიძლება გამოიწვიოს ანგარიშის დაბლოკვა",
    prohibitions: [
      "ბოტებისა და სკრიპტების გამოყენება",
      "საიტის გატეხვის მცდელობები",
      "მავნე კონტენტი",
      "თაღლითობა",
      "საავტორო უფლებების დარღვევა",
      "სპამი და რეკლამა",
      "შეურაცხმყოფელი ქცევა",
      "ტექნიკური შეზღუდვების გვერდის ავლა",
    ],
    liabilityTitle: "პასუხისმგებლობა და გარანტიები",
    liabilityDesc: "მნიშვნელოვანი ინფორმაცია პასუხისმგებლობის შეზღუდვებზე",
    liability: [
      { title: "პასუხისმგებლობის შეზღუდვა", description: "QBIDS.RU არ აგებს პასუხს არაპირდაპირ ზარალზე ან მორალურ ზიანზე." },
      { title: "პროდუქტების ხარისხი", description: "ვცდილობთ ზუსტ ინფორმაციას, მაგრამ არ ვიძლევით შეცდომების არარსებობის გარანტიას." },
      { title: "ტექნიკური შეფერხებები", description: "ტექნიკური პრობლემებისას ვიღებთ ზომებს სწრაფი აღმოფხვრისთვის." },
      { title: "მომხმარებელთა ქმედებები", description: "თითოეული მომხმარებელი პირადად პასუხისმგებელია თავის ქმედებებზე." },
    ],
    disputesTitle: "დავების გადაწყვეტა",
    disputes: [
      { tone: "blue", title: "სასამართლომდელი მოგვარება", text: "დავები ჯერ მოლაპარაკებით განიხილება. მიმართეთ მხარდაჭერას." },
      { tone: "orange", title: "გამოსაყენებელი სამართალი", text: "პირობები რეგულირდება რუსეთის ფედერაციის კანონმდებლობით." },
      { tone: "green", title: "მიმართვის ვადები", text: "პრეტენზიები იგზავნება 30 დღის განმავლობაში." },
    ],
    contactTitle: "საკონტაქტო ინფორმაცია",
    changesTitle: "პირობების ცვლილებები",
    changes: [
      "ადმინისტრაციას შეუძლია შეცვალოს პირობები ნებისმიერ დროს.",
      "ცვლილებები ძალაშია გამოქვეყნებისთანავე.",
      "სერვისის გამოყენების გაგრძელება ნიშნავს თანხმობას.",
    ],
    version: "ვერსია 1.0",
    location: CONTACTS.locationKa,
  },
} as const;

const toneStyles = {
  blue: { box: "bg-blue-50 border-blue-200", title: "text-blue-800", text: "text-blue-700" },
  orange: { box: "bg-orange-50 border-orange-200", title: "text-orange-800", text: "text-orange-700" },
  green: { box: "bg-green-50 border-green-200", title: "text-green-800", text: "text-green-700" },
} as const;

export default function TermsOfService() {
  const { language } = useLanguage();
  const lang = (["ru", "en", "ka"].includes(language) ? language : "ru") as Language;
  const c = content[lang];

  useDocumentTitle(c.title, c.subtitle);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1504px] mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-file-contract text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-terms">{c.heading}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.subtitle}</p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>{c.effective}</span>
            <Separator orientation="vertical" className="h-4" />
            <span>{c.updated}</span>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {c.sections.map((section, index) => (
            <Card key={index} data-testid={`section-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <i className="fas fa-exclamation-triangle mr-3"></i>
              {c.prohibitionsTitle}
            </CardTitle>
            <CardDescription>{c.prohibitionsDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {c.prohibitions.map((prohibition, index) => (
                <div key={index} className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100" data-testid={`prohibition-${index}`}>
                  <i className="fas fa-times-circle text-red-500 mr-3 mt-1 flex-shrink-0"></i>
                  <span className="text-red-700 text-sm">{prohibition}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-balance-scale text-blue-600 mr-3"></i>
              {c.liabilityTitle}
            </CardTitle>
            <CardDescription>{c.liabilityDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {c.liability.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow" data-testid={`liability-${index}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-handshake text-green-600 mr-3"></i>
              {c.disputesTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {c.disputes.map((item, index) => {
                const styles = toneStyles[item.tone];
                return (
                  <div key={index} className={`p-4 border rounded-lg ${styles.box}`}>
                    <h3 className={`font-semibold mb-2 ${styles.title}`}>{item.title}</h3>
                    <p className={`text-sm ${styles.text}`}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <i className="fas fa-envelope text-blue-600 mr-3"></i>
                {c.contactTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600" data-testid="contact-email">
                  <i className="fas fa-envelope w-5 mr-3"></i>
                  <span>{CONTACTS.email}</span>
                </div>
                <div className="flex items-center text-gray-600" data-testid="contact-phone">
                  <i className="fas fa-phone w-5 mr-3"></i>
                  <span>{CONTACTS.phone}</span>
                </div>
                <div className="flex items-center text-gray-600" data-testid="contact-location">
                  <i className="fas fa-map-marker-alt w-5 mr-3"></i>
                  <span>{c.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <i className="fas fa-edit text-purple-600 mr-3"></i>
                {c.changesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                {c.changes.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <Badge variant="outline" className="mt-2">{c.version}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
