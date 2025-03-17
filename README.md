# London Investors Directory

A comprehensive directory of London-based investors, including Angel Investors, VCs, Private Equity firms, Property Investors, Crowdfunding Platforms, Corporate Investors, and Syndicates.

## Features

- **Advanced Search & Filtering**
  - Filter by investor type, sector, investment stage, and ticket size
  - Location-based search within London boroughs
  - Verified investor badges
  - Real-time search powered by Algolia

- **Investor Profiles**
  - Detailed investor information
  - Portfolio highlights
  - Investment preferences
  - GDPR-compliant contact information

- **Premium Features**
  - Free tier: Basic profiles and limited searches
  - Pro tier: Advanced filters, ad-free experience, and investor analytics

## Tech Stack

- Next.js 14 (React 18)
- TypeScript
- Tailwind CSS
- Algolia Search
- Headless UI Components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/london-investors-directory.git
   cd london-investors-directory
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_algolia_search_key
   ALGOLIA_ADMIN_KEY=your_algolia_admin_key
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### File Structure

```
src/
├── app/                 # Next.js 14 App Router
├── components/          # React components
│   ├── investors/       # Investor-related components
│   ├── layout/         # Layout components
│   └── search/         # Search components
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

### Code Style

- Follow the ESLint configuration
- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Use Tailwind CSS for styling

## Deployment

The application can be deployed to Vercel with zero configuration:

```bash
yarn build
vercel deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 