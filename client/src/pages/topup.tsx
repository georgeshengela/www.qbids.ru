import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { useAuth } from '@/hooks/use-auth';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import goldBagImage from '@assets/img_1755139968219.png';

const bidPackages = [
  {
    id: 1,
    title: "50 ставок",
    bids: 50,
    price: 750,
    originalPrice: 1000,
    savings: 250,
    popular: false,
    description: "Идеально для начинающих"
  },
  {
    id: 2,
    title: "100 ставок",
    bids: 100,
    price: 1500,
    originalPrice: 2000,
    savings: 500,
    popular: false,
    description: "Для активных участников"
  },
  {
    id: 3,
    title: "250 ставок",
    bids: 250,
    price: 3750,
    originalPrice: 5000,
    savings: 1250,
    popular: true,
    description: "Самый выгодный выбор"
  },
  {
    id: 4,
    title: "500 ставок",
    bids: 500,
    price: 7500,
    originalPrice: 10000,
    savings: 2500,
    popular: false,
    description: "Для профессионалов"
  },
  {
    id: 5,
    title: "1000 ставок",
    bids: 1000,
    price: 15000,
    originalPrice: 20000,
    savings: 5000,
    popular: false,
    description: "Максимальный пакет"
  }
];

function formatRUB(amount: number) {
  return `${amount.toLocaleString('ru-RU')} ₽`;
}

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

export default function TopUp() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedId, setSelectedId] = useState<number>(3);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const selectedPackage = bidPackages.find((pkg) => pkg.id === selectedId) ?? bidPackages[2];

  useEffect(() => {
    document.title = `${t('topUpBalance')} - QBIDS.RU`;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const content = 'Пополните баланс бидов на QBIDS.RU в рублях (демо-оплата картой)';
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, [t]);

  const handleSamplePay = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Демо-режим",
      description: "Это образец формы оплаты картой. Реальные платежи пока не подключены.",
      duration: 6000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="max-w-[1504px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {t('topUpBalance')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Выберите пакет бидов. Оплата в рублях (₽) — форма карты ниже только для демонстрации
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2 text-sm text-amber-800">
            <i className="fas fa-info-circle"></i>
            <span>Образец пополнения картой — платежи не списываются</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
          {bidPackages.map((pkg) => {
            const isSelected = pkg.id === selectedId;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedId(pkg.id)}
                className={`relative text-left bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isSelected
                    ? 'border-blue-500 ring-4 ring-blue-100'
                    : pkg.popular
                      ? 'border-amber-300'
                      : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ПОПУЛЯРНЫЙ
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={goldBagImage}
                      alt="Пакет бидов"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 text-center mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 text-center mb-3">{pkg.description}</p>

                  <div className="text-center mb-3">
                    <div className="text-2xl font-bold text-slate-900">{formatRUB(pkg.price)}</div>
                    <div className="text-sm text-slate-400 line-through">{formatRUB(pkg.originalPrice)}</div>
                    <div className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                      Экономия {formatRUB(pkg.savings)}
                    </div>
                  </div>

                  <div className={`text-center text-sm font-medium ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
                    {isSelected ? 'Выбрано' : 'Выбрать'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-4 bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Ваш заказ</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Пакет</span>
                <span className="font-semibold text-slate-900">{selectedPackage.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Биды</span>
                <span className="font-semibold text-slate-900">{selectedPackage.bids}</span>
              </div>
              {user && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Аккаунт</span>
                  <span className="font-semibold text-slate-900">{user.username}</span>
                </div>
              )}
              <div className="border-t border-slate-100 pt-3 flex justify-between items-baseline">
                <span className="text-slate-700 font-medium">К оплате</span>
                <span className="text-2xl font-bold text-slate-900">{formatRUB(selectedPackage.price)}</span>
              </div>
              <p className="text-xs text-slate-400">Валюта: российский рубль (RUB)</p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-slate-900">Оплата банковской картой</h2>
              <div className="flex items-center gap-2 text-slate-400 text-lg">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-mir"></i>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Sample card preview */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white p-5 md:p-6 shadow-lg min-h-[180px]">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs uppercase tracking-widest text-slate-300">Sample card</span>
                  <span className="text-sm font-semibold">{formatRUB(selectedPackage.price)}</span>
                </div>
                <div className="font-mono text-lg md:text-xl tracking-widest mb-4">
                  {cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <div className="text-[10px] uppercase text-slate-400">Holder</div>
                    <div className="uppercase tracking-wide">{cardName || 'IVAN IVANOV'}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-400">Exp</div>
                    <div>{expiry || 'MM/YY'}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSamplePay} className="space-y-4">
                <div>
                  <Label htmlFor="card-number">Номер карты</Label>
                  <Input
                    id="card-number"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="2200 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className="mt-1 h-11 font-mono"
                  />
                </div>

                <div>
                  <Label htmlFor="card-name">Имя на карте</Label>
                  <Input
                    id="card-name"
                    autoComplete="cc-name"
                    placeholder="IVAN IVANOV"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                    className="mt-1 h-11"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="card-expiry">Срок действия</Label>
                    <Input
                      id="card-expiry"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className="mt-1 h-11 font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="card-cvv">CVV</Label>
                    <Input
                      id="card-cvv"
                      type="password"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      placeholder="•••"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className="mt-1 h-11 font-mono"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                >
                  <i className="fas fa-credit-card mr-2"></i>
                  Оплатить {formatRUB(selectedPackage.price)} (демо)
                </Button>

                <p className="text-center text-xs text-slate-400">
                  Форма не отправляет данные и не проводит оплату — только образец интерфейса
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-ruble-sign text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Цены в рублях</h3>
            <p className="text-slate-600">Все пакеты бидов отображаются в российских рублях (₽)</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-credit-card text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Карта (образец)</h3>
            <p className="text-slate-600">Показан пример экрана оплаты банковской картой без реальных списаний</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-flask text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Демо-режим</h3>
            <p className="text-slate-600">Подключение настоящей платёжной системы можно добавить позже</p>
          </div>
        </div>
      </div>
    </div>
  );
}
