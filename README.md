# Canopy IIIF

A purely IIIF sourced site generator using Next.js. Canopy is an experimental application that will standup a browseable and searchable digital collections style site entirely from a IIIF Collection and the items it contains.

> **Warning**
> Canopy is a work in progress and being built in public.

## Roadmap

### Content
- [x] Manifest as a `/work/` page
- [ ] Collection as a `/collection/` page
- [ ] `seeAlso` OR `rendering` support for `text/markdown` as supplemental content

### Data Aggregration
- [x] Collection of Manifests (i.e. `depth === 1`) 
- [ ] Collection of Collections (i.e. `depth > 1`)
- [x] Harvesting of curated metadata labels

### Search
- [ ] Basic search on label(s)
- [ ] Complex search on summary and metadata
- [ ] Search page facets on curated metadata
- [ ] `next/link` routing from Work metadata to search page facets

### User Experience
- [ ] Fully Responsive
- [ ] Lazy load search results
- [ ] Custom theme support
- [x] Dark mode

## Technical Stuff

```shell
# installation
npm install

# development
npm run dev

# build
npm run build
```

## Configuration

Edit `canopy.config.js`

```jsx
/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection: "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/02-lawyer.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection: "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/02-lawyer.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};
```
