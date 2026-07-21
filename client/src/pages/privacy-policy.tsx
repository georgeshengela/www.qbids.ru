import { useDocumentTitle } from "@/hooks/use-document-title";
import { useLanguage } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Language } from "@/lib/i18n";

const CONTACTS = {
  email: "info@qbids.ru",
  privacy: "privacy@qbids.ru",
  phone: "+7 (495) 120-00-00",
  locationRu: "Москва, Россия",
  locationEn: "Moscow, Russia",
  locationKa: "მოსკოვი, რუსეთი",
};

const content = {
  ru: {
    title: "Политика конфиденциальности - QBIDS.RU",
    heading: "Политика конфиденциальности",
    subtitle:
      "Политика определяет правила сбора, обработки и защиты персональных данных пользователей QBIDS.RU в соответствии с законодательством Российской Федерации (в т.ч. 152-ФЗ).",
    updated: "Последнее обновление: 21.07.2026",
    sections: [
      {
        title: "1. Общие положения",
        content: [
          "Обработка и защита персональных данных осуществляются в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».",
          "Настоящая политика регулирует сбор, обработку и защиту персональных данных пользователей платформы QBIDS.RU.",
          "Конфиденциальность и безопасность данных пользователей — один из главных приоритетов платформы.",
          "Используя сервис, пользователь соглашается с условиями настоящей политики конфиденциальности.",
        ],
      },
      {
        title: "2. Какие данные мы обрабатываем",
        content: [
          "Имя и фамилия — для регистрации и идентификации.",
          "Адрес электронной почты — для связи и подтверждения аккаунта.",
          "Номер телефона — для дополнительной безопасности и связи.",
          "IP-адрес и cookie — для технической безопасности и улучшения сервиса.",
          "Технические данные устройства — для оптимизации и защиты.",
          "История участия в аукционах — для оказания услуг и аналитики.",
          "Адрес доставки — для передачи выигранных товаров.",
        ],
      },
      {
        title: "3. Цели обработки",
        content: [
          "Регистрация и идентификация пользователя.",
          "Проведение аукционов и управление ставками.",
          "Служба поддержки и обработка обращений.",
          "Организация доставки выигранных товаров.",
          "Соблюдение законодательства Российской Федерации.",
          "Маркетинг (только при согласии пользователя).",
          "Аналитика для улучшения сервиса.",
        ],
      },
      {
        title: "4. Согласие и права пользователя",
        content: [
          "Согласие на обработку персональных данных даётся добровольно при регистрации.",
          "Пользователь может отозвать согласие и потребовать удаления данных.",
          "Пользователь вправе запросить доступ к своим данным и сведения об их обработке.",
          "Пользователь может потребовать исправления неточных данных.",
          "Пользователь вправе ограничить или возразить против отдельных видов обработки.",
          "Пользователь может запросить переносимость данных.",
        ],
      },
      {
        title: "5. Ответственный за обработку данных",
        content: [
          "Оператор назначает лицо, ответственное за организацию обработки персональных данных.",
          "Ответственный контролирует соблюдение требований к обработке данных.",
          "По вопросам защиты данных обращайтесь к ответственному лицу.",
          `Контакт: ${CONTACTS.privacy}`,
        ],
      },
      {
        title: "6. Инциденты и сроки хранения",
        content: [
          "При инцидентах, создающих риск серьёзного вреда, оператор уведомляет уполномоченные органы в установленные законом сроки.",
          "Пользователи уведомляются о затрагивающих их инцидентах в кратчайшие сроки.",
          "Данные хранятся столько, сколько нужно для целей обработки, либо дольше — если этого требует закон.",
          "После удаления аккаунта персональные данные удаляются в течение 30 дней, за исключением случаев, предусмотренных законом.",
        ],
      },
      {
        title: "7. Правила аукциона и покупки",
        content: [
          "Покупка товара возможна только через участие в аукционе путём размещения ставок.",
          "Победителем становится участник, сделавший последнюю ставку к моменту окончания таймера.",
          "Победитель вправе приобрести товар по итоговой цене, зафиксированной на сайте при закрытии аукциона.",
        ],
      },
      {
        title: "8. Финансовые отношения",
        content: [
          "Пользователь переводит средства на счёт компании для покупки бидов.",
          "Биды передаются пользователю после оплаты соответствующего пакета.",
          "Стоимость потраченных бидов не возвращается.",
          "Цены пакетов указываются в российских рублях (₽). Актуальные пакеты доступны на странице пополнения баланса.",
        ],
      },
      {
        title: "9. Обязательства компании",
        content: [
          "Компания подтверждает наличие полномочий на осуществление деятельности.",
          "Товары на сайте размещаются на законных основаниях.",
          "Средства пользователей защищаются в рамках применимых правил платёжной безопасности.",
          "Компания вправе запросить подтверждение регистрационных данных.",
          "Компания вправе проводить стимулирующие акции без дополнительной платы для пользователя.",
        ],
      },
    ],
    deliveryTitle: "Правила доставки",
    deliveryDesc: "Условия доставки выигранных товаров",
    delivery: [
      { title: "Сроки", description: "Не позднее 5 рабочих дней после подтверждения результатов аукциона" },
      { title: "Место доставки", description: "По адресу, указанному пользователем, либо в пункт выдачи" },
      { title: "Получатель", description: "Товар передаётся только зарегистрированному победителю" },
    ],
    forceTitle: "Форс-мажор и переходные положения",
    force: [
      {
        tone: "yellow",
        title: "Форс-мажор",
        text: "Стороны освобождаются от ответственности при обстоятельствах непреодолимой силы, на которые они не могут повлиять.",
      },
      {
        tone: "blue",
        title: "Изменения политики",
        text: "Компания вправе изменять настоящую политику. Споры по возможности решаются путём переговоров.",
      },
      {
        tone: "green",
        title: "Время и изменения",
        text: "Время определяется по московскому времени (UTC+3). Изменения политики публикуются на сайте.",
      },
    ],
    contactTitle: "Контактная информация",
    contactDesc: "По вопросам защиты персональных данных свяжитесь с нами",
    contactHeading: "Контакты",
    responseHeading: "Сроки ответа",
    responses: [
      "Стандартные запросы: в течение 7 рабочих дней",
      "Срочные вопросы: в течение 2 рабочих дней",
      "Технические проблемы: в течение 24 часов",
    ],
    location: CONTACTS.locationRu,
  },
  en: {
    title: "Privacy Policy - QBIDS.RU",
    heading: "Privacy Policy",
    subtitle:
      "This policy describes how QBIDS.RU collects, processes, and protects personal data under the laws of the Russian Federation (including Federal Law No. 152-FZ).",
    updated: "Last updated: 21.07.2026",
    sections: [
      {
        title: "1. General provisions",
        content: [
          "Personal data is processed in accordance with Federal Law No. 152-FZ “On Personal Data”.",
          "This policy governs collection, processing, and protection of QBIDS.RU user data.",
          "User privacy and security are a top priority.",
          "By using the service, you agree to this privacy policy.",
        ],
      },
      {
        title: "2. Data we process",
        content: [
          "Name — for registration and identification.",
          "Email — for communication and account verification.",
          "Phone number — for security and contact.",
          "IP address and cookies — for security and UX improvement.",
          "Device technical data — for optimization and protection.",
          "Auction participation history — for service delivery and analytics.",
          "Delivery address — to ship won items.",
        ],
      },
      {
        title: "3. Processing purposes",
        content: [
          "User registration and identification.",
          "Running auctions and managing bids.",
          "Customer support.",
          "Delivery of won items.",
          "Compliance with Russian Federation law.",
          "Marketing (only with consent).",
          "Analytics to improve the service.",
        ],
      },
      {
        title: "4. Consent and user rights",
        content: [
          "Consent is given voluntarily during registration.",
          "You may withdraw consent and request deletion.",
          "You may request access to your data.",
          "You may request correction of inaccurate data.",
          "You may restrict or object to certain processing.",
          "You may request data portability.",
        ],
      },
      {
        title: "5. Data protection officer",
        content: [
          "The operator appoints a person responsible for personal data processing.",
          "That person oversees compliance with data-protection requirements.",
          "Contact them for any privacy-related questions.",
          `Contact: ${CONTACTS.privacy}`,
        ],
      },
      {
        title: "6. Incidents and retention",
        content: [
          "In case of serious incidents, authorities are notified as required by law.",
          "Affected users are informed as soon as practicable.",
          "Data is retained as needed for processing purposes or legal requirements.",
          "After account deletion, personal data is removed within 30 days unless law requires otherwise.",
        ],
      },
      {
        title: "7. Auction and purchase rules",
        content: [
          "Items are purchased only by participating in auctions and placing bids.",
          "The winner is the participant with the last bid when the timer ends.",
          "The winner may buy the item at the final price shown at auction close.",
        ],
      },
      {
        title: "8. Financial relations",
        content: [
          "Users transfer funds to purchase bid packages.",
          "Bids are transferred to the user after payment.",
          "Spent bids are non-refundable.",
          "Package prices are shown in Russian rubles (₽) on the top-up page.",
        ],
      },
      {
        title: "9. Company obligations",
        content: [
          "The company confirms it is authorized to operate the platform.",
          "Listed items are offered on a lawful basis.",
          "User funds are protected under applicable payment-security practices.",
          "The company may request verification of registration data.",
          "The company may run promotional campaigns at no extra charge to users.",
        ],
      },
    ],
    deliveryTitle: "Delivery rules",
    deliveryDesc: "Terms for delivering won items",
    delivery: [
      { title: "Timing", description: "No later than 5 business days after auction confirmation" },
      { title: "Location", description: "To the address provided by the user or a pickup point" },
      { title: "Recipient", description: "Items are handed over only to the registered winner" },
    ],
    forceTitle: "Force majeure and transitional provisions",
    force: [
      {
        tone: "yellow",
        title: "Force majeure",
        text: "Parties are released from liability for circumstances beyond their reasonable control.",
      },
      {
        tone: "blue",
        title: "Policy changes",
        text: "The company may update this policy. Disputes are preferably resolved by negotiation.",
      },
      {
        tone: "green",
        title: "Time and updates",
        text: "Time is Moscow time (UTC+3). Policy updates are published on the website.",
      },
    ],
    contactTitle: "Contact information",
    contactDesc: "Contact us regarding personal data protection",
    contactHeading: "Contacts",
    responseHeading: "Response times",
    responses: [
      "Standard requests: within 7 business days",
      "Urgent matters: within 2 business days",
      "Technical issues: within 24 hours",
    ],
    location: CONTACTS.locationEn,
  },
  ka: {
    title: "კონფიდენციალურობის პოლიტიკა - QBIDS.RU",
    heading: "კონფიდენციალურობის პოლიტიკა",
    subtitle:
      "პოლიტიკა განსაზღვრავს QBIDS.RU-ის მიერ პირადი მონაცემების დამუშავებას რუსეთის ფედერაციის კანონმდებლობის (მათ შორის 152-ФЗ) შესაბამისად.",
    updated: "ბოლო განახლება: 21.07.2026",
    sections: [
      {
        title: "1. ზოგადი დებულებები",
        content: [
          "პირადი მონაცემების დამუშავება ხდება რუსეთის ფედერაციის კანონმდებლობის შესაბამისად (152-ФЗ).",
          "ეს პოლიტიკა არეგულირებს QBIDS.RU მომხმარებელთა მონაცემების შეგროვებასა და დაცვას.",
          "მომხმარებლის მონაცემების უსაფრთხოება ჩვენი პრიორიტეტია.",
          "სერვისის გამოყენებით ეთანხმებით ამ პოლიტიკას.",
        ],
      },
      {
        title: "2. დამუშავებული მონაცემები",
        content: [
          "სახელი და გვარი — რეგისტრაციისთვის.",
          "ელ-ფოსტა — კომუნიკაციისა და ვერიფიკაციისთვის.",
          "ტელეფონი — უსაფრთხოებისა და კონტაქტისთვის.",
          "IP და cookie — ტექნიკური უსაფრთხოებისთვის.",
          "მოწყობილობის მონაცემები — ოპტიმიზაციისთვის.",
          "აუქციონის ისტორია — სერვისისა და ანალიტიკისთვის.",
          "მიწოდების მისამართი — მოგებული ნივთის ჩასაბარებლად.",
        ],
      },
      {
        title: "3. დამუშავების მიზნები",
        content: [
          "რეგისტრაცია და იდენტიფიკაცია.",
          "აუქციონების ჩატარება და ფსონების მართვა.",
          "მხარდაჭერა.",
          "მიწოდების ორგანიზება.",
          "რუსეთის კანონმდებლობის დაცვა.",
          "მარკეტინგი (თანხმობით).",
          "ანალიტიკა სერვისის გასაუმჯობესებლად.",
        ],
      },
      {
        title: "4. თანხმობა და უფლებები",
        content: [
          "თანხმობა გაიცემა რეგისტრაციისას.",
          "შეგიძლიათ გააუქმოთ თანხმობა და მოითხოვოთ წაშლა.",
          "გაქვთ უფლება მოითხოვოთ წვდომა მონაცემებზე.",
          "შეგიძლიათ მოითხოვოთ გასწორება.",
          "შეგიძლიათ შეზღუდოთ გარკვეული დამუშავება.",
          "შეგიძლიათ მოითხოვოთ მონაცემების პორტაბილურობა.",
        ],
      },
      {
        title: "5. მონაცემთა დაცვის პასუხისმგებელი",
        content: [
          "ოპერატორი ნიშნავს პასუხისმგებელ პირს.",
          "იგი ზედამხედველობს მონაცემთა დამუშავებას.",
          "ნებისმიერი საკითხისთვის მიმართეთ მას.",
          `კონტაქტი: ${CONTACTS.privacy}`,
        ],
      },
      {
        title: "6. ინციდენტები და შენახვა",
        content: [
          "სერიოზული ინციდენტისას ეცნობება უფლებამოსილ ორგანოებს.",
          "მომხმარებლები ინფორმირდებიან უმოკლეს ვადაში.",
          "მონაცემები ინახება მიზნებისა და კანონის შესაბამისად.",
          "ანგარიშის წაშლის შემდეგ მონაცემები იშლება 30 დღეში, კანონით გათვალისწინებული შემთხვევების გარდა.",
        ],
      },
      {
        title: "7. აუქციონისა და შესყიდვის წესი",
        content: [
          "ნივთის შეძენა ხდება მხოლოდ აუქციონში მონაწილეობით.",
          "გამარჯვებულია ბოლო ფსონის ავტორი ტაიმერის დასრულებისას.",
          "გამარჯვებულს შეუძლია ნივთი შეიძინოს საბოლოო ფასად.",
        ],
      },
      {
        title: "8. ფინანსური ურთიერთობა",
        content: [
          "მომხმარებელი იხდის ბიდების პაკეტებს.",
          "ბიდები გადაეცემა გადახდის შემდეგ.",
          "დახარჯული ბიდები არ ბრუნდება.",
          "ფასები მითითებულია რუბლებში (₽) ბალანსის შევსების გვერდზე.",
        ],
      },
      {
        title: "9. კომპანიის ვალდებულებები",
        content: [
          "კომპანია უფლებამოსილია განახორციელოს საქმიანობა.",
          "ნივთები განთავსებულია კანონიერად.",
          "მომხმარებლის თანხები დაცულია გადახდის უსაფრთხოების პრაქტიკით.",
          "შეიძლება მოითხოვოს სარეგისტრაციო მონაცემების დადასტურება.",
          "შეიძლება ჩაატაროს აქციები დამატებითი გადასახადის გარეშე.",
        ],
      },
    ],
    deliveryTitle: "მიწოდების წესები",
    deliveryDesc: "მოგებული პროდუქტების მიწოდების პირობები",
    delivery: [
      { title: "ვადები", description: "აუქციონის დადასტურებიდან არაუგვიანეს 5 სამუშაო დღისა" },
      { title: "ადგილი", description: "მომხმარებლის მისამართზე ან პუნქტში" },
      { title: "მიმღები", description: "გადაცემა მხოლოდ რეგისტრირებულ გამარჯვებულს" },
    ],
    forceTitle: "ფორს-მაჟორი და გარდამავალი დებულებები",
    force: [
      {
        tone: "yellow",
        title: "ფორს-მაჟორი",
        text: "მხარეები თავისუფლდებიან პასუხისმგებლობისგან გადაულახავი გარემოებებისას.",
      },
      {
        tone: "blue",
        title: "პოლიტიკის ცვლილებები",
        text: "კომპანიას შეუძლია შეცვალოს პოლიტიკა. დავები უპირატესად მოგვარდება მოლაპარაკებით.",
      },
      {
        tone: "green",
        title: "დრო და განახლებები",
        text: "დრო — მოსკოვის დრო (UTC+3). ცვლილებები ქვეყნდება საიტზე.",
      },
    ],
    contactTitle: "საკონტაქტო ინფორმაცია",
    contactDesc: "პირადი მონაცემების დაცვის საკითხებზე დაგვიკავშირდით",
    contactHeading: "კონტაქტი",
    responseHeading: "პასუხის ვადები",
    responses: [
      "სტანდარტული მოთხოვნები: 7 სამუშაო დღე",
      "გადაუდებელი საკითხები: 2 სამუშაო დღე",
      "ტექნიკური პრობლემები: 24 საათი",
    ],
    location: CONTACTS.locationKa,
  },
} as const;

const toneStyles = {
  yellow: { box: "bg-yellow-50 border-yellow-200", title: "text-yellow-800", text: "text-yellow-700" },
  blue: { box: "bg-blue-50 border-blue-200", title: "text-blue-800", text: "text-blue-700" },
  green: { box: "bg-green-50 border-green-200", title: "text-green-800", text: "text-green-700" },
} as const;

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const lang = (["ru", "en", "ka"].includes(language) ? language : "ru") as Language;
  const c = content[lang];

  useDocumentTitle(c.title);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1504px] mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-shield-alt text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-testid="heading-privacy">{c.heading}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{c.subtitle}</p>
          <div className="mt-6 text-sm text-gray-500">{c.updated}</div>
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
            <CardTitle className="flex items-center">
              <i className="fas fa-truck text-blue-600 mr-3"></i>
              {c.deliveryTitle}
            </CardTitle>
            <CardDescription>{c.deliveryDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.delivery.map((rule, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow" data-testid={`delivery-rule-${index}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">{rule.title}</h3>
                  <p className="text-sm text-gray-600">{rule.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{c.forceTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {c.force.map((item, index) => {
                const styles = toneStyles[item.tone];
                return (
                  <div key={index} className={`p-4 border rounded-lg ${styles.box}`}>
                    <h3 className={`font-semibold mb-2 ${styles.title}`}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <i className="fas fa-envelope text-blue-600 mr-3"></i>
              {c.contactTitle}
            </CardTitle>
            <CardDescription>{c.contactDesc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{c.contactHeading}</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center" data-testid="contact-email">
                    <i className="fas fa-envelope w-5 mr-3"></i>
                    <span>{CONTACTS.email}</span>
                  </div>
                  <div className="flex items-center" data-testid="contact-phone">
                    <i className="fas fa-phone w-5 mr-3"></i>
                    <span>{CONTACTS.phone}</span>
                  </div>
                  <div className="flex items-center" data-testid="contact-location">
                    <i className="fas fa-map-marker-alt w-5 mr-3"></i>
                    <span>{c.location}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">{c.responseHeading}</h3>
                <div className="space-y-2 text-gray-600">
                  {c.responses.map((line) => (
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
