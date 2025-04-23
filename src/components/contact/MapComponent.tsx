'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapRef.current).setView([3.1502, 101.7077], 15); // Kuala Lumpur coordinates

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Custom icon for marker
      const shipIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3410/3410476.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Add marker with popup
      const marker = L.marker([3.1502, 101.7077], { icon: shipIcon }).addTo(map);
      marker.bindPopup(`
        <div style="text-align: center;">
          <strong>JEBSEN TRAVEL & Tours</strong><br>
          Lot 2.81, Wisma Cosway, 88, Jalan Raja Chulan,<br>
          50200 Kuala Lumpur, Malaysia
        </div>
      `).openPopup();

      // Add a circle around the marker
      L.circle([3.1502, 101.7077], {
        color: '#0066cc',
        fillColor: '#0066cc',
        fillOpacity: 0.1,
        radius: 200
      }).addTo(map);

      // Store map instance in ref
      mapInstanceRef.current = map;

      // Clean up on unmount
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
      };
    }
  }, []);

  return (
    <motion.div
      ref={mapRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  );
};

export default MapComponent;
