/** Prefixa qualquer path interno com BASE_URL (necessário para GitHub Pages subpath). */
export const b = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.replace(/^\//, '');
  return p ? `${base}/${p}` : `${base}/`;
};
