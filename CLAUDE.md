# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (localhost:3000)
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm prettier` - Format code using Prettier
- `pnpm prettier:check` - Check code formatting
- `pnpm test` - Run tests (currently just formatting check)

## Architecture Overview

This is a Next.js 15 commerce application using the App Router with Server Components, built as a Shopify headless storefront. The application is branded as "Royal Balc Perfume" and uses a luxury design system.

### Key Technologies
- **Framework**: Next.js 15 with App Router, PPR (Partial Prerendering), and React 19
- **Styling**: TailwindCSS with custom CSS variables for Royal Balc branding
- **Typography**: Inter (body), Playfair Display (headings), Space Grotesk (numeric)
- **E-commerce**: Shopify Storefront API with GraphQL
- **State Management**: React Context for cart state
- **Caching**: Next.js cache tags and unstable_cache APIs

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components organized by feature
- `lib/shopify/` - Shopify integration layer with GraphQL queries/mutations
- `lib/` - Utilities, constants, and type definitions

### Shopify Integration
The application connects to Shopify via the Storefront API:
- GraphQL endpoint: `/api/2023-01/graphql.json`
- Cart operations use server actions for mutations
- Product data is cached with Next.js cache tags
- Webhook revalidation endpoint at `/api/revalidate`

### Environment Variables Required
- `SHOPIFY_STORE_DOMAIN` - Your Shopify store domain
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Storefront API access token
- `SHOPIFY_REVALIDATION_SECRET` - Webhook secret for cache revalidation
- `SITE_NAME` - Site name (defaults to "Royal Balc Perfume")

### Key Components Architecture
- **Cart System**: Context-based with server actions for mutations
- **Product Display**: Server components with optimized image loading
- **Navigation**: Responsive navbar with mobile menu
- **Search**: Collection-based filtering and sorting
- **Layout**: Root layout with font loading and cart provider

### Caching Strategy
- Products and collections cached with `'use cache'` directive
- Cache tags: `collections`, `products`, `cart`
- Webhook-based revalidation for Shopify updates
- Images optimized with Next.js Image component

### Styling Notes
- Custom CSS variables in `globals.css` for Royal Balc brand colors
- TailwindCSS configuration includes custom fonts and container queries
- Selection colors use brand colors (royal gold/midnight blue)