import { Component, OnInit, } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Meta } from '@angular/platform-browser';
import { FadeInOnLoadDirective } from '../../directives/fade-in-on-load';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer,FadeInOnLoadDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Bienvenue sur notre page de contact ! Des questions ? Des précisions ? Contactez-nous !' },
      { name: 'keywords', content: 'contact, questions, mail, precision' },
    ]);

    // Initialisation de la carte MapLibre GL JS
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const maplibregl = (window as any).maplibregl;
        const mapDiv = document.getElementById('leaflet-map');
        if (maplibregl && mapDiv) {
          // Remplacer l'id pour la sémantique
          mapDiv.id = 'maplibre-map';
          const map = new maplibregl.Map({
            container: 'maplibre-map',
            style: {
              version: 8,
              sources: {
                osm: {
                  type: 'raster',
                  tiles: [
                    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  ],
                  tileSize: 256,
                  attribution: '© OpenStreetMap contributors'
                }
              },
              layers: [
                {
                  id: 'osm',
                  type: 'raster',
                  source: 'osm',
                  minzoom: 0,
                  maxzoom: 19
                }
              ]
            },
            center: [7.0640783, 43.6169152],
            zoom: 15,
            attributionControl: true
          });
          // Ajout d'un marqueur
          const marker = new maplibregl.Marker({ color: '#252052' })
            .setLngLat([7.0640783, 43.6169152])
            .setPopup(new maplibregl.Popup().setText("Université Côte d'Azur - Campus SophiaTech (Lucioles)"))
            .addTo(map);
          // Correction accessibilité : suppression des attributs ARIA interdits sur le marker
          setTimeout(() => {
            const markerEl = document.querySelector('.maplibregl-marker');
            if (markerEl) {
              markerEl.removeAttribute('aria-label');
              markerEl.removeAttribute('role');
            }
          }, 100);
        }
      }, 0);
    }
  }
}
