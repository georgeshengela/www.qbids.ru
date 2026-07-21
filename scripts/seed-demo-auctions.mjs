import pg from "pg";

const { Pool } = pg;

const auctions = [
  {
    displayId: "QB/1001",
    title: "iPhone 16 Pro 128GB",
    description: "Флагманский смартфон Apple с титановым корпусом и камерой Pro.",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    retailPrice: "129990.00",
    currentPrice: "12.40",
    status: "live",
    startSql: "NOW() - INTERVAL '5 minutes'",
    endSql: "NULL",
    timerSeconds: 15,
    isBidPackage: false,
  },
  {
    displayId: "QB/1002",
    title: "MacBook Air 13 M3",
    description: "Лёгкий ноутбук Apple на чипе M3 для работы и учёбы.",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    retailPrice: "119990.00",
    currentPrice: "3.20",
    status: "live",
    startSql: "NOW() - INTERVAL '2 minutes'",
    endSql: "NULL",
    timerSeconds: 12,
    isBidPackage: false,
  },
  {
    displayId: "QB/1003",
    title: "Sony WH-1000XM5",
    description: "Беспроводные наушники с шумоподавлением премиум-класса.",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    retailPrice: "34990.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '8 minutes'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1004",
    title: "Samsung Galaxy S24 Ultra",
    description: "Премиальный Android-смартфон с S Pen и мощной камерой.",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
    retailPrice: "109990.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '20 minutes'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1005",
    title: "Apple Watch Series 10",
    description: "Умные часы с мониторингом здоровья и ярким дисплеем.",
    imageUrl: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
    retailPrice: "44990.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '45 minutes'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1006",
    title: "PlayStation 5 Slim",
    description: "Игровая консоль нового поколения в тонком корпусе.",
    imageUrl: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    retailPrice: "59990.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '2 hours'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1007",
    title: "Dyson V15 Detect",
    description: "Беспроводной пылесос с лазерным обнаружением пыли.",
    imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    retailPrice: "69990.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '3 hours'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1008",
    title: "Пакет 100 бидов",
    description: "Демо-пакет бидов для участия в аукционах.",
    imageUrl: "https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=800&q=80",
    retailPrice: "1500.00",
    currentPrice: "0.00",
    status: "upcoming",
    startSql: "NOW() + INTERVAL '1 hour'",
    endSql: "NULL",
    timerSeconds: 10,
    isBidPackage: true,
  },
  {
    displayId: "QB/1009",
    title: "AirPods Pro 2",
    description: "Беспроводные наушники Apple с активным шумоподавлением.",
    imageUrl: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    retailPrice: "24990.00",
    currentPrice: "8.75",
    status: "finished",
    startSql: "NOW() - INTERVAL '2 hours'",
    endSql: "NOW() - INTERVAL '1 hour'",
    timerSeconds: 10,
    isBidPackage: false,
  },
  {
    displayId: "QB/1010",
    title: 'iPad Air 11" M2',
    description: "Планшет Apple для работы, учёбы и творчества.",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    retailPrice: "79990.00",
    currentPrice: "15.30",
    status: "finished",
    startSql: "NOW() - INTERVAL '1 day'",
    endSql: "NOW() - INTERVAL '20 hours'",
    timerSeconds: 10,
    isBidPackage: false,
  },
];

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await pool.query(`
      DELETE FROM bids WHERE auction_id IN (SELECT id FROM auctions WHERE display_id LIKE 'QB/10%');
      DELETE FROM prebids WHERE auction_id IN (SELECT id FROM auctions WHERE display_id LIKE 'QB/10%');
      DELETE FROM auctions WHERE display_id LIKE 'QB/10%';
    `);

    for (const a of auctions) {
      const result = await pool.query(
        `
        INSERT INTO auctions
          (display_id, title, description, image_url, retail_price, current_price,
           bid_increment, status, start_time, end_time, timer_seconds, is_bid_package)
        VALUES
          ($1, $2, $3, $4, $5, $6, 0.01, $7, ${a.startSql}, ${a.endSql}, $8, $9)
        RETURNING display_id, title, status
        `,
        [
          a.displayId,
          a.title,
          a.description,
          a.imageUrl,
          a.retailPrice,
          a.currentPrice,
          a.status,
          a.timerSeconds,
          a.isBidPackage,
        ],
      );
      console.log("created", result.rows[0]);
    }

    const summary = await pool.query(
      `SELECT status, count(*)::int AS count FROM auctions GROUP BY status ORDER BY status`,
    );
    console.log("summary", summary.rows);
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
