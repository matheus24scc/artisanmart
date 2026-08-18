# ArtisanMart - Niche E-commerce for Handcrafted Goods

An online marketplace connecting artisans with buyers, featuring AI-powered product recommendations and secure escrow payments.

## Tech Stack

- **Frontend**: Next.js 13 + Tailwind CSS + SWR
- **Backend**: Python (FastAPI) + Celery (task queue)
- **Database**: PostgreSQL + Elasticsearch (search)
- **Auth**: Auth0 + Role-based access (buyer/seller/admin)
- **Deployment**: Docker Compose (local) → AWS ECS Fargate + RDS

## Key Features

- AI-driven product recommendations using product embeddings
- Secure escrow payment system (Stripe Connect)
- Seller dashboard with analytics and inventory management
- Buyer/seller rating and review system with fraud detection
- Real-time order tracking with WebSocket updates
- Multilingual support (i18n) and currency conversion
- Admin panel for dispute resolution and content moderation

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js (v16 or later)
- Docker and Docker Compose
- PostgreSQL and Elasticsearch (can be run via Docker)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd artisanmart-niche-ecommerce-for-handcrafted-goods
   ```

2. Install backend dependencies
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables
   Create a `.env` file in the backend directory based on `.env.example`.

5. Start the services
   ```bash
   # Start PostgreSQL and Elasticsearch via Docker Compose
   docker-compose up -d

   # Start the backend
   uvicorn main:app --reload

   # Start the frontend
   npm run dev
   ```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/users` | POST | Create user |
| `/api/v1/users/me` | GET | Get current user |
| `/api/v1/products` | POST | Create product |
| `/api/v1/products` | GET | List products |
| `/api/v1/search` | GET | Search products |
| `/api/v1/orders` | POST | Create order |
| `/api/v1/orders/:id` | GET | Get order details |

## Payment Flow

ArtisanMart uses Stripe Connect for escrow payments:

1. Buyer accepts product listing
2. Payment goes to platform escrow
3. Artisan receives notification to ship
4. Buyer confirms receipt
5. Escrow releases funds to artisan

## Deployment

### Local Development

```bash
docker-compose up -d
uvicorn main:app --reload
npm run dev
```

### Production

The application can be deployed to AWS ECS Fargate with RDS for PostgreSQL.

## License

This project is licensed under the MIT License.
## Status (checkup 2026-08-18)
> Revisado na campanha de repo-checkup. Relatorio completo: `~/repo-checkup/reports/artisanmart.md` (local do mantenedor, nao no repo).
- **Build/Install**: Backend `python -c "import main"` RC=0 (14 rotas) + `pytest` 2 passed (RC=0); Frontend `npm run build` RC=0 (9 paginas estaticas) + `next lint` RC=0.
- **Smoke test**: `GET /health` -> 200 via TestClient (sem servicos externos); app inicia (14 rotas). `auth/register` retorna 500 sem Postgres (esperado).
- **Para rodar de ponta-a-ponta precisa de**: PostgreSQL (via `docker-compose.yml`) para rotas `/api/v1/auth/*` e `/api/v1/users/*`.
- **Inconsistencias conhecidas (README vs codigo)**: `SECRET_KEY` hardcoded em `app/core/security.py` (mover para env var); router de auth (`/api/v1/auth/*`) so funciona com Postgres.
- **Seguranca**: Bump de seguranca `next@13.4.0` (critical) no frontend; backend 28 CVEs (fastapi/starlette/python-jose/python-multipart/python-dotenv/ecdsa) — nao auto-corrigido (decisao humana).
- **Estado resumido**: build verde + smoke (import + 2 pytest + /health 200); runtime completo precisa de Postgres.
