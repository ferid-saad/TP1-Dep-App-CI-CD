# ==========================================
# Multi-stage Dockerfile pour Next.js 15
# Portfolio DevSecOps - Ferid Saad
# Sécurité : non-root user, image Alpine légère
# ==========================================

# Étape 1 : Dépendances
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

# Étape 2 : Build de l'application Next.js
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# Étape 3 : Image de production finale (Runner minimal et sécurisé)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Sécurité : Création d'un groupe et d'un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copie des fichiers publics et des artefacts standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Bascule vers l'utilisateur non-root
USER nextjs

EXPOSE 8080

# Healthcheck Docker conforme aux exigences DevSecOps
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/ || exit 1

CMD ["node", "server.js"]
