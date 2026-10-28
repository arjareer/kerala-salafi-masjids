# Kerala Salafi Masjids

A street-map finder for Salafi (KNM, Markazudawa, Wisdom) masjids in Kerala: search, district and organisation filters, GPS "near me", and Google Maps directions. It's plain static files (Leaflet + OpenStreetMap), so it runs on GitHub Pages with no build step.

## Adding or editing masjids
Edit `masjids.json`. Each entry looks like:

```json
{"id":"m1200","name":"Salafi Masjid","org":"Salafi (organisation not specified)","place":"Manjeri","district":"Malappuram","lat":11.119,"lng":76.123}
```

`org` is one of: `KNM (Kerala Nadvathul Mujahideen)`, `KNM Markazudawa`, `Wisdom Islamic Organisation`, `Salafi (organisation not specified)`.

Data source: the "kerala salafi masjids" saved list in Google Maps.
