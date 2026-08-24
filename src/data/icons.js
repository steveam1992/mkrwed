/* Iconos en linea (mismo criterio que las apps: se pintan con v-html).
   Todos usan currentColor, asi que heredan el color del texto. */

const s = (d, extra = '') =>
  `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}${extra}</svg>`

export const icons = {
  cart: s('<path d="M2 3h2.2l2.3 9.5h8.2L17 6H5.2"/><circle cx="8" cy="16.5" r="1.4"/><circle cx="14.5" cy="16.5" r="1.4"/>'),
  box: s('<path d="M10 2.5 17 6v8l-7 3.5L3 14V6l7-3.5z"/><path d="M3 6l7 3.5L17 6M10 9.5V17.5"/>'),
  users: s('<circle cx="7.5" cy="6.5" r="3"/><path d="M2 17a5.5 5.5 0 0 1 11 0"/><path d="M14 4.2a3 3 0 0 1 0 5.6M15.5 16.8a4.6 4.6 0 0 0-1.6-3.4"/>'),
  truck: s('<path d="M1.5 4.5h9V13h-9z"/><path d="M10.5 7.5h3.2l2.8 2.4V13h-6z"/><circle cx="5" cy="15" r="1.5"/><circle cx="13.5" cy="15" r="1.5"/>'),
  cash: s('<rect x="2" y="5" width="16" height="10.5" rx="2"/><circle cx="10" cy="10.2" r="2.4"/><path d="M5 8v4.5M15 8v4.5"/>'),
  list: s('<path d="M7 5h11M7 10h11M7 15h11M3 5h.01M3 10h.01M3 15h.01"/>'),
  chart: s('<path d="M3 16.5V9M8 16.5V4M13 16.5v-5M18 16.5V7"/>'),
  settings: s('<circle cx="10" cy="10" r="2.6"/><path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M4.7 15.3l1.4-1.4M13.9 6.1l1.4-1.4"/>'),
  calendar: s('<rect x="2.5" y="4" width="15" height="13.5" rx="2"/><path d="M6.5 2v3M13.5 2v3M2.5 8.5h15"/>'),
  folder: s('<path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h3.4l1.6 2H16a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15V5.5z"/><path d="M6.5 11h7"/>'),
  pill: s('<rect x="1.8" y="7" width="16.4" height="6" rx="3" transform="rotate(-40 10 10)"/><path d="M7.4 6.1l6.5 6.5"/>'),
  file: s('<path d="M5 2.5h6l4 4v11H5z"/><path d="M11 2.5v4h4M7.5 11h5M7.5 14h3.5"/>'),
  stethoscope: s('<path d="M5 2.5v4a3.2 3.2 0 0 0 6.4 0v-4"/><path d="M8.2 9.6v2.6a3.8 3.8 0 0 0 7.6 0v-1.4"/><circle cx="15.8" cy="8.6" r="1.6"/>'),
  shield: s('<path d="M10 2.5l6 2v5c0 4-2.6 6.6-6 8-3.4-1.4-6-4-6-8v-5l6-2z"/><path d="M7.4 10l1.9 1.9 3.4-3.6"/>'),
  wifiOff: s('<path d="M3 7.5a11 11 0 0 1 4.2-2.3M12.8 5.4A11 11 0 0 1 17 7.5M6 10.6a7 7 0 0 1 2-1.2M12.4 9.6a7 7 0 0 1 1.6 1"/><circle cx="10" cy="14.6" r="1.2"/><path d="M2.5 2.5l15 15"/>'),
  download: s('<path d="M10 3v9M6.5 8.8L10 12.3l3.5-3.5"/><path d="M3.5 15.5h13"/>'),
  check: s('<path d="M4 10.5l3.8 3.8L16 5.8"/>'),
  arrow: s('<path d="M4 10h11M11 6l4 4-4 4"/>'),
  phone: s('<path d="M6.2 2.8l2 .4 1 3-1.7 1.4a9 9 0 0 0 4.5 4.5l1.4-1.7 3 1 .4 2a1.6 1.6 0 0 1-1.6 1.8C9.3 15.2 4.8 10.7 4.4 4.4A1.6 1.6 0 0 1 6.2 2.8z"/>'),
  mail: s('<rect x="2" y="4.5" width="16" height="11" rx="2"/><path d="M2.6 5.6L10 10.8l7.4-5.2"/>'),
  whatsapp: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.7a8.2 8.2 0 0 0-7 12.5L1.7 18.3l4.2-1.2A8.2 8.2 0 1 0 10 1.7zm0 1.6a6.6 6.6 0 1 1-3.4 12.2l-.3-.2-2.4.7.7-2.3-.2-.3A6.6 6.6 0 0 1 10 3.3zm-2.9 3c-.2 0-.5.1-.7.3-.2.3-.7.8-.7 1.7 0 .9.7 1.9 1.7 3 .9.9 2.4 1.9 3.6 2 .8 0 1.4-.3 1.7-.7.2-.3.3-.7.2-.9 0-.1-.1-.2-.3-.3l-1.3-.6c-.2 0-.3 0-.4.1l-.5.6c-.1.1-.2.2-.4.1a5.4 5.4 0 0 1-2.6-2.3c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.2 0-.4l-.5-1.3c-.1-.3-.2-.3-.4-.3h-.4z"/></svg>`,
  spark: s('<path d="M10 2.5l1.7 4.3 4.3 1.7-4.3 1.7L10 14.5 8.3 10.2 4 8.5l4.3-1.7L10 2.5z"/>'),
  clock: s('<circle cx="10" cy="10" r="7.5"/><path d="M10 6v4.3l3 1.7"/>'),
  pin: s('<path d="M10 17.5s5.5-4.6 5.5-8.6a5.5 5.5 0 0 0-11 0c0 4 5.5 8.6 5.5 8.6z"/><circle cx="10" cy="8.8" r="2"/>'),
  monitor: s('<rect x="2" y="3.5" width="16" height="10.5" rx="2"/><path d="M7 17h6M10 14v3"/>'),
  lock: s('<rect x="3.5" y="8.5" width="13" height="9" rx="2"/><path d="M6.8 8.5V6.2a3.2 3.2 0 0 1 6.4 0v2.3"/>'),
  refresh: s('<path d="M16.5 8.5A6.5 6.5 0 0 0 5 5.6M3.5 11.5A6.5 6.5 0 0 0 15 14.4"/><path d="M16.8 4.5v4h-4M3.2 15.5v-4h4"/>'),
  print: s('<path d="M5.5 7V3h9v4"/><rect x="2.5" y="7" width="15" height="6.5" rx="1.5"/><path d="M5.5 11.5h9V17h-9z"/>'),
  tag: s('<path d="M10.6 2.5H16a1.5 1.5 0 0 1 1.5 1.5v5.4a1.5 1.5 0 0 1-.44 1.06l-6 6a1.5 1.5 0 0 1-2.12 0l-5.4-5.4a1.5 1.5 0 0 1 0-2.12l6-6A1.5 1.5 0 0 1 10.6 2.5z"/><circle cx="13.4" cy="6.6" r="1.1"/>')
}

export default icons
