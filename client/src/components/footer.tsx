import { Link } from "wouter";
import { useSettings } from "@/hooks/use-settings";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { settings } = useSettings();
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-background via-card to-background text-white">
      <div className="max-w-[1504px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-warning to-accent rounded-lg flex items-center justify-center">
                <i className="fas fa-gavel text-white text-sm"></i>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                {settings?.siteName || "QBIDS.KG"}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {settings?.footerDescription || "Первая пенни-аукционная платформа в России. Выигрывайте премиальные товары за копейки с нашей честной и прозрачной системой аукционов."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground/70 hover:text-warning transition-colors">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-muted-foreground/70 hover:text-warning transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-muted-foreground/70 hover:text-warning transition-colors">
                <i className="fab fa-telegram text-lg"></i>
              </a>
              <a href="#" className="text-muted-foreground/70 hover:text-warning transition-colors">
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warning">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-home mr-2 text-warning"></i>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/auctions" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-gavel mr-2 text-warning"></i>
                  {t("auctions")}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-question-circle mr-2 text-warning"></i>
                  {t("howItWorks")}
                </Link>
              </li>
              <li>
                <Link href="/topup" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-credit-card mr-2 text-warning"></i>
                  {t("topUpBalance")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warning">{t("support")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-headset mr-2 text-warning"></i>
                  {t("customerSupport")}
                </Link>
              </li>
              <li>
                <Link href="/auction-rules" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-file-alt mr-2 text-warning"></i>
                  {t("auctionRules")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-shield-alt mr-2 text-warning"></i>
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center">
                  <i className="fas fa-balance-scale mr-2 text-warning"></i>
                  {t("termsOfService")}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    localStorage.removeItem("cookie-consent");
                    localStorage.removeItem("cookie-preferences");
                    window.location.reload();
                  }}
                  className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center"
                >
                  <i className="fas fa-cookie-bite mr-2 text-warning"></i>
                  {t("cookieSettings")}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warning">{t("contactUs")}</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-map-marker-alt mr-3 text-warning"></i>
                <span>{settings?.contactAddress || "г. Бишкек, ул. Чуй 154"}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-phone mr-3 text-warning"></i>
                <span>{settings?.contactPhone || "+996 (555) 123-456"}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-envelope mr-3 text-warning"></i>
                <span>{settings?.contactEmail || "info@qbids.kg"}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-clock mr-3 text-warning"></i>
                <span>{t("support24x7")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-r from-muted to-muted/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-warning">1,247</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{t("activeUsers")}</div>
            </div>
            <div className="bg-gradient-to-r from-muted to-muted/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-success">2.8M</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{t("savedByBuyers")}</div>
            </div>
            <div className="bg-gradient-to-r from-muted to-muted/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">356</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{t("completedAuctions")}</div>
            </div>
            <div className="bg-gradient-to-r from-muted to-muted/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-warning">97%</div>
              <div className="text-xs text-muted-foreground/70 mt-1">{t("satisfiedCustomers")}</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center text-success text-sm">
                <i className="fas fa-shield-check mr-2"></i>
                <span>{t("securePayments")}</span>
              </div>
              <div className="flex items-center text-accent text-sm">
                <i className="fas fa-award mr-2"></i>
                <span>{t("licensedPlatform")}</span>
              </div>
              <div className="flex items-center text-warning text-sm">
                <i className="fas fa-handshake mr-2"></i>
                <span>{t("fairAuctions")}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* SSL Secure Badge */}
              <div className="flex items-center bg-gradient-to-r from-green-600 to-green-700 px-3 py-1 rounded text-xs font-semibold text-white">
                <i className="fas fa-lock mr-1"></i>
                SSL Secure
              </div>
              
              {/* Payment Security Badge */}
              <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1 rounded text-xs font-semibold text-white">
                <i className="fas fa-shield-alt mr-1"></i>
                256-bit
              </div>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground/70 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} {settings?.siteName || "QBIDS.KG"}. 
              {settings?.language === "ru" && " Все права защищены."}
              {settings?.language === "en" && " All rights reserved."}
              {settings?.language === "ka" && " ყველა უფლება დაცულია."}
              {!settings?.language && " Все права защищены."}
            </p>
            <p className="text-warning text-sm">
              {settings?.language === "ru" && "Первая пенни-аукционная платформа в России"}
              {settings?.language === "en" && "First penny auction platform in Russia"}
              {settings?.language === "ka" && "პირველი პენი აუქციონის პლატფორმა საქართველოში"}
              {!settings?.language && "Первая пенни-аукционная платформа в России"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}