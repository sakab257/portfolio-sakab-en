# Portfolio - Sakab

Un site web portfolio moderne et responsive présentant mes projets, expériences et compétences. Développé avec Next.js 15, React 19 et Tailwind CSS 4.

## Fonctionnalités

- **Design Responsive** : Interface entièrement responsive qui fonctionne parfaitement sur tous les appareils
- **Interface Moderne** : Interface propre et moderne avec des effets de dégradés et des animations fluides
- **Vitrine de Projets** : Projets catégorisés (Web, Mobile, Logiciel, IA/ML) avec des onglets interactifs
- **Composants Personnalisés** : Composants UI réutilisables avec un style cohérent
- **Navigation Animée** : Barre de navigation personnalisée avec indicateur animé
- **Optimisé pour les Performances** : Développé avec Next.js 15 et Turbopack pour des performances optimales
- **Type-Safe** : Écrit en TypeScript pour une meilleure qualité de code

## Stack Technique

### Core
- **Next.js 15.5.4** - Framework React avec App Router
- **React 19.1.0** - Bibliothèque UI
- **TypeScript** - Sécurité des types et meilleure expérience développeur
- **Tailwind CSS 4** - Framework CSS utility-first

### Composants UI
- **Radix UI** - Composants UI headless pour les onglets et slots
- **Lucide React** - Bibliothèque d'icônes élégante
- **class-variance-authority** - Gestion des variantes de composants
- **clsx** & **tailwind-merge** - Utilitaires pour les className conditionnelles

### Outils de Développement
- **Turbopack** - Bundler nouvelle génération pour des builds plus rapides
- **ESLint** - Linting et assurance qualité du code
- **tw-animate-css** - Utilitaires d'animation Tailwind

## Structure du Projet

```
portfolio-sakab-en/
├── app/                      # Pages Next.js App Router
│   ├── about/               # Page à propos
│   ├── contact/             # Page contact
│   ├── experiences/         # Page expériences
│   ├── projects/            # Page projets
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/
│   ├── about/               # Composants page à propos
│   ├── contact/             # Composants page contact
│   ├── experiences/         # Composants page expériences
│   ├── navigation/          # Composants de navigation
│   │   └── navbar.tsx       # Navbar animée avec indicateur
│   ├── projects/            # Composants projets
│   │   ├── project-card.tsx # Carte de projet individuelle
│   │   ├── project-list.tsx # Conteneur d'onglets de projets
│   │   ├── web.tsx          # Projets web
│   │   ├── mobile.tsx       # Projets mobile
│   │   ├── software.tsx     # Projets logiciels
│   │   └── ai.tsx           # Projets IA/ML
│   └── ui/                  # Composants UI réutilisables
│       ├── button.tsx       # Composant bouton
│       ├── footer.tsx       # Composant footer
│       ├── language.tsx     # Sélecteur de langue
│       └── tabs.tsx         # Onglets personnalisés avec indicateur animé
├── public/                  # Ressources statiques
│   ├── projets/
│   │   ├── images/         # Images de projets
│   │   └── technos/        # Logos de technologies
│   └── vfx/                # Ressources d'effets visuels
└── lib/
    └── utils.ts            # Fonctions utilitaires
```

## Démarrage

### Prérequis

- Node.js 18.18 ou supérieur
- pnpm (recommandé) ou npm

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/yourusername/portfolio-sakab-en.git
cd portfolio-sakab-en
```

2. Installez les dépendances :
```bash
pnpm install
# ou
npm install
```

3. Lancez le serveur de développement :
```bash
pnpm dev
# ou
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Scripts Disponibles

- `pnpm dev` - Démarre le serveur de développement avec Turbopack
- `pnpm build` - Build pour la production avec Turbopack
- `pnpm start` - Démarre le serveur de production
- `pnpm lint` - Lance ESLint

## Composants Clés

### Composant Tabs Personnalisé

Le composant tabs dispose d'un indicateur animé qui transite en douceur entre les onglets actifs, similaire au design de la navbar. Il utilise les primitives Radix UI avec un style personnalisé.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="web">
  <TabsList>
    <TabsTrigger value="web">Web</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
  </TabsList>
  <TabsContent value="web">...</TabsContent>
</Tabs>
```

### Navbar Animée

La navbar comprend un indicateur en forme de point blanc animé qui se déplace vers la page active avec des transitions fluides.

### Carte de Projet

Composant de carte réutilisable pour afficher les projets avec :
- Image du projet
- Titre et description
- Lien vers la démo en ligne
- Badges de technologies utilisées
- Bordures et arrière-plans en dégradé

## Système de Design

### Palette de Couleurs
- Arrière-plan : `#06091F` à `#161A31` (dégradé)
- Accent : `#CBACF9` à `#D4B7FF` (dégradé violet)
- Bordure : `#6971A2` à `#272A3C` (dégradé subtil)
- Texte : `#C1C2D3` (atténué), `#FFFFFF` (actif/survol)

### Typographie
- Tailles de police responsives utilisant les breakpoints Tailwind
- Classe `capitalize` pour un formatage de texte cohérent

## Déploiement

Ce projet est optimisé pour le déploiement sur Vercel :

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et configurera le build

Alternativement, buildez et déployez manuellement :

```bash
pnpm build
pnpm start
```

## Fonctionnalités de Performance

- **Turbopack** : Builds de développement et de production ultra-rapides
- **Optimisation des Images** : Optimisation automatique des images Next.js
- **Code Splitting** : Découpage automatique du code basé sur les routes
- **Génération Statique** : Pages pré-rendues pour des performances optimales

## Support des Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

## Licence

Ce projet est privé et propriétaire.

## Contact

Salim Bouskine
- Site Web : [URL de votre Portfolio]
- GitHub : [@sakab257](https://github.com/sakab257)
- LinkedIn : [Votre LinkedIn]

---

Développé avec Next.js, React et Tailwind CSS